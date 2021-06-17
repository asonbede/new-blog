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
  deleteFile,
} = require("../utils/s3-services");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Bloglist.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  return response.json(blogs.map((blog) => blog.toJSON()));

  //response.json(blogs);
});

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
    likes: body.likes || { likeValue: 0, likers: [] },
    user: user._id,
    comments: [],
    questions: [],
    imageid,
    created: body.created,
    updated: body.updated,
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
    if (err) {
      //res.json({ msg: err });
      return res.status(401).json({ error: err });
    } else {
      if (req.file == undefined) {
        // res.json({ msg: "Error-no file selected" });
        console.log("no file selectedddddd");
        handleCreateBlog(req, res, "");
        return res.status(204).end();
        //return res.status(401).json({ error: "Error-no file selected" });
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
//MyClass.findById(req.params.id)
blogsRouter.delete("/:id", async (request, response, next) => {
  console.log("deletingggg");
  const token = request.token;
  const blogId = request.params.id;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const userid = decodedToken.id;
  //const user = await User.findById(userid);
  console.log("deleti000000000000000000");
  const blog = await Bloglist.findById(blogId);
  console.log("deletingggg111111111111111");
  if (String(blog.user) === userid) {
    console.log("deletingggg22222222");
    await Bloglist.findByIdAndRemove(blogId);
    console.log("deletingggg333333");
    await User.updateOne(
      { _id: decodedToken.id },
      { $pull: { blogs: request.params.id } }
    );

    // user.blogs = user.blogs.filter((id) => id !== blogId);
    // await user.save();

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
    likes: JSON.parse(req.body.likes),
    comments: JSON.parse(req.body.comments),
    imageid:
      req.body.imagetype === "old" || req.body.imagetype === undefined
        ? req.body.imageid
        : imageid,
    //comments: req.body.comments,
    questions: JSON.parse(req.body.questions),
    updated: req.body.updated,
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
  //const imagetype = req.body.imagetype;

  // if (imagetype === "old" || imagetype === undefined ) {
  //   handleUpdateBlog(req, res);
  //   return;
  // }
  const upload = uploadFunc(9000000);
  console.log("started....");

  upload(req, res, async (err) => {
    const imagetype = req.body.imagetype;
    if (imagetype === "old" || imagetype === undefined) {
      handleUpdateBlog(req, res);
      return;
    }
    console.log(req.body, "bodyyyyyyyyyyy33333333");

    if (err) {
      //res.json({ msg: err });
      // console.log("no file selectedddddd");
      // handleUpdateBlog(req, res, "");
      // return res.status(204).end();
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

        handleUpdateBlog(req, res, imageid);
        console.log("continue to delete");
        //remove the old file from s3
        const oldImage = req.body.oldimage.split("/");
        const oldFileName = oldImage[oldImage.length - 1];
        deleteFile(oldFileName);
      }
    }
  });
});

module.exports = blogsRouter;
