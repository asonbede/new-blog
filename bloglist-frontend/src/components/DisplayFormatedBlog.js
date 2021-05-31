import React, { useState, useEffect } from "react";
// import { handleUpdateMainBlog } from "../reducers/blogReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { Form, Button } from "react-bootstrap";
// import BlogTitle from "./BlogTitle";
// import BlogBody from "./BlogBody";
// import { useRouteMatch } from "react-router-dom";
// import Togglable from "./Togglable";
// import { sendMainBlogUpdate } from "../reducers/commentUpdate";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import { stateToHTML } from "draft-js-export-html";
//import { handleComment } from "../reducers/blogReducer";
const DisplayFormatedBlog = ({ blog }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (blog) {
      //setUrl(blog.url);

      const content = convertFromRaw(JSON.parse(blog.url));
      if (content) {
        setEditorState(() =>
          EditorState.push(editorState, content, "remove-range")
        );
      }
    }
  }, [blog]);

  return (
    <>
      <Editor
        toolbarOnFocus
        //initialEditorState
        // defaultEditorState={editorState}
        editorState={editorState}
        // onChange={setEditorState}
        //onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        // editorClassName="editor-class"
        editorStyle={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightgray",
          padding: "1rem",
          // border: 1px solid #ccc
        }}
        toolbarStyle={{ display: "none" }}
        // toolbarClassName="toolbar-class"
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
        readOnly={true}
      />
    </>
  );
};
export default DisplayFormatedBlog;
//profileimageid
