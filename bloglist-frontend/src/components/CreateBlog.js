import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
//import "..../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from "draft-js-export-html";
const CreateBlog = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //const [url, setUrl] = useState("");
  const [image, setimage] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const dispatch = useDispatch();
  // console.log(
  //   convertToRaw(editorState.getCurrentContent()),
  //   "raw editor state"
  // );
  // console.log(
  //   typeof JSON.stringify(convertToRaw(editorState.getCurrentContent())),
  //   "typeofffff-raw"
  // );
  const handleCreateBlog = (event) => {
    //noteFormRef.current.togglevisibility();
    //console.log({ noteFormRef });
    event.preventDefault();
    const url = JSON.stringify(convertToRaw(editorState.getCurrentContent())); //JSON.stringify()
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("url", url);
    formData.append("author", author);
    formData.append("created", new Date().getTime());
    formData.append("updated", new Date().getTime());

    // const newBlogObject = {
    //   title: title,
    //   url: url,
    //   author: author,
    // };

    props.noteFormRef.current.togglevisibility();

    dispatch(createBlog(formData));
    setTitle("");
    setAuthor("");
    //setUrl("");
    //noteFormRef.current.togglevisibility();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  // const handleUrlChange = (event) => {
  //   setUrl(event.target.value);
  // };
  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    //convertContentToHTML();
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  return (
    <Form onSubmit={handleCreateBlog}>
      <Form.Group controlId="formTitleId">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} />
      </Form.Group>

      <Form.Group controlId="formAuthorId">
        <Form.Label> author</Form.Label>

        <Form.Control
          type="text"
          value={author}
          onChange={handleAuthorChange}
        />
      </Form.Group>
      {/* <Editor
            // toolbarOnFocus
            //defaultEditorState=
            initialEditorState={editorState}
            wrapperClassName="wrapper-class"
            wrapperStyle={wrapperStyle}
            editorStyle={editorStyle}
            // toolbarStyle={toolbarStyle}
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              // image: {
              //   uploadCallback: uploadImageCallBack,
              //   alt: { present: true, mandatory: false },
              // },
            }}
          /> */}
      <Form.Group controlId="formUrlId">
        <Form.Label className="App-header"> Contents</Form.Label>
        {/* <div className="App-main"> */}
        {/* <header className="App-header">Content</header> */}
        <Editor
          //initialEditorState
          //defaultEditorState={editorState}
          editorState={editorState}
          // onChange={setEditorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            // image: {
            //   uploadCallback: uploadImageCallBack,
            //   alt: { present: true, mandatory: false },
            // },
          }}
        />
        {/* </div> */}
      </Form.Group>
      {/* <Form.Group controlId="formUrlId">
        <Form.Label> Contents</Form.Label>

        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          value={url}
          onChange={handleUrlChange}
        />
      </Form.Group> */}
      <Form.Group controlId="formProfileIigeId">
        <Form.File
          onChange={fileSelected}
          accept="image/*"
          label="Profile Image"
        />
      </Form.Group>

      <Button type="submit" style={{ margin: 5 }} block>
        create
      </Button>
    </Form>
  );
};
export default CreateBlog;
