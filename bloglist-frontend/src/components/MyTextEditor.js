import React, { Component } from "react";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      message: "Try the editor below!",
      rawMessage: "",
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleEditorStateToMessage =
      this.handleEditorStateToMessage.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
      rawMessage: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    console.log(typeof this.state.message, "messageeeeeeeeee");
  }

  handleEditorStateToMessage() {
    this.setState({
      message: this.state.rawMessage,
    });
  }

  render() {
    const { editorState } = this.state;
    const wrapperStyle = {
      border: "1px solid #969696",
    };
    const editorStyle = {
      height: "10rem",
      padding: "1rem",
    };

    // function uploadImageCallBack(file) {
    //   return new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("POST", "https://api.imgur.com/3/image");
    //     xhr.setRequestHeader("Authorization", "Client-ID ##clientid###");
    //     const data = new FormData();
    //     data.append("image", file);
    //     xhr.send(data);
    //     xhr.addEventListener("load", () => {
    //       const response = JSON.parse(xhr.responseText);
    //       console.log(response);
    //       resolve(response);
    //     });
    //     xhr.addEventListener("error", () => {
    //       const error = JSON.parse(xhr.responseText);
    //       console.log(error);
    //       reject(error);
    //     });
    //   });
    // }
    return (
      <React.Fragment>
        <div>
          <div></div>
          <div
            style={{
              border: "1px solid #969696",
              borderRadius: "3px",
              height: "10rem",
              padding: "1rem",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: this.state.message }}></div>
          </div>
          <div></div>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Editor
            // toolbarOnFocus
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
          />
        </div>
        <div style={{ marginTop: "2%" }}>
          <button variant="outlined" onClick={this.handleEditorStateToMessage}>
            submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// In order to store this data on the backend, we are going to need to change the EditorState information to be in JSON. This is where the convertToRaw function comes in. Use the function below to get the data back in JSON
// convertToRaw(this.state.editorState.getCurrentContent())
// From here you will just need to do a simple fetch POST request to your backend.
//npm install draft-js-export-html.
// import {stateToHTML} from 'draft-js-export-html';
// import { convertFromRaw } from 'draft-js';
// convertCommentFromJSONToHTML = (text) => {                     return stateToHTML(convertFromRaw(JSON.parse(text))) }
{
  /* <div id="comment-div">
<div dangerouslySetInnerHTML={{ __html: this.convertCommentFromJSONToHTML(this.props.comment.content)}}>  </div>
</div> */
}
