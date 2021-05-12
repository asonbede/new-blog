import React from "react";
import CommentReply from "./CommentReply";
import { handleComment } from "../reducers/blogReducer";
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

import UpdateReplyForm from "./UpdateReplyForm";

const DisplayReply = ({ user, commentObj, getTimeDiff, noteFormRef, blog }) => {
  const dispatch = useDispatch();

  const handleDeleteCommentReply = (replyId) => {
    const blogId = blog.id;

    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [...item.reply.filter((reply) => reply.commentId !== replyId)],
        };
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      comments: newCommentArray,
    };

    //const blogObject = blogs.find((blog) => blog.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete this comment from database/server`
    );
    if (!confirmResult) {
      return;
    }

    dispatch(handleComment(blogId, blogObj, "delete-comment-reply"));
  };

  const handleLikeCommentReply = (replyId) => {
    const blogId = blog.id;

    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [
            ...item.reply.map((reply) =>
              reply.commentId === replyId
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            ),
          ],
        };
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });
    const blogObj = {
      ...blog,
      comments: newCommentArray,
    };

    dispatch(handleComment(blogId, blogObj, "like-reply"));
  };

  const handleDisLikeCommentReply = (replyId) => {
    // const newCommentObj = {
    //   ...comment,
    //   dislikes: comment.dislikes + 1,
    // };
    const blogId = blog.id;
    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [
            ...item.reply.map((reply) =>
              reply.commentId === replyId
                ? { ...reply, dislikes: reply.dislikes + 1 }
                : reply
            ),
          ],
        };
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });
    const blogObj = {
      ...blog,
      comments: newCommentArray,
    };

    dispatch(handleComment(blogId, blogObj, "dis-like-reply"));
  };

  //import CommentReply from "./CommentReply";
  console.log(commentObj, "testingggg-blog");
  if (commentObj.reply) {
    return (
      <>
        {commentObj.reply.map((comment, i) => (
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
                onClick={() => handleLikeCommentReply(comment.commentId)}
                size="sm"
              >
                <Badge pill variant="success">
                  {comment.likes}
                </Badge>{" "}
                Like
              </Button>

              <Button
                style={{ marginRight: 10 }}
                onClick={() => handleDisLikeCommentReply(comment.commentId)}
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
                  onClick={() => handleDeleteCommentReply(comment.commentId)}
                  size="sm"
                >
                  Delete
                </Button>
              ) : null}

              {user.username === comment.commenter ? (
                <Togglable buttonLabel="update Reply" ref={noteFormRef}>
                  <UpdateReplyForm
                    blog={blog}
                    noteFormRef={noteFormRef}
                    commentObj={commentObj}
                    replyId={comment.commentId}
                  />
                </Togglable>
              ) : null}
            </Media.Body>
          </Media>
        ))}
      </>
    );
  }
  return null;
};

const ReplyFormAccordion = ({
  blog,
  user,
  commentObj,
  getTimeDiff,

  noteFormRef,
}) => {
  return (
    <Accordion>
      <Card>
        <Card.Header style={{ backgroundColor: "white" }}>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <span>
              {" "}
              {commentObj.reply && commentObj.reply.length > 1
                ? `${commentObj.reply.length} Replies`
                : commentObj.reply && commentObj.reply.length === 1
                ? "1 Reply"
                : " NO Reply"}{" "}
            </span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <DisplayReply
              commentObj={commentObj}
              user={user}
              getTimeDiff={getTimeDiff}
              noteFormRef={noteFormRef}
              blog={blog}
            />
            <Media>
              <Media.Body>
                <Togglable buttonLabel="write reply" ref={noteFormRef}>
                  <CommentReply
                    commentObj={commentObj}
                    blog={blog}
                    noteFormRef={noteFormRef}
                  />
                </Togglable>
              </Media.Body>
            </Media>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ReplyFormAccordion;
