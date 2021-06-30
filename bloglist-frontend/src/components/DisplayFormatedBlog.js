import React, { useState, useEffect } from "react";

// import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  useField,
  useResource,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const DisplayFormatedBlog = ({ contentFromServer, smallHeight }) => {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  const useEditorMainBlog = useEditor();
  useEditorMainBlog.useServerContent(contentFromServer);
  // useEffect(() => {
  //   if (contentFromServer) {
  //     //setUrl(blog.url);

  //     const content = convertFromRaw(JSON.parse(contentFromServer));
  //     if (content) {
  //       setEditorState(() =>
  //         EditorState.push(editorState, content, "remove-range")
  //       );
  //     }
  //   }
  // }, [contentFromServer]);

  return (
    <>
      <MyRichEditor
        readOnly={true}
        toolbarOnFocus={true}
        useEditorMainBlog={useEditorMainBlog}
        smallHeight={smallHeight}
      />
      {/* <Editor
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
          // height: "100%",
          backgroundColor: "lightgray",
          padding: "1rem",
          minHeight: "100%",
          // border: 1px solid #ccc
        }}
        toolbarStyle={{ display: "none" }}
        wrapperStyle={{ padding: "0rem", border: "none" }}
        // toolbarClassName="toolbar-class"
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
        readOnly={true}
      /> */}
    </>
  );
};
export default DisplayFormatedBlog;
