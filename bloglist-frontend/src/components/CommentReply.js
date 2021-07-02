import React, { useState } from "react";
import { sendReplyCreateComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {
  useField,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const CommentReply = ({ blog, commentObj, noteFormRef }) => {
  const [comment, setComment] = useState("");
  //const [indexValue, setindexValue] = useState("");
  // const [commentItem, setcommentItem] = useState({});

  const dispatch = useDispatch();
  console.log({ dispatch });
  const user = useSelector((state) => state.logInUser);

  // const handleTextAreaChange = (event) => {
  //   setComment(event.target.value);
  // };

  const useEditorReplyComment = useEditor();
  //const useEditorMainBlogTitle = useEditor();

  const {
    url: commentReplyValue,
    editorState,
    onEditorStateChange,
  } = useEditorReplyComment;

  const handleSubmit = (event) => {
    console.log("sending comment");
    // console.log(event.target.comment.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = {
      comment: commentReplyValue,
      commenter: user.username,
      profileimageid: user.profileimageid,
      postedTime: new Date().getTime(),
      updatedTime: new Date().getTime(),
      commentId: uuidv4(),
      likes: {
        likeValue: 0,
        likers: [],
      },
      dislikes: {
        likeValue: 0,
        likers: [],
      },
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
    const blogObj = {
      ...blog,
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),
      comments: JSON.stringify(newCommentArray),
    };

    dispatch(sendReplyCreateComment(blog.id, blogObj));
    noteFormRef.current.togglevisibility();

    //[...blog.comments,event.target.comment.value]
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCommentId">
          {/* <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="comment"
            // style={{ width: "50%" }}
            onChange={handleTextAreaChange}
          /> */}
          <Form.Label className="App-header"> Type Your Reply</Form.Label>

          <MyRichEditor
            useEditorMainBlog={useEditorReplyComment}
            readOnly={false}
            toolbarOnFocus={false}
            toolbarPresent={true}
            smallHeight={false}
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
