import React from "react";
import { createComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({ blog }) => {
  const dispatch = useDispatch();
  console.log({ dispatch });
  const user = useSelector((state) => state.logInUser);
  const handleSubmit = (event) => {
    console.log("sending comment");
    console.log(event.target.comment.value);

    event.preventDefault();
    const comment = [
      ...blog.comments,
      {
        comment: event.target.comment.value,
        commenter: user.username,
        profileimageid: user.profileimageid,
      },
    ];
    dispatch(createComment(blog.id, { ...blog, comments: comment }));

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
