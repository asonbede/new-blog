import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  removeBlogHandler,
  sendCreateMainBlogLike,
} from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
// import { useRouteMatch, Link } from "react-router-dom";
import { Card, Accordion, Image, Badge } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
import MainBlogUpdateForm from "./MainBlogUpdateForm";
import Togglable from "./Togglable";
const BlogBody = ({ blog, user, noteFormRef, paraValue, diabledLink }) => {
  const [blogTitleSuffix, setblogTitleSuffix] = useState(true);
  const classVarr = blogTitleSuffix ? "add-on-present" : "add-on-addsent";
  const dispatch = useDispatch();

  const handleMainBlogLike = (id) => {
    let newObj;
    if (blog.likes.likeValue) {
      const hasAlreadyLiked = blog.likes.likers.some(
        (person) => person === user.username
      );
      if (hasAlreadyLiked) {
        newObj = {
          ...blog,
          likes: {
            likers: [
              ...blog.likes.likers.filter((person) => person !== user.username),
            ],
            likeValue: blog.likes.likeValue - 1,
          },
        };
        console.log("already liked");
      } else {
        newObj = {
          ...blog,
          likes: {
            likeValue: blog.likes.likeValue + 1,
            likers: [...blog.likes.likers, user.username],
          },
        };
        console.log("not already liked---liking");
      }
    } else {
      newObj = {
        ...blog,
        likes: {
          likeValue: 1,
          likers: [user.username],
        },
      };
    }

    dispatch(sendCreateMainBlogLike(id, newObj));
  };

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
                className={diabledLink ? "grey-color" : "blue-color"}
                href="#"
                style={{ marginRight: 10 }}
                onClick={() => handleMainBlogLike(blog.id)}
              >
                <Badge pill variant="primary">
                  {blog.likes.likeValue}{" "}
                </Badge>
                Likes
              </Card.Link>
              {/* <Card.Link href="#">Comments{blog.comments.length}</Card.Link> */}
              <Link
                to={diabledLink ? "#" : `/comments/${paraValue}`}
                className={diabledLink ? "grey-color" : "blue-color"}
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                <Badge pill variant="primary">
                  {blog.comments.length}{" "}
                </Badge>{" "}
                Comments
              </Link>

              <Link
                to={diabledLink ? "#" : `/questions/${paraValue}`}
                className={diabledLink ? "grey-color" : "blue-color"}
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                <Badge pill variant="primary">
                  {blog.questions.length}{" "}
                </Badge>{" "}
                Questions
              </Link>

              {user.username === blog.user.username ? (
                <Card.Link
                  className={diabledLink ? "grey-color" : "blue-color"}
                  href="#"
                  style={{ marginRight: 10 }}
                  onClick={() => dispatch(removeBlogHandler(blog.id))}
                >
                  Delete
                </Card.Link>
              ) : null}

              {user.username === blog.user.username ? (
                <Link
                  to={diabledLink ? "#" : `/updatemainblog/${paraValue}`}
                  className={diabledLink ? "grey-color" : "blue-color"}
                  style={{ marginRight: 10, textDecoration: "none" }}
                >
                  {" "}
                  Update{" "}
                </Link>
              ) : null}

              <Link to="/" style={{ marginRight: 10, textDecoration: "none" }}>
                {" "}
                Blog List{" "}
              </Link>
              <Link
                to={`/blogs/${paraValue}`}
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                {" "}
                Back{" "}
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
