import React from "react";
import { handleCreateMainComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {
  useField,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const CommentForm = ({ blog, noteFormRef }) => {
  const dispatch = useDispatch();
  console.log({ dispatch });
  const user = useSelector((state) => state.logInUser);

  // const useFieldTopic = useField("text");
  // const useFieldAuthor = useField("text");
  // const useFieldImage = useField("text");
  const useEditorMainBlogComment = useEditor();
  //const useEditorMainBlogTitle = useEditor();

  const {
    url: commentValue,
    editorState,
    onEditorStateChange,
  } = useEditorMainBlogComment;
  // const { url: title } = useEditorMainBlogTitle;
  // const { value: topic } = useFieldTopic;
  // const { value: author } = useFieldAuthor;
  // const { value: imageBlog } = useFieldImage;

  const handleSubmit = (event) => {
    //   console.log("sending comment");
    //   console.log(event.target.comment.value);

    event.preventDefault();
    //get the comments initially present and add new one
    const comment = [
      ...blog.comments,
      {
        comment: commentValue,
        commenter: user.username,
        profileimageid: user.profileimageid,
        postedTime: new Date().getTime(),
        updatedTime: new Date().getTime(),
        commentId: uuidv4(),
        likes: { likeValue: 0, likers: [] },
        dislikes: { likeValue: 0, likers: [] },
        reply: [],
      },
    ];
    const blogObj = {
      ...blog,
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),
      comments: JSON.stringify(comment),
    };
    dispatch(handleCreateMainComment(blog.id, blogObj));
    noteFormRef.current.togglevisibility();
    //[...blog.comments,event.target.comment.value]
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCommentId">
          {/* <Form.Label> Leave a Comment</Form.Label> */}

          <Form.Label className="App-header"> Leave a Comment</Form.Label>

          <MyRichEditor
            useEditorMainBlog={useEditorMainBlogComment}
            readOnly={false}
            toolbarOnFocus={false}
            toolbarPresent={true}
            smallHeight={false}
          />
          {/* <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="comment"
            style={{ width: "50%" }}
          /> */}
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
