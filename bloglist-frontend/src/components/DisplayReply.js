import React from "react";
import CommentReply from "./CommentReply";
import {
  sendDeleteCommentReply,
  sendLikeCommentReply,
  sendDisLikeCommentReply,
} from "../reducers/blogReducer";
import { sendCommentReplyUpdate } from "../reducers/commentUpdate";
import Togglable from "./Togglable";
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  Media,
  Image,
  Button,
  Badge,
  Card,
  Accordion,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import UpdateReplyForm from "./UpdateReplyForm";
import DisplayFormatedBlog from "./DisplayFormatedBlog";
import { useDeleteResourse } from "../hooks/deleteResourses";
import AlertComponent from "./AlertComponent";
const DisplayReply = ({ user, commentObj, getTimeDiff, noteFormRef, blog }) => {
  const dispatch = useDispatch();
  const replyViewWrite = useSelector(
    (state) => state.updateState.replyViewWrite
  );
  console.log({ replyViewWrite });
  const replyViewWriteCommentId = useSelector(
    (state) => state.updateState.replyViewWriteCommentId
  );
  const messageObj = {
    headers: "Reply Delete Alert",
    body: `Do you really want to delete this reply from the  database?
    Note that this action will delete any likes, dislikes, replies  associated with this comment, this action 
    is irreversible: a deleted comment cannot be recovered`,
  };

  const {
    handleDeleteComment,
    handleDeleteCommentReply,
    continueHandler,
    cancelHandler,
    showAlert,
    alertContent,
    // deleteHandlerOutput,
    // setalertContent
  } = useDeleteResourse(messageObj);

  // const handleDeleteCommentReply = (replyId) => {
  //   const blogId = blog.id;
  //   const replyObj = commentObj.reply.find((item) => item.id === replyId);
  //   const replyText = replyObj.comment;
  //   const newCommentArray = blog.comments.map((item) => {
  //     if (item.commentId === commentObj.commentId) {
  //       return {
  //         ...item,
  //         reply: [...item.reply.filter((reply) => reply.commentId !== replyId)],
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   const blogObj = {
  //     ...blog,
  //     comments: newCommentArray,
  //   };

  //   //const blogObject = blogs.find((blog) => blog.id === id);
  //   const confirmResult = window.confirm(
  //     `Do you really want to delete this comment: ${replyText} from database/server?`
  //   );
  //   if (!confirmResult) {
  //     return;
  //   }

  //   dispatch(sendDeleteCommentReply(blogId, blogObj));
  // };

  // const handleLikeCommentReply = (replyId) => {
  //   const blogId = blog.id;

  //   const newCommentArray = blog.comments.map((item) => {
  //     if (item.commentId === commentObj.commentId) {
  //       return {
  //         ...item,
  //         reply: [
  //           ...item.reply.map((reply) =>
  //             reply.commentId === replyId
  //               ? { ...reply, likes: reply.likes + 1 }
  //               : reply
  //           ),
  //         ],
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   console.log({ newCommentArray });
  //   const blogObj = {
  //     ...blog,
  //     comments: newCommentArray,
  //   };

  //   dispatch(sendLikeCommentReply(blogId, blogObj));
  // };

  // const handleDisLikeCommentReply = (replyId) => {
  //   // const newCommentObj = {
  //   //   ...comment,
  //   //   dislikes: comment.dislikes + 1,
  //   // };
  //   const blogId = blog.id;
  //   const newCommentArray = blog.comments.map((item) => {
  //     if (item.commentId === commentObj.commentId) {
  //       return {
  //         ...item,
  //         reply: [
  //           ...item.reply.map((reply) =>
  //             reply.commentId === replyId
  //               ? { ...reply, dislikes: reply.dislikes + 1 }
  //               : reply
  //           ),
  //         ],
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   console.log({ newCommentArray });
  //   const blogObj = {
  //     ...blog,
  //     comments: newCommentArray,
  //   };

  //   dispatch(sendDisLikeCommentReply(blogId, blogObj));
  // };

  const handleLikeOrDislikeComment = (blog, comment, replyId, likesDislike) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    const replyObj = comment.reply.find((item) => item.commentId === replyId);
    console.log("like called");
    let newObj;
    if (replyObj[likesDislike].likeValue) {
      const hasAlreadyLiked = replyObj[likesDislike].likers.some(
        (person) => person === user.username
      );
      if (hasAlreadyLiked) {
        newObj = {
          ...replyObj,
          [likesDislike]: {
            likers: [
              ...replyObj[likesDislike].likers.filter(
                (person) => person !== user.username
              ),
            ],
            likeValue: replyObj[likesDislike].likeValue - 1,
          },
        };
        console.log("already liked");
      } else {
        newObj = {
          ...replyObj,
          [likesDislike]: {
            likeValue: replyObj[likesDislike].likeValue + 1,
            likers: [...replyObj[likesDislike].likers, user.username],
          },
        };
        console.log("not already liked---liking");
      }
    } else {
      newObj = {
        ...replyObj,
        [likesDislike]: {
          likeValue: 1,
          likers: [user.username],
        },
      };
      console.log("like initiated");
    }

    const newArray = blog.comments.map((item) => {
      if (item.commentId === commentId) {
        return {
          ...item,
          reply: item.reply.map((replyItem) =>
            replyItem.commentId === replyId ? newObj : replyItem
          ),
        };
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
      dispatch(sendLikeCommentReply(blogId, blogObj));
    } else {
      dispatch(sendDisLikeCommentReply(blogId, blogObj));
    }
  };

  //import CommentReply from "./CommentReply";
  console.log(commentObj, "testingggg-blog");
  if (
    commentObj.reply &&
    replyViewWrite &&
    replyViewWriteCommentId === commentObj.commentId
  ) {
    return (
      <>
        <AlertComponent
          showAlert={showAlert}
          continueHandler={() => continueHandler(sendDeleteCommentReply)}
          cancelHandler={cancelHandler}
          alertContent={alertContent}
        />
        {commentObj.reply.map((comment, i) => (
          <Media key={`${i}-comment`} style={{ marginBottom: 20 }}>
            {" "}
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
              <div style={{ width: "40%" }}>
                <DisplayFormatedBlog
                  contentFromServer={comment.comment}
                  toolbarPresent={false}
                  smallHeight={true}
                />
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
                  handleLikeOrDislikeComment(
                    blog,
                    commentObj,
                    comment.commentId,
                    "likes"
                  )
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
                  handleLikeOrDislikeComment(
                    blog,
                    commentObj,
                    comment.commentId,
                    "dislikes"
                  )
                }
                size="sm"
              >
                <Badge pill variant="success">
                  {/* {comment.dislikes.likeValue} */}
                  {comment.dislikes.likeValue}
                </Badge>{" "}
                Dislike
              </Link>

              {user.username === comment.commenter ? (
                <Link
                  style={{ marginRight: 10 }}
                  onClick={() =>
                    handleDeleteCommentReply(
                      blog,
                      commentObj,
                      comment.commentId
                    )
                  }
                  size="sm"
                >
                  Delete
                </Link>
              ) : null}

              {user.username === comment.commenter ? (
                <>
                  <Link
                    onClick={() =>
                      dispatch(sendCommentReplyUpdate(comment.commentId))
                    }
                    to="#"
                    style={{ marginRight: 10, textDecoration: "none" }}
                  >
                    update
                  </Link>

                  <UpdateReplyForm
                    blog={blog}
                    noteFormRef={noteFormRef}
                    commentObj={commentObj}
                    replyId={comment.commentId}
                  />
                </>
              ) : null}
            </Media.Body>
          </Media>
        ))}
        <hr />
        <Togglable buttonLabel="write reply" ref={noteFormRef}>
          <CommentReply
            commentObj={commentObj}
            blog={blog}
            noteFormRef={noteFormRef}
          />
        </Togglable>
      </>
    );
  }
  return null;
};

// const ReplyFormAccordion = ({
//   blog,
//   user,
//   commentObj,
//   getTimeDiff,

//   noteFormRef,
// }) => {
//   const replyViewWrite = useSelector(
//     (state) => state.updateState.replyViewWrite
//   );
//   console.log({ replyViewWrite });
//   if (replyViewWrite) {
//     return (
//       <Accordion defaultActiveKey="0">
//         <Card>
//           <Card.Header style={{ backgroundColor: "white" }}>
//             <Accordion.Toggle
//               as={Button}
//               variant="link"
//               eventKey="0"
//             ></Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>
//               <DisplayReply
//                 commentObj={commentObj}
//                 user={user}
//                 getTimeDiff={getTimeDiff}
//                 noteFormRef={noteFormRef}
//                 blog={blog}
//               />
//               <Media>
//                 <Media.Body>
//                   <Togglable buttonLabel="write reply" ref={noteFormRef}>
//                     <CommentReply
//                       commentObj={commentObj}
//                       blog={blog}
//                       noteFormRef={noteFormRef}
//                     />
//                   </Togglable>
//                 </Media.Body>
//               </Media>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     );
//   }
//   return null;
// };

export default DisplayReply;
