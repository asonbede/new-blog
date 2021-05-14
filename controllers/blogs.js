const blogsRouter = require("express").Router();
const Bloglist = require("../models/blogs");

const User = require("../models/user");
const jwt = require("jsonwebtoken");
const sizeOf = require("image-size");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const {
  uploadFile,
  getFileStream,
  uploadFunc,
} = require("../utils/s3-services");
// blogsRouter.get("/", (request, response) => {
//   Bloglist.find({}).then((blogs) => {
//     response.json(blogs);
//   });
// });

blogsRouter.get("/", async (request, response) => {
  const blogs = await Bloglist.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  return response.json(blogs.map((blog) => blog.toJSON()));

  //response.json(blogs);
});

// app.get('/api/blogs', (request, response) => {
//     Blog
//       .find({})
//       .then(blogs => {
//         response.json(blogs)
//       })
//   })

blogsRouter.get("/:id", (request, response, next) => {
  Bloglist.findById(request.params.id)
    .populate("user", {
      username: 1,
      name: 1,
    })
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// notesRouter.post("/", (request, response, next) => {
//   const body = request.body;

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// app.post('/api/blogs', (request, response) => {
//     const blog = new Blog(request.body)

//     blog
//       .save()
//       .then(result => {
//         response.status(201).json(result)
//       })
//   })

// const getTokenFrom = (request) => {
//   const authorization = request.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     return authorization.substring(7);
//   }
//   return null;
// };

//get user image from s3
blogsRouter.get("/images/:key", (req, res) => {
  console.log("inside get");
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

//handle create blog
async function handleCreateBlog(req, res, imageid) {
  const body = req.body;
  console.log({ body }, "in jest");
  // const token = getTokenFrom(request);
  const token = req.token;
  console.log({ token });
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  console.log("working in blog");
  const user = await User.findById(decodedToken.id);
  console.log("working in blog222");
  const blog = new Bloglist({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id,
    comments: [],
    imageid,
  });
  console.log("working33333");
  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  res.json(savedBlog);
}

blogsRouter.post("/", async (req, res, next) => {
  const upload = uploadFunc(9000000);
  console.log("started....");

  upload(req, res, async (err) => {
    // const description = req.body.description;
    // console.log({ description }, "from image");
    if (err) {
      //res.json({ msg: err });
      return res.status(401).json({ error: err });
    } else {
      if (req.file == undefined) {
        // res.json({ msg: "Error-no file selected" });
        return res.status(401).json({ error: "Error-no file selected" });
      } else {
        const file = req.file;

        const dimensions = sizeOf(`upload/${file.filename}`); // replace with your image
        console.log(dimensions.width, dimensions.height, "demensions");

        console.log({ file });
        const result = await uploadFile(file);
        console.log({ result });
        await unlinkFile(file.path);
        // const description = req.body.description;
        // console.log(description);
        const imageid = `/api/blogs/images/${result.key}`;
        // handleRegister(req.body, imageid, res);
        handleCreateBlog(req, res, imageid);
        //res.json({ imagePath: `/api/users/images/${result.key}` });
      }
    }
  });
});

blogsRouter.delete("/:id", async (request, response, next) => {
  console.log("deletingggg");
  const token = request.token;
  const blogId = request.params.id;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const userid = decodedToken.id;
  const user = await User.findById(userid);
  const blog = await Bloglist.findById(blogId);
  if (blog.user.toString() === userid.toString()) {
    await Bloglist.findByIdAndRemove(blogId);
    //await User.updateOne({ _id: req.token.id }, { $pull: { 'blogs': req.params.id } });

    user.blogs = user.blogs.filter((id) => id !== blogId);
    await user.save();

    response.status(204).end();
  } else {
    return response
      .status(401)
      .json({ error: "You are not authorised to remove this most" });
  }
});

//handle update blog
async function handleUpdateBlog(req, res, imageid) {
  console.log("iinnnnnput server");
  //const body = request.body;
  const blog = {
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes,
    comments: req.body.comments,
    imageid:
      req.body.imagetype === "old" || req.body.imagetype === undefined
        ? req.body.imageid
        : imageid,
    comments: req.body.comments,
  };

  //console.log({body})
  let updatedBlog = await Bloglist.findByIdAndUpdate(req.params.id, blog, {
    new: true,
  });
  updatedBlog = updatedBlog.toJSON();
  const user = await User.findOne({ _id: updatedBlog.user });
  updatedBlog.user = { username: user.username, name: user.name };
  console.log({ updatedBlog });
  return res.json(updatedBlog);
}

blogsRouter.put("/:id", async (req, res, next) => {
  console.log(req.body, "bodyyyyyyyyyyy");
  const imagetype = req.body.imagetype;

  if (imagetype === "old" || imagetype === undefined) {
    handleUpdateBlog(req, res);
    return;
  }
  const upload = uploadFunc(9000000);
  console.log("started....");

  upload(req, res, async (err) => {
    console.log(req.body, "bodyyyyyyyyyyy33333333");

    // const description = req.body.description;
    // console.log({ description }, "from image");
    if (err) {
      //res.json({ msg: err });
      return res.status(401).json({ error: err });
    } else {
      if (req.file == undefined) {
        // res.json({ msg: "Error-no file selected" });
        return res.status(401).json({ error: "Error-no file selected" });
      } else {
        const file = req.file;

        const dimensions = sizeOf(`upload/${file.filename}`); // replace with your image
        console.log(dimensions.width, dimensions.height, "demensions");

        console.log({ file });
        const result = await uploadFile(file);
        console.log({ result });
        await unlinkFile(file.path);
        // const description = req.body.description;
        // console.log(description);
        const imageid = `/api/blogs/images/${result.key}`;
        // handleRegister(req.body, imageid, res);
        handleUpdateBlog(req, res, imageid);
        //res.json({ imagePath: `/api/users/images/${result.key}` });
      }
    }
  });
  // handleUpdateBlog(req, res, imageid);
  // console.log("iinnnnnput server");
  // //const body = request.body;
  // const blog = {
  //   title: request.body.title,
  //   author: request.body.author,
  //   url: request.body.url,
  //   likes: request.body.likes,
  //   comments: request.body.comments,
  // };

  // //console.log({body})
  // let updatedBlog = await Bloglist.findByIdAndUpdate(request.params.id, blog, {
  //   new: true,
  // });
  // updatedBlog = updatedBlog.toJSON();
  // const user = await User.findOne({ _id: updatedBlog.user });
  // updatedBlog.user = { username: user.username, name: user.name };
  // console.log({ updatedBlog });
  // return response.json(updatedBlog);
});

module.exports = blogsRouter;
