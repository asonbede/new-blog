const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const sizeOf = require("image-size");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const {
  uploadFile,
  getFileStream,
  uploadFunc,
} = require("../utils/s3-services");

//get user image from s3
usersRouter.get("/images/:key", (req, res) => {
  console.log("inside get");
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

//returns all the users in the database
usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
  });
  //response.json(users);
  return response.json(users.map((user) => user.toJSON()));
});

usersRouter.get("/:id", (request, response, next) => {
  User.findById(request.params.id)
    .populate("blogs", {
      url: 1,
      title: 1,
      author: 1,
    })
    .then((user) => {
      if (user) {
        response.json(user);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

//handle registration
async function handleRegister(body, imageid, res) {
  //const body = request.body;
  console.log({ body }, "from user");
  if (body.password.length < 3 || body.password === undefined) {
    return response.status(401).json({
      error:
        "password must be present and must be greater than 3 characters long",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
    profileimageid: imageid,
  });

  const savedUser = await user.save();

  res.json(savedUser);
}

usersRouter.post("/", async (req, res) => {
  const upload = uploadFunc(1000000);
  console.log("started....");

  upload(req, res, async (err) => {
    // const description = req.body.description;
    // console.log({ description }, "from image");
    if (err) {
      // res.json({ msg: err });
      return res.status(401).json({
        error: err,
      });
    } else {
      if (req.file == undefined) {
        //res.json({ msg: "Error-no file selected" });
        return res.status(401).json({
          error: "Error-no file selected",
        });
      } else {
        const file = req.file;

        const dimensions = sizeOf(`upload/${file.filename}`); // replace with your image
        console.log(dimensions.width, dimensions.height, "demensions");

        console.log({ file });
        const result = await uploadFile(file);
        console.log({ result });
        await unlinkFile(file.path);
        const description = req.body.description;
        console.log(description);
        const imageid = `/api/users/images/${result.key}`;
        handleRegister(req.body, imageid, res);
        //res.json({ imagePath: `/api/users/images/${result.key}` });
      }
    }
  });
});

usersRouter.delete("/:id", async (request, response, next) => {
  console.log("deletingggg");
  const token = request.token;
  const userId = request.params.id;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const userid = decodedToken.id;
  //const user = await User.findById(userid);
  //const blog = await Bloglist.findById(blogId);
  if (userId.toString() === userid.toString()) {
    await User.findByIdAndRemove(userId);
    //await User.updateOne({ _id: req.token.id }, { $pull: { 'blogs': req.params.id } });

    response.status(204).end();
  } else {
    return response
      .status(401)
      .json({ error: "You are not authorised to remove this user" });
  }
});

module.exports = usersRouter;
