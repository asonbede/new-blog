import React, { useState, useEffect } from "react";
import { handleUpdateComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";
import { sendCommentUpdate } from "../reducers/commentUpdate";
import { useRouteMatch, Link } from "react-router-dom";
import Togglable from "./Togglable";
const UpdateForm = ({ blog, noteFormRef, commentObj, commentIdValue }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  console.log({ blog });

  const commentUpdateState = useSelector(
    (state) => state.updateState.commentUpdateState
  );

  useEffect(() => {
    if (commentObj) {
      setComment(commentObj.comment);
    }
  }, [commentObj]);
  const handleSubmit = (event) => {
    console.log("sending comment");
    console.log(event.target.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = { ...commentObj, comment: comment };
    console.log({ newItemObject });
    const newCommentArray = [...blog.comments].map((item) => {
      if (item.commentId === commentObj.commentId) {
        return newItemObject;
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });

    dispatch(
      handleUpdateComment(blog.id, { ...blog, comments: newCommentArray })
    );
    noteFormRef.current.togglevisibility();

    dispatch(sendCommentUpdate(null));
  };
  const handleTextAreaChange = (event) => {
    setComment(event.target.value);
  };

  if (commentUpdateState && commentUpdateState === commentIdValue) {
    return (
      <div id="updateForm">
        <Togglable buttonLabel="click here to begin update" ref={noteFormRef}>
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
      </div>
    );
  }
  return null;
};
export default UpdateForm;
//profileimageid
