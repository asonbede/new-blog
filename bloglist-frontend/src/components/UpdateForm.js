import React, { useState, useEffect } from "react";
import { handleComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";

const UpdateForm = ({ blog, noteFormRef, commentObj }) => {
  const [comment, setComment] = useState("");
  //const [indexValue, setindexValue] = useState("");
  const [commentItem, setcommentItem] = useState({});

  //const [blogValue, setblogvalue] = useState({});
  const dispatch = useDispatch();
  console.log({ dispatch });
  // const user = useSelector((state) => state.logInUser);
  // const { formUpdateTrigar, commentValue } = useSelector(
  //   (state) => state.updateHandle
  // );
  //let indexOfItemToBeRemoved;
  useEffect(() => {
    if (commentObj) {
      setComment(commentObj.comment);
      //setblogvalue(blogValue);

      //const commentArray = blog.comments;
      const itemObject = {
        comment: commentObj.comment,
        commenter: commentObj.commenter,
        profileimageid: commentObj.profileimageid,
        postedTime: commentObj.postedTime,
        commentId: commentObj.commentId,
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
    const newCommentArray = [...blog.comments].map((item) => {
      if (item.commentId === commentObj.commentId) {
        return newItemObject;
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });

    // let removed = newCommentArray.splice(
    //   indexOfItemToBeRemoved,
    //   1,
    //   newItemObject
    // );
    noteFormRef.current.togglevisibility();

    dispatch(
      handleComment(blog.id, { ...blog, comments: newCommentArray }, "update")
    );
    //dispatch(updateMessage({ formUpdateTrigar: null, commentValue: null }));

    //[...blog.comments,event.target.comment.value]
    //indexOfItemToBeRemoved = undefined;
  };
  const handleTextAreaChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div id="updateForm">
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
    </div>
  );
};
export default UpdateForm;
//profileimageid
