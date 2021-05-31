import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeBlogHandler, likeHandler } from "../reducers/blogReducer";

// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
// import { useRouteMatch, Link } from "react-router-dom";
import { Card, Accordion } from "react-bootstrap";

const BlogTitle = ({ blog }) => {
  const [blogTitleSuffix, setblogTitleSuffix] = useState(true);
  const classVarr = blogTitleSuffix ? "add-on-present" : "add-on-addsent";
  console.log({ classVarr });
  // dispatch(createComment(blog.id,{...blog,comments:[...blog.comments,event.target.comment.value]}))
  if (blog) {
    if (blog.title.length < 100) {
      return (
        <Card style={{ width: "70%", fontSize: "20px" }}>
          <Card.Body>{blog.title}</Card.Body>
        </Card>
      );
    } else {
      return (
        <Accordion style={{ width: "70%", fontSize: "20px" }}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              onClick={() => setblogTitleSuffix(!blogTitleSuffix)}
              className={classVarr}
              eventKey="0"
            >
              {blog.title.slice(0, 100)}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{blog.title}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    }
  }

  return null;
};

export default BlogTitle;
