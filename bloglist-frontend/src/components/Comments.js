import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { Media, Image, Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleComment } from "../reducers/blogReducer";
import { updateMessage } from "../reducers/commentUpdateReducer";
import UpdateForm from "./UpdateForm";
import Togglable from "./Togglable";
import CommentReply from "./CommentReply";
import ReplyFormAccordion from "./DisplayReply";

//window.location.reload()
const Comments = ({ blog, noteFormRef }) => {
  // const [starter, setstarter] = useState(null);
  // const [comment, setcomment] = useState({});
  const user = useSelector((state) => state.logInUser);
  const dispatch = useDispatch();

  // const scrollToElement = () => {
  //   document.getElementById("updateForm").scrollIntoView();//updateForm
  // };

  function getTimeDiff(oDatePublished) {
    const oResult = {};
    let timeToShow = "";
    var oToday = new Date();

    var nDiff = oToday.getTime() - oDatePublished;

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
  const handleDeleteComment = (blog, comment) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    const blogObj = {
      ...blog,
      comments: blog.comments.filter((item) => item.commentId !== commentId),
    };

    //const blogObject = blogs.find((blog) => blog.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete this comment from database/server`
    );
    if (!confirmResult) {
      return;
    }

    dispatch(handleComment(blogId, blogObj, "delete"));
  };

  const handleLikeComment = (blog, comment) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    const newCommentObj = {
      ...comment,
      likes: comment.likes + 1,
    };
    const newArray = blog.comments.map((item) => {
      if (item.commentId === commentId) {
        return newCommentObj;
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      comments: newArray,
    };

    dispatch(handleComment(blogId, blogObj, "like"));
  };

  const handleDisLikeComment = (blog, comment) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    const newCommentObj = {
      ...comment,
      dislikes: comment.dislikes + 1,
    };
    const newArray = blog.comments.map((item) => {
      if (item.commentId === commentId) {
        return newCommentObj;
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      comments: newArray,
    };

    dispatch(handleComment(blogId, blogObj, "dislike"));
  };

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
              <span style={{ marginRight: 10 }}>
                {comment.postedTime
                  ? getTimeDiff(comment.postedTime)
                  : "notime"}
              </span>

              <Button
                style={{ marginRight: 10 }}
                onClick={() => handleLikeComment(blog, comment)}
                size="sm"
              >
                <Badge pill variant="success">
                  {comment.likes}
                </Badge>{" "}
                Like
              </Button>
              <Button
                style={{ marginRight: 10 }}
                onClick={() => handleDisLikeComment(blog, comment)}
                size="sm"
              >
                <Badge pill variant="success">
                  {comment.dislikes}
                </Badge>{" "}
                Dislike
              </Button>

              {user.username === comment.commenter ? (
                <Button
                  style={{ marginRight: 10 }}
                  onClick={() => handleDeleteComment(blog, comment)}
                  size="sm"
                >
                  Delete
                </Button>
              ) : null}

              {user.username === comment.commenter ? (
                // c
                //   href="#"
                //   style={{ marginRight: 10 }}
                //   onClick={() => handleUpdateComment(comment)}
                // >
                //   Update Comment
                // </Card.Link>

                <Togglable buttonLabel="update" ref={noteFormRef}>
                  <UpdateForm
                    blog={blog}
                    noteFormRef={noteFormRef}
                    commentObj={comment}
                  />
                </Togglable>
              ) : null}
              <ReplyFormAccordion
                commentObj={comment}
                blog={blog}
                user={user}
                getTimeDiff={getTimeDiff}
                noteFormRef={noteFormRef}
                blog={blog}
              />
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
