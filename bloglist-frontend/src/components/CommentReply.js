import React, { useState } from "react";
import { sendReplyCreateComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CommentReply = ({ blog, commentObj, noteFormRef }) => {
  const [comment, setComment] = useState("");
  //const [indexValue, setindexValue] = useState("");
  // const [commentItem, setcommentItem] = useState({});

  const dispatch = useDispatch();
  console.log({ dispatch });
  const user = useSelector((state) => state.logInUser);

  const handleTextAreaChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("sending comment");
    // console.log(event.target.comment.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = {
      comment: comment,
      commenter: user.username,
      profileimageid: user.profileimageid,
      postedTime: new Date().getTime(),
      commentId: uuidv4(),
      likes: 0,
      dislikes: 0,
    };
    console.log({ blog });
    // const newItemObject = { ...commentItem, comment: comment };
    console.log({ newItemObject });
    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return { ...item, reply: [...item.reply, newItemObject] };
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });

    dispatch(
      sendReplyCreateComment(blog.id, { ...blog, comments: newCommentArray })
    );
    noteFormRef.current.togglevisibility();

    //[...blog.comments,event.target.comment.value]
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCommentId">
          <Form.Label>Type Your Reply </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="comment"
            // style={{ width: "50%" }}
            onChange={handleTextAreaChange}
          />
        </Form.Group>
        <Button type="submit" style={{ margin: 5 }}>
          Post Reply
        </Button>
      </Form>
    </div>
  );
};
export default CommentReply;
//profileimageid
