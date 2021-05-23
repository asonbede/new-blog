import React, { useState, useEffect } from "react";
import { sendUpdateRepyComment } from "../reducers/blogReducer";
import { sendCommentReplyUpdate } from "../reducers/commentUpdate";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";
import Togglable from "./Togglable";
const UpdateReplyForm = ({ blog, noteFormRef, commentObj, replyId }) => {
  const [comment, setComment] = useState("");
  //const [indexValue, setindexValue] = useState("");
  const [commentItem, setcommentItem] = useState({});

  //const [blogValue, setblogvalue] = useState({});
  const dispatch = useDispatch();

  const commentReplyUpdateState = useSelector(
    (state) => state.updateState.commentReplyUpdateState
  );

  //console.log({ dispatch });
  // const user = useSelector((state) => state.logInUser);
  // const { formUpdateTrigar, commentValue } = useSelector(
  //   (state) => state.updateHandle
  // );
  //let indexOfItemToBeRemoved;
  useEffect(() => {
    if (commentObj && commentObj.reply) {
      const replyItem = commentObj.reply.find(
        (item) => item.commentId === replyId
      );
      setComment(replyItem.comment);
      //setblogvalue(blogValue);

      //const commentArray = blog.comments;
      const itemObject = {
        comment: replyItem.comment,
        commenter: replyItem.commenter,
        profileimageid: replyItem.profileimageid,
        postedTime: replyItem.postedTime,
        commentId: replyItem.commentId,
      };

      // indexOfItemToBeRemoved = commentArray.indexOf(itemObject);
      //setindexValue(indexOfItemToBeRemoved);
      setcommentItem(itemObject);
    }
  }, [commentObj]);
  const handleSubmit = (event) => {
    console.log("sending comment");
    console.log(event.target.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = { ...commentItem, comment: comment };
    console.log({ newItemObject });

    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [
            ...item.reply.map((reply) =>
              reply.commentId === replyId ? newItemObject : reply
            ),
          ],
        };
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      comments: newCommentArray,
    };

    dispatch(sendUpdateRepyComment(blog.id, blogObj));
    noteFormRef.current.togglevisibility();
    dispatch(sendCommentReplyUpdate(null));
  };
  const handleTextAreaChange = (event) => {
    setComment(event.target.value);
  };
  if (commentReplyUpdateState && commentReplyUpdateState === replyId) {
    return (
      <Togglable buttonLabel="update Reply" ref={noteFormRef}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCommentId">
            <Form.Label>Update Comment</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="comment"
              value={comment}
              onChange={handleTextAreaChange}
              style={{ width: "50%" }}
            />
          </Form.Group>
          <Button type="submit" style={{ margin: 5 }}>
            Update
          </Button>
        </Form>
      </Togglable>
    );
  }
  return null;
};
export default UpdateReplyForm;
//profileimageid
