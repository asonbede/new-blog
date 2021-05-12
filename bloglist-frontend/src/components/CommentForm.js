import React from "react";
import { handleComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CommentForm = ({ blog }) => {
  const dispatch = useDispatch();
  console.log({ dispatch });
  const user = useSelector((state) => state.logInUser);

  const handleSubmit = (event) => {
    console.log("sending comment");
    console.log(event.target.comment.value);

    event.preventDefault();
    //const initialTime = new Date();
    const comment = [
      ...blog.comments,
      {
        comment: event.target.comment.value,
        commenter: user.username,
        profileimageid: user.profileimageid,
        postedTime: new Date().getTime(),
        commentId: uuidv4(),
        likes: 0,
        dislikes: 0,
        reply: [],
      },
    ];
    dispatch(handleComment(blog.id, { ...blog, comments: comment }, "create"));

    //[...blog.comments,event.target.comment.value]
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCommentId">
          <Form.Label> Leave a Comment</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="comment"
            style={{ width: "50%" }}
          />
        </Form.Group>
        <Button type="submit" style={{ margin: 5 }}>
          Add Comment
        </Button>
      </Form>
    </div>
  );
};
export default CommentForm;
//profileimageid
