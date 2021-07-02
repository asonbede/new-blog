import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { Media, Image, Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleComment,
  sendCommentLike,
  sendCommentDisLike,
  sendCommentDelete,
} from "../reducers/blogReducer";
import {
  sendCommentUpdate,
  sendReplViewWrite,
} from "../reducers/commentUpdate";
import { updateMessage } from "../reducers/commentUpdateReducer";
import CommentUpdateForm from "./CommentUpdateForm";
import Togglable from "./Togglable";
import CommentReply from "./CommentReply";
import DisplayReply from "./DisplayReply";
import CommentForm from "./CommentForm";
//import { useRouteMatch } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";
import DisplayFormatedBlog from "./DisplayFormatedBlog";
import AlertComponent from "./AlertComponent";
import { useDeleteResourse } from "../hooks/deleteResourses";
import { getTimeDiff } from "../miscellenous";
//window.location.reload()
const Comments = ({ noteFormRef }) => {
  // const [starter, setstarter] = useState(null);
  // const [comment, setcomment] = useState({});
  const messageObj = {
    headers: "Comment Delete Alert",
    body: `Do you really want to delete this comment from the  database?
    Note that this action will delete any likes, dislikes, replies  associated with this comment, this action 
    is irreversible: a deleted comment cannot be recovered`,
  };

  const {
    handleDeleteComment,
    continueHandler,
    cancelHandler,
    showAlert,
    alertContent,
    // deleteHandlerOutput,
    // setalertContent
  } = useDeleteResourse(messageObj);
  let user = useSelector((state) => state.logInUser);
  if (!user) {
    user = JSON.parse(localStorage.getItem("loggedNoteappUser"));
  }

  const replyViewWrite = useSelector(
    (state) => state.updateState.replyViewWrite
  );

  const replyViewWriteCommentId = useSelector(
    (state) => state.updateState.replyViewWriteCommentId
  );
  console.log("comennnnnnn");
  console.log({ replyViewWrite }, "5comment");
  //let match = useRouteMatch("/blogs/:id");

  let match = useRouteMatch("/comments/:id");
  const paraValue = match.params.id;
  console.log({ paraValue });
  let blogs = useSelector((state) => state.blogs);
  if (!blogs.length) {
    blogs = JSON.parse(localStorage.getItem("allBlogs"));
  }

  console.log({ blogs });
  const blog = blogs
    ? blogs.find((blog) => blog.id.toString() === match.params.id)
    : null;
  console.log({ blog });
  // const blog = blogs
  //   ? blogs.find((blog) => blog.id.toString() === match.params.id)
  //   : null;
  // console.log({ blog });

  const dispatch = useDispatch();

  // const scrollToElement = () => {
  //   document.getElementById("updateForm").scrollIntoView();//updateForm
  // };

  // function getTimeDiff(oDatePublished) {
  //   const oResult = {};
  //   let timeToShow = "";
  //   var oToday = new Date();

  //   var nDiff = oToday.getTime() - oDatePublished;

  //   // Get diff in days
  //   oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
  //   nDiff -= oResult.days * 1000 * 60 * 60 * 24;

  //   // Get diff in hours
  //   oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
  //   nDiff -= oResult.hours * 1000 * 60 * 60;

  //   // Get diff in minutes
  //   oResult.minutes = Math.floor(nDiff / 1000 / 60);
  //   nDiff -= oResult.minutes * 1000 * 60;

  //   // Get diff in seconds
  //   oResult.seconds = Math.floor(nDiff / 1000);

  //   // var timeValueArr = [];
  //   // for (let time in oResult) {
  //   //   timeValueArr.push(oResult[time]);
  //   // }
  //   // const max = Math.max(...timeValueArr);
  //   for (let time in oResult) {
  //     if (oResult[time] > 0) {
  //       timeToShow = oResult[time].toString() + " " + time + " " + "ago";
  //       return timeToShow;
  //     }
  //   }
  // }
  // const handleDeleteComment = (blog, comment) => {
  //   const blogId = blog.id;
  //   const commentId = comment.commentId;
  //   const blogObj = {
  //     ...blog,
  //     comments: blog.comments.filter((item) => item.commentId !== commentId),
  //   };

  //   //const blogObject = blogs.find((blog) => blog.id === id);
  //   const confirmResult = window.confirm(
  //     `Do you really want to delete this comment ${comment.comment} from database/server`
  //   );
  //   if (!confirmResult) {
  //     return;
  //   }

  //   dispatch(sendCommentDelete(blogId, blogObj, comment));
  // };

  // const handleLikeComment = (blog, comment) => {
  //   const blogId = blog.id;
  //   const commentId = comment.commentId;
  //   const newCommentObj = {
  //     ...comment,
  //     likes: comment.likes + 1,
  //   };
  //   const newArray = blog.comments.map((item) => {
  //     if (item.commentId === commentId) {
  //       return newCommentObj;
  //     } else {
  //       return item;
  //     }
  //   });
  //   const blogObj = {
  //     ...blog,
  //     comments: newArray,
  //   };
  //  dispatch(sendCommentLike(blogId, blogObj));
  // };
  //{ likeValue: 0, likers: [] },
  const handleLikeOrDislikeComment = (blog, comment, likesDislike) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    console.log("like called");
    let newObj;
    if (comment[likesDislike].likeValue) {
      const hasAlreadyLiked = comment[likesDislike].likers.some(
        (person) => person === user.username
      );
      if (hasAlreadyLiked) {
        newObj = {
          ...comment,
          [likesDislike]: {
            likers: [
              ...comment[likesDislike].likers.filter(
                (person) => person !== user.username
              ),
            ],
            likeValue: comment[likesDislike].likeValue - 1,
          },
        };
        console.log("already liked");
      } else {
        newObj = {
          ...comment,
          [likesDislike]: {
            likeValue: comment[likesDislike].likeValue + 1,
            likers: [...comment[likesDislike].likers, user.username],
          },
        };
        console.log("not already liked---liking");
      }
    } else {
      newObj = {
        ...comment,
        [likesDislike]: {
          likeValue: 1,
          likers: [user.username],
        },
      };
      console.log("like initiated");
    }

    const newArray = blog.comments.map((item) => {
      if (item.commentId === commentId) {
        return newObj;
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      comments: JSON.stringify(newArray),
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),
    };
    if (likesDislike === "likes") {
      dispatch(sendCommentLike(blogId, blogObj));
    } else {
      dispatch(sendCommentDisLike(blogId, blogObj));
    }
  };

  // const handleDisLikeComment = (blog, comment) => {
  //   const blogId = blog.id;
  //   const commentId = comment.commentId;
  //   console.log("like called");
  //   let newObj;
  //   if (comment.dislikes.likeValue) {
  //     const hasAlreadyLiked = comment.dislikes.likers.some(
  //       (person) => person === user.username
  //     );
  //     if (hasAlreadyLiked) {
  //       newObj = {
  //         ...comment,
  //         dislikes: {
  //           likers: [
  //             ...comment.dislikes.likers.filter(
  //               (person) => person !== user.username
  //             ),
  //           ],
  //           likeValue: comment.dislikes.likeValue - 1,
  //         },
  //       };
  //       console.log("already liked");
  //     } else {
  //       newObj = {
  //         ...comment,
  //         dislikes: {
  //           likeValue: comment.dislikes.likeValue + 1,
  //           likers: [...comment.dislikes.likers, user.username],
  //         },
  //       };
  //       console.log("not already liked---liking");
  //     }
  //   } else {
  //     newObj = {
  //       ...comment,
  //       dislikes: {
  //         likeValue: 1,
  //         likers: [user.username],
  //       },
  //     };
  //     console.log("like initiated");
  //   }

  //   const newArray = blog.comments.map((item) => {
  //     if (item.commentId === commentId) {
  //       return newObj;
  //     } else {
  //       return item;
  //     }
  //   });
  //   const blogObj = {
  //     ...blog,
  //     comments: JSON.stringify(newArray),
  //     questions: JSON.stringify(blog.questions),
  //     likes: JSON.stringify(blog.likes),
  //   };
  //   dispatch(sendCommentDisLike(blogId, blogObj));
  // };

  // const handleDisLikeComment = (blog, comment) => {
  //   const blogId = blog.id;
  //   const commentId = comment.commentId;
  //   const newCommentObj = {
  //     ...comment,
  //     dislikes: comment.dislikes + 1,
  //   };
  //   const newArray = blog.comments.map((item) => {
  //     if (item.commentId === commentId) {
  //       return newCommentObj;
  //     } else {
  //       return item;
  //     }
  //   });
  //   const blogObj = {
  //     ...blog,
  //     comments: newArray,
  //   };

  //   dispatch(sendCommentDisLike(blogId, blogObj));
  // };

  console.log({ blog });

  return (
    <div>
      <AlertComponent
        showAlert={showAlert}
        continueHandler={() => continueHandler(sendCommentDelete)}
        cancelHandler={cancelHandler}
        alertContent={alertContent}
      />
      {blog.comments.length ? (
        <p>
          <Link
            to={`/blogs/${paraValue}`}
            style={{ marginRight: 10, textDecoration: "none" }}
          >
            {" "}
            Back{" "}
          </Link>
        </p>
      ) : null}
      {blog.comments.length ? (
        blog.comments.map((comment, i) => (
          <>
            <Media key={`${i}-comment`} style={{ marginBottom: 20 }}>
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src={
                  comment.profileimageidg
                    ? `http://localhost:8082${comment.profileimageid}`
                    : require("../images/profile.jpg")
                }
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{comment.commenter}</h5>
                <div style={{ width: "60%" }}>
                  <DisplayFormatedBlog
                    contentFromServer={comment.comment}
                    toolbarPresent={false}
                    smallHeight={true}
                  />
                  {/* {comment.comment} */}
                </div>
                <span style={{ marginRight: 10 }}>
                  Created:{" "}
                  {comment.postedTime
                    ? getTimeDiff(comment.postedTime)
                    : "notime"}
                </span>
                <span style={{ marginRight: 10 }}>
                  updated:{" "}
                  {comment.updatedTime
                    ? getTimeDiff(comment.updatedTime)
                    : "notime"}
                </span>

                <Link
                  style={{ marginRight: 10 }}
                  onClick={() =>
                    handleLikeOrDislikeComment(blog, comment, "likes")
                  }
                  size="sm"
                >
                  <Badge pill variant="success">
                    {comment.likes.likeValue}
                  </Badge>{" "}
                  Like
                </Link>
                <Link
                  style={{ marginRight: 10 }}
                  onClick={() =>
                    handleLikeOrDislikeComment(blog, comment, "dislikes")
                  }
                  size="sm"
                >
                  <Badge pill variant="success">
                    {comment.dislikes.likeValue}
                  </Badge>{" "}
                  Dislike
                </Link>

                {user.username === comment.commenter ? (
                  <Link
                    style={{ marginRight: 10 }}
                    onClick={() => handleDeleteComment(blog, comment)}
                    size="sm"
                  >
                    Delete
                  </Link>
                ) : null}

                {user.username === comment.commenter ? (
                  <Link
                    onClick={() =>
                      dispatch(sendCommentUpdate(comment.commentId))
                    }
                    to="#"
                    style={{ marginRight: 10, textDecoration: "none" }}
                  >
                    update
                  </Link>
                ) : null}
                <CommentUpdateForm
                  blog={blog}
                  commentObj={comment}
                  noteFormRef={noteFormRef}
                  commentIdValue={comment.commentId}
                />
                <Link
                  onClick={() => dispatch(sendReplViewWrite(comment.commentId))}
                  to="#"
                  style={{ marginRight: 10, textDecoration: "none" }}
                >
                  <span
                    className={
                      replyViewWrite &&
                      replyViewWriteCommentId === comment.commentId
                        ? "close-reply"
                        : "open-reply"
                    }
                  >
                    {" "}
                    {comment.reply && comment.reply.length > 1
                      ? `${comment.reply.length} Replies`
                      : comment.reply && comment.reply.length === 1
                      ? "1 Reply"
                      : " NO Reply"}{" "}
                  </span>
                </Link>

                <DisplayReply
                  commentObj={comment}
                  blog={blog}
                  user={user}
                  getTimeDiff={getTimeDiff}
                  noteFormRef={noteFormRef}
                />
              </Media.Body>
            </Media>
          </>
        ))
      ) : (
        <ul>
          <li>No Comment Yet, Leave One</li>
        </ul>
      )}
      <hr />
      <Togglable buttonLabel="Write Comment" ref={noteFormRef}>
        <CommentForm blog={blog} noteFormRef={noteFormRef} />
      </Togglable>
    </div>
  );
};
export default Comments;
