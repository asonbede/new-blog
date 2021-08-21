import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  sendRemoveBlogHandler,
  sendCreateMainBlogLike,
} from "../reducers/blogReducer";
import { sendMainBlogUpdate } from "../reducers/commentUpdate";
import { useDispatch, useSelector } from "react-redux";
// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
// import { useRouteMatch, Link } from "react-router-dom";
import { Card, Accordion, Image, Badge } from "react-bootstrap";
import AlertComponent from "./AlertComponent";
import { useRouteMatch, Link } from "react-router-dom";
import MainBlogUpdateForm from "./MainBlogUpdateForm";
import Togglable from "./Togglable";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import DisplayFormatedBlog from "./DisplayFormatedBlog";
import StrLineGraphAndTableOfValue from "./data-presentation/StrLineGraphAndTableOfValue";
import GraphTableExplanation from "./data-presentation/GraphTableExplanation";
import imageSize from "image-size";
//import MainBlogUpdateForm from "./MainBlogUpdateForm";
//import { renderMessage } from "../reducers/messageReducer";
const BlogBody = ({ blog, blogs, user, noteFormRef, paraValue }) => {
  const [blogTitleSuffix, setblogTitleSuffix] = useState(true);
  const [showAlert, setshowAlert] = useState(false);
  const [alertContent, setalertContent] = useState({});
  const [deleteHandlerOutput, setdeleteHandlerOutput] = useState({});

  const classVarr = blogTitleSuffix ? "add-on-present" : "add-on-addsent";

  const dispatch = useDispatch();

  // dispatch(renderMessage(null));
  const blogIdItems = {
    "60c8ccabc7580d2db825db5b": [
      () => <StrLineGraphAndTableOfValue />,
      () => <GraphTableExplanation />,
    ],
  };

  const handleMainBlogLike = (id) => {
    console.log("like called");
    let newObj;
    if (blog.likes.likeValue) {
      const hasAlreadyLiked = blog.likes.likers.some(
        (person) => person === user.username
      );
      if (hasAlreadyLiked) {
        newObj = {
          ...blog,
          likes: JSON.stringify({
            likers: [
              ...blog.likes.likers.filter((person) => person !== user.username),
            ],
            likeValue: blog.likes.likeValue - 1,
          }),
        };
        console.log("already liked");
      } else {
        newObj = {
          ...blog,
          likes: JSON.stringify({
            likeValue: blog.likes.likeValue + 1,
            likers: [...blog.likes.likers, user.username],
          }),
        };
        console.log("not already liked---liking");
      }
    } else {
      newObj = {
        ...blog,
        likes: JSON.stringify({
          likeValue: 1,
          likers: [user.username],
        }),
      };
      console.log("like initiated");
    }
    newObj = {
      ...newObj,
      comments: JSON.stringify(newObj.comments),
      questions: JSON.stringify(newObj.questions),
    };
    dispatch(sendCreateMainBlogLike(id, newObj));
  };

  function getTimeDiff(oDatePublished) {
    const oResult = {};
    let timeToShow = "";
    var oToday = new Date();

    var nDiff = oToday.getTime() - oDatePublished;
    console.log({ nDiff });
    // Get diff in days
    oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
    nDiff -= oResult.days * 1000 * 60 * 60 * 24;

    // Get diff in hours
    oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
    nDiff -= oResult.hours * 1000 * 60 * 60;

    // Get diff in minutes
    oResult.minutes = Math.floor(nDiff / 1000 / 60);
    nDiff -= oResult.minutes * 1000 * 60;

    // Get diff in seconds
    oResult.seconds = Math.floor(nDiff / 1000);

    // var timeValueArr = [];
    // for (let time in oResult) {
    //   timeValueArr.push(oResult[time]);
    // }
    // const max = Math.max(...timeValueArr);
    for (let time in oResult) {
      if (oResult[time] > 0) {
        timeToShow = oResult[time].toString() + " " + time + " " + "ago";
        return timeToShow;
      }
    }
  }

  const handleDeleteBlog = () => {
    const blogId = blog.id;
    const blogToBeRemoved = blogs.find((blog) => blog.id === blogId);

    setalertContent({
      headers: "Blog Delete Alert",
      body: `Do you really want to delete this Blog with the title: ${blogToBeRemoved.title} from database?
      Note that this action will delete any likes, questions and comments associated with this blog, this action 
      is irreversible: a deleted blog cannot be recovered`,
    });
    setshowAlert(true);

    setdeleteHandlerOutput({ blogId });
  };
  const continueHandler = () => {
    console.log({ deleteHandlerOutput });
    dispatch(sendRemoveBlogHandler(deleteHandlerOutput.blogId));
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };
  const cancelHandler = () => {
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };

  // const convertFromJSONToHTML = (text) => {
  //   console.log({ text });

  //   return stateToHTML(convertFromRawJSON.parse((text)));
  // };
  // const convertFromJSONToHTML = (text) => {
  //   return stateToHTML(convertFromRaw(JSON.parse(text)));
  // };

  if (blog) {
    // {
    //   console.log(convertFromJSONToHTML(blog.url), "fromm blog-bodyyy");
    // }
    const imagePath = blog.imageidd
      ? `http://localhost:8082${blog.imageid}`
      : require(`../images/default-photo.jpeg`);
    console.log(blog.imageid, "imageeeeeididddddd");
    console.log(blog, "from body");
    return (
      <>
        <AlertComponent
          showAlert={showAlert}
          continueHandler={continueHandler}
          cancelHandler={cancelHandler}
          alertContent={alertContent}
        />
        {/* <p><img src></p> */}
        <Card style={{ width: "100%" }}>
          <Card.Text style={{ fontSize: "3rem", textAlign: "center" }}>
            {" "}
            {blog.topic ? blog.topic : "Please indicate the topic"}
          </Card.Text>
          <DisplayFormatedBlog
            contentFromServer={blog.title}
            toolbarPresent={false}
          />
          {blog.id in blogIdItems ? (
            blogIdItems[blog.id][0]()
          ) : (
            <Card.Img variant="top" src={`${imagePath}`} alt="blog image" />
          )}

          {/* <Image
            variant="top"
            src={`${imagePath}`}
            alt="blog image"
            fluid
            rounded
          /> */}
          <Card.Body>
            <Card.Text>By {blog.author}</Card.Text>
            {/* <Card.Text> */}
            <Card.Link
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
              to={`/comments/${paraValue}`}
              style={{ marginRight: 10, textDecoration: "none" }}
            >
              <Badge pill variant="primary">
                {blog.comments.length}{" "}
              </Badge>{" "}
              Comments
            </Link>
            <Link
              to={`/questions/${paraValue}`}
              style={{ marginRight: 10, textDecoration: "none" }}
            >
              <Badge pill variant="primary">
                {blog.questions.length}{" "}
              </Badge>{" "}
              Questions
            </Link>{" "}
            <Link to="#" style={{ marginRight: 10, textDecoration: "none" }}>
              <span>
                Created:{" "}
                <Badge pill variant="primary">
                  {console.log(blog.created, "created----blog")}
                  {blog.created
                    ? `${getTimeDiff(blog.created)}`
                    : "not implemented"}{" "}
                </Badge>
              </span>
            </Link>
            <Link to="#" style={{ marginRight: 10, textDecoration: "none" }}>
              <span>
                Updated:{" "}
                <Badge pill variant="primary">
                  {blog.updated
                    ? `${getTimeDiff(blog.updated)}`
                    : "not implemented"}{" "}
                </Badge>
              </span>
            </Link>
            <Link to="/" style={{ marginRight: 10, textDecoration: "none" }}>
              {" "}
              Back{" "}
            </Link>
          </Card.Body>

          <Card.Body>
            {blog.id in blogIdItems ? (
              blogIdItems[blog.id][1]()
            ) : (
              <DisplayFormatedBlog
                contentFromServer={blog.url}
                toolbarPresent={false}
              />
            )}
          </Card.Body>
          <Card.Body>
            {user.username === blog.user.username ? (
              <Card.Link
                href="#"
                style={{ marginRight: 10 }}
                onClick={handleDeleteBlog}
              >
                Delete
              </Card.Link>
            ) : null}

            {user.username === blog.user.username ? (
              <Link
                onClick={() => dispatch(sendMainBlogUpdate(blog.id))}
                to={"#"}
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                {" "}
                Update{" "}
              </Link>
            ) : null}
            {/* </Card.Body> */}
            <MainBlogUpdateForm
              blogIdValue={blog.id}
              blog={blog}
              noteFormRef={noteFormRef}
            />
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>

        <br />
        <br />
        <br />
        <br />
      </>
    );
  }

  return null;
};

export default BlogBody;
