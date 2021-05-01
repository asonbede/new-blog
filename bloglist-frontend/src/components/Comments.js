import React from "react";
import { useSelector } from "react-redux";
//window.location.reload()
const Comments = ({ blog }) => {
  //   const blogs = useSelector((state) => state.blogs);
  //   console.log({ blogs }, "comments");
  //   const blogResult = blogs.length
  //     ? blogs.find((newBlog) => newBlog.id === blog.id)
  //     : { comments: [] };
  console.log({ blog });
  return (
    <div>
      {blog.comments.length ? (
        blog.comments.map((comment, i) => (
          <li key={`${i}-comment`}> {comment}</li>
        ))
      ) : (
        <ul>
          <li>No Comment Yet, Leave One</li>
        </ul>
      )}
    </div>
  );
};
export default Comments;
