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
  };
};

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };
  const url = JSON.stringify(convertToRaw(editorState.getCurrentContent())); //JSON.stringify()

  return {
    wrapperClassName: "wrapper-class",
    editorClassName: "editor-class",
    toolbarClassName: "toolbar-class",

    url,
    editorState,
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

//export {useField,useEditor}

//   const useResource = (baseUrl) => {
//     const [resources, setResources] = useState([])

//     console.log("insideusecountry")

//     useEffect(() => {
//       console.log("effect");

//         getAll(baseUrl)
//         .then((initialResoures) => {
//           console.log("promise fulfilled");
//           setResources(initialResoures);
//         })
//         .catch((errr) => {
//           console.log("server is down, please refresh the browser and try again");
//           //setCountry([]);
//         });
//     }, []);

//     const create = async (newObject) => {

//       const response = await axios.post(baseUrl, newObject);

//       setResources(resources.concat(response.data))
//     };

//     const service = {
//       create
//     }

//     return [
//       resources, service
//     ]
//   }

// const content = useField('text')
// const name = useField('text')
// const number = useField('text')

// const [notes, noteService] = useResource('http://localhost:3002/notes')
// const [persons, personService] = useResource('http://localhost:3002/persons')
