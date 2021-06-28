import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { Form, Button } from "react-bootstrap";

import {
  useField,
  useResource,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const CreateBlog = (props) => {
  const [image, setimage] = useState("");

  const useFieldTopic = useField("text");
  const useFieldAuthor = useField("text");
  const useFieldImage = useField("text");
  const useEditorMainBlog = useEditor();
  const useEditorMainBlogTitle = useEditor();

  const { url, editorState, onEditorStateChange } = useEditorMainBlog;
  const { url: title } = useEditorMainBlogTitle;
  const { value: topic } = useFieldTopic;
  const { value: author } = useFieldAuthor;
  const { value: imageBlog } = useFieldImage;
  const dispatch = useDispatch();

  const handleCreateBlog = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("topic", topic);
    formData.append("title", title);
    formData.append("url", url);
    formData.append("author", author);
    formData.append("created", new Date().getTime());
    formData.append("updated", new Date().getTime());

    props.noteFormRef.current.togglevisibility();

    dispatch(createBlog(formData));
    // setTitle("");
    // setAuthor("");
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  return (
    <Form onSubmit={handleCreateBlog}>
      <Form.Group controlId="formBlogTopicId">
        <Form.Label>Topic</Form.Label>
        <Form.Control {...useFieldTopic} as="textarea" rows={2} />
      </Form.Group>

      <Form.Group controlId="formTitleId">
        <Form.Label className="App-header">Learning Objectives</Form.Label>

        <MyRichEditor
          useEditorMainBlog={useEditorMainBlogTitle}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
        />
      </Form.Group>

      <Form.Group controlId="formAuthorId">
        <Form.Label> author</Form.Label>

        <Form.Control {...useFieldAuthor} />
      </Form.Group>

      <Form.Group controlId="formUrlId">
        <Form.Label className="App-header"> Contents</Form.Label>

        <MyRichEditor
          useEditorMainBlog={useEditorMainBlog}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
        />
      </Form.Group>

      <Form.Group controlId="formBlogImageId">
        <Form.Label>Blog image</Form.Label>
        <Form.Control {...useFieldImage} as="textarea" rows={2} />
      </Form.Group>

      <Form.Group controlId="formProfileIigeId">
        <Form.File
          onChange={fileSelected}
          accept="image/*"
          label="Profile Image"
        />
      </Form.Group>
      <Button
        onClick={() =>
          handleImageInsert(editorState, imageBlog, onEditorStateChange)
        }
        style={{ margin: 5 }}
      >
        Insert Image
      </Button>
      <Button type="submit" style={{ margin: 5 }} block>
        create
      </Button>
    </Form>
  );
};
export default CreateBlog;
