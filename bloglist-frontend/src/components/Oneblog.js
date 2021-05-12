import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBlogHandler, likeHandler } from "../reducers/blogReducer";

import CommentForm from "./CommentForm";
import Comments from "./Comments";
import BlogTitle from "./BlogTitle";
import BlogBody from "./BlogBody";
import { useRouteMatch, Link } from "react-router-dom";

const OneBlog = (props) => {
  console.log("one blog running");
  const dispatch = useDispatch();
  let match = useRouteMatch("/blogs/:id");
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs
    ? blogs.find((blog) => blog.id.toString() === match.params.id)
    : null;
  console.log({ blog });
  const user = useSelector((state) => state.logInUser);
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  // dispatch(createComment(blog.id,{...blog,comments:[...blog.comments,event.target.comment.value]}))
  if (blog) {
    return (
      <div>
        <BlogTitle blog={blog} />
        <BlogBody blog={blog} user={user} />
        <hr />
        <Comments blog={blog} noteFormRef={props.noteFormRef} />
        <hr />
        <CommentForm blog={blog} />
      </div>
    );
  }

  return null;
};

export default OneBlog;
