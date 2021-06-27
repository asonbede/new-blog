import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  AtomicBlockUtils,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from "draft-js-export-html";
import {
  useField,
  useResource,
  useEditor,
  handleImageInsert,
} from "../hooks/resourse";

const CreateBlog = (props) => {
  //const [title, setTitle] = useState("");
  //const [author, setAuthor] = useState("");
  //const [url, setUrl] = useState("");
  const [image, setimage] = useState("");
  //const [imageBlog, setimageBlog] = useState("");
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const useFieldTitle = useField("text");
  const useFieldAuthor = useField("text");
  const useFieldImage = useField("text");
  const useEditorMainBlog = useEditor();

  const { url, editorState, onEditorStateChange } = useEditorMainBlog;
  const { value: title } = useFieldTitle;
  const { value: author } = useFieldAuthor;
  const { value: imageBlog } = useFieldImage;
  const dispatch = useDispatch();

  const handleCreateBlog = (event) => {
    event.preventDefault();
    //const url = JSON.stringify(convertToRaw(editorState.getCurrentContent())); //JSON.stringify()
    const formData = new FormData();
    formData.append("image", image);
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

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };
  // const handleAuthorChange = (event) => {
  //   setAuthor(event.target.value);
  // };

  // const handleImageBlogChange = (event) => {
  //   setimageBlog(event.target.value);
  // };

  // const handleEditorChange = (editorState) => {
  //   setEditorState(editorState);
  // };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  //handle blog image
  // const handleImageInsert = () => {
  //   const newEditorState = insertImage(editorState, imageBlog);
  //   onEditorStateChange(newEditorState);
  // };

  // const insertImage = (editorState, imageBlog) => {
  //   const contentState = editorState.getCurrentContent();
  //   const contentStateWithEntity = contentState.createEntity(
  //     "IMAGE",
  //     "IMMUTABLE",
  //     { src: imageBlog }
  //   );
  //   const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  //   const newEditorState = EditorState.set(editorState, {
  //     currentContent: contentStateWithEntity,
  //   });
  //   return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
  // };

  return (
    <Form onSubmit={handleCreateBlog}>
      <Form.Group controlId="formTitleId">
        <Form.Label>Title</Form.Label>
        <Form.Control {...useFieldTitle} />
      </Form.Group>
      {/* type="text" value={title} onChange={handleTitleChange}  */}
      <Form.Group controlId="formAuthorId">
        <Form.Label> author</Form.Label>

        <Form.Control
          // type="text"
          // value={author}
          // onChange={handleAuthorChange}
          {...useFieldAuthor}
        />
      </Form.Group>

      <Form.Group controlId="formUrlId">
        <Form.Label className="App-header"> Contents</Form.Label>

        <Editor
          //initialEditorState
          //defaultEditorState={editorState}
          //editorState={editorState}
          // onChange={setEditorState}
          // onEditorStateChange={handleEditorChange}
          //wrapperClassName="wrapper-class"
          //editorClassName="editor-class"
          // toolbarClassName="toolbar-class"
          {...useEditorMainBlog}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBlogImageId">
        <Form.Label>Blog image</Form.Label>
        <Form.Control
          // type="text"
          // value={imageBlog}
          // onChange={handleImageBlogChange}
          {...useFieldImage}
          as="textarea"
          rows={2}
        />
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
