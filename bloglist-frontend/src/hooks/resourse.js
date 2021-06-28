import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  AtomicBlockUtils,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
    setValue,
  };
};

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // let url;
  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };
  const url = JSON.stringify(convertToRaw(editorState.getCurrentContent())); //JSON.stringify()

  const useServerContent = (contentFromServer) => {
    useEffect(() => {
      if (contentFromServer) {
        //setUrl(blog.url);

        const content = convertFromRaw(JSON.parse(contentFromServer));
        if (content) {
          setEditorState(() =>
            EditorState.push(editorState, content, "remove-range")
          );
        }
      }
    }, [contentFromServer]);
  };

  return {
    // wrapperClassName: "wrapper-class",
    // editorClassName: "editor-class",
    // toolbarClassName: "toolbar-class",

    url,
    editorState,
    useServerContent,
    onEditorStateChange: handleEditorChange,
    // toolbar: {
    //   inline: { inDropdown: true },
    //   list: { inDropdown: true },
    //   textAlign: { inDropdown: true },
    //   link: { inDropdown: true },
    //   history: { inDropdown: true },
    // },
  };
};

//handle blog image
export const handleImageInsert = (
  editorState,
  imageBlog,
  onEditorStateChange
) => {
  const newEditorState = insertImage(editorState, imageBlog);
  onEditorStateChange(newEditorState);
};

const insertImage = (editorState, imageBlog) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    "IMAGE",
    "IMMUTABLE",
    { src: imageBlog }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, {
    currentContent: contentStateWithEntity,
  });
  return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
};

export const MyRichEditor = ({
  useEditorMainBlog,
  readOnly,
  toolbarOnFocus,
  toolbarPresent,
}) => {
  const toolbarStyleObj = { display: "block" };
  const toolbarStyleObjIntro = { display: "none" };
  return (
    <Editor
      {...useEditorMainBlog}
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
      readOnly={readOnly}
      toolbarOnFocus={toolbarOnFocus}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName={toolbarPresent ? "toolbar-class" : "remove-toolbar"}
      // toolbarStyle={toolbarPresent ? toolbarStyleObj : toolbarStyleObjIntro}
    />
  );
};
