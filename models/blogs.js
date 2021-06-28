const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  url: { type: String },
  likes: { type: Object },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: { type: Array },
  questions: { type: Array },
  imageid: { type: String },
  created: { type: Number },
  updated: { type: Number },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Bloglist", blogSchema);
