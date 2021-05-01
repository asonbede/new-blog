import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBlogHandler, likeHandler } from "../reducers/blogReducer";

import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useRouteMatch, Link } from "react-router-dom";

const OneBlog = () => {
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
  let imagePath;
  if (blog) {
    try {
      imagePath = require(`../images/photo-${blog.title}.jpeg`);
    } catch (error) {
      imagePath = require(`../images/default-photo.jpeg`);
    }

    return (
      <div style={blogStyle}>
        <div>
          <p>
            {" "}
            <Link to="/"> Close View </Link>
          </p>

          <p>
            {" "}
            {blog.title} {blog.author}
          </p>
          <img src={`${imagePath}`} alt="image of Blog" />

          <p>Url:{blog.url}</p>
          <p>
            Likes:{blog.likes}{" "}
            <button
              onClick={() =>
                dispatch(
                  likeHandler(blog.id, { ...blog, likes: blog.likes + 1 })
                )
              }
            >
              click to like
            </button>
          </p>
          <p>Author:{blog.author}</p>
          {user.username === blog.user.username ? (
            <p>
              <button onClick={() => dispatch(removeBlogHandler(blog.id))}>
                Delete
              </button>
            </p>
          ) : null}
        </div>
        <hr />
        <CommentForm blog={blog} />
        <hr />
        <Comments blog={blog} />
      </div>
    );
  }

  return null;
};

export default OneBlog;
