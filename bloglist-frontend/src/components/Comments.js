import React from "react";
import { useSelector } from "react-redux";
import { Media, Image } from "react-bootstrap";

//window.location.reload()
const Comments = ({ blog }) => {
  //   const blogs = useSelector((state) => state.blogs);
  //   console.log({ blogs }, "comments");
  //   const blogResult = blogs.length
  //     ? blogs.find((newBlog) => newBlog.id === blog.id)
  //     : { comments: [] };
  // const imagePath = blog.comments.length ?
  //  `http://localhost:8082${blog.comments.profileimageid}`
  // : require("../images/profile.jpg");

  //const imagePath = require(`../images/profile.jpg`);
  console.log({ blog });
  return (
    <div>
      {blog.comments.length ? (
        blog.comments.map((comment, i) => (
          <Media key={`${i}-comment`} style={{ marginBottom: 20 }}>
            {" "}
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src={
                comment.profileimageid
                  ? `http://localhost:8082${comment.profileimageid}`
                  : require("../images/profile.jpg")
              }
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{comment.commenter}</h5>
              <p style={{ width: "40%" }}>{comment.comment}</p>
            </Media.Body>
          </Media>
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
