import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  removeBlogHandler,
  handleCreateMainBlogLike,
} from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
// import { useRouteMatch, Link } from "react-router-dom";
import { Card, Accordion, Image, Badge } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
import MainBlogUpdateForm from "./MainBlogUpdateForm";
import Togglable from "./Togglable";
const BlogBody = ({ blog, user, noteFormRef }) => {
  const [blogTitleSuffix, setblogTitleSuffix] = useState(true);
  const classVarr = blogTitleSuffix ? "add-on-present" : "add-on-addsent";
  const dispatch = useDispatch();
  // dispatch(createComment(blog.id,{...blog,comments:[...blog.comments,event.target.comment.value]}))
  if (blog) {
    const imagePath = blog.imageid
      ? `http://localhost:8082${blog.imageid}`
      : require(`../images/default-photo.jpeg`);

    return (
      <Accordion style={{ width: "80%" }}>
        <Card>
          <Image
            variant="top"
            src={`${imagePath}`}
            alt="blog image"
            fluid
            rounded
          />

          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Text
              onClick={() => setblogTitleSuffix(!blogTitleSuffix)}
              className={classVarr}
            >
              {" "}
              {blog.url.slice(0, 200)}
            </Card.Text>

            <Card.Text>By {blog.author}</Card.Text>
            <Card.Text>
              <Card.Link
                href="#"
                style={{ marginRight: 10 }}
                onClick={() =>
                  dispatch(
                    handleCreateMainBlogLike(blog.id, {
                      ...blog,
                      likes: blog.likes + 1,
                    })
                  )
                }
              >
                <Badge pill variant="primary">
                  {blog.likes}{" "}
                </Badge>
                Likes
              </Card.Link>
              {/* <Card.Link href="#">Comments{blog.comments.length}</Card.Link> */}
              <Link
                to="/comments"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                <Badge pill variant="primary">
                  {blog.comments.length}{" "}
                </Badge>{" "}
                Comments
              </Link>

              {user.username === blog.user.username ? (
                <Card.Link
                  href="#"
                  style={{ marginRight: 10 }}
                  onClick={() => dispatch(removeBlogHandler(blog.id))}
                >
                  Delete
                </Card.Link>
              ) : null}

              {user.username === blog.user.username ? (
                <Togglable buttonLabel="update" ref={noteFormRef}>
                  <MainBlogUpdateForm blog={blog} noteFormRef={noteFormRef} />
                </Togglable>
              ) : null}

              <Link to="/" style={{ marginRight: 10, textDecoration: "none" }}>
                {" "}
                Blog List{" "}
              </Link>
            </Card.Text>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{blog.url}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  return null;
};

export default BlogBody;
