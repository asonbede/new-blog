import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCreateQuestion } from "../reducers/blogReducer";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import {
  useField,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const CreateQuestionsForm = ({ noteFormRef, blog }) => {
  // const [question, setquestion] = useState("");
  // const [optionA, setoptionA] = useState("");
  // const [optionB, setoptionB] = useState("");
  // const [optionC, setoptionC] = useState("");
  // const [optionD, setoptionD] = useState("");
  // const [optionE, setoptionE] = useState("");
  // const [correctOption, setcorrectOption] = useState("");
  // const [explanation, setexplanation] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.logInUser);

  //const useFieldTopic = useField("text");
  //const useFieldAuthor = useField("text");
  //const useFieldImage = useField("text");
  const useEditorQuestion = useEditor();
  const useEditorOptionA = useEditor();
  const useEditorOptionB = useEditor();
  const useEditorOptionC = useEditor();
  const useEditorOptionD = useEditor();
  const useEditorOptionE = useEditor();
  const useEditorCorrectOption = useField("text");
  const useEditorExplanation = useEditor();

  //const { url, editorState, onEditorStateChange } = useEditorMainBlog;
  const { url: question } = useEditorQuestion;
  const { url: optionA } = useEditorOptionA;
  const { url: optionB } = useEditorOptionB;
  const { url: optionC } = useEditorOptionC;
  const { url: optionD } = useEditorOptionD;
  const { url: optionE } = useEditorOptionE;

  const { value: correctOption } = useEditorCorrectOption;
  const { url: explanation } = useEditorExplanation;

  const handleCreateQuestion = (event) => {
    //noteFormRef.current.togglevisibility();
    //console.log({ noteFormRef });
    event.preventDefault();

    // const newBlogObject = {
    //   title: title,
    //   url: url,
    //   author: author,
    // };

    const questionArray = [
      ...blog.questions,
      {
        question,
        options: {
          optionA,
          optionB,
          optionC,
          optionD,
          optionE,
        },

        correctOption,
        explanation,

        postedTime: new Date().getTime(),
        updateTime: new Date().getTime(),
        commentId: uuidv4(),
        examiner: user.username,
      },
    ];
    dispatch(
      sendCreateQuestion(blog.id, {
        ...blog,
        likes: JSON.stringify(blog.likes),
        comments: JSON.stringify(blog.comments),
        questions: JSON.stringify(questionArray),
      })
    );
    noteFormRef.current.togglevisibility();

    // setTitle("");
    // setAuthor("");
    // setUrl("");
    //noteFormRef.current.togglevisibility();
    // setquestion("");
    // setoptionA("");
    // setoptionB("");
    // setoptionC("");
    // setoptionD("");
    // setoptionE("");
    // setcorrectOption("");
    // setexplanation("");
  };

  // const handleQuestionChange = (event) => {
  //   setquestion(event.target.value);
  // };

  // const handleOptionAChange = (event) => {
  //   setoptionA(event.target.value);
  // };

  // const handleOptionBChange = (event) => {
  //   setoptionB(event.target.value);
  // };

  // const handleOptionCChange = (event) => {
  //   setoptionC(event.target.value);
  // };

  // const handleOptionDChange = (event) => {
  //   setoptionD(event.target.value);
  // };

  // const handleOptionEChange = (event) => {
  //   setoptionE(event.target.value);
  // };

  // const handleCorrectOptionChange = (event) => {
  //   setcorrectOption(event.target.value);
  // };

  // const handleExplanationChange = (event) => {
  //   setexplanation(event.target.value);
  // };

  return (
    <Form onSubmit={handleCreateQuestion}>
      <Form.Group controlId="formUrlId">
        <Form.Label className="App-header"> Questions</Form.Label>

        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorQuestion}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={false}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formOptionAId">
        <Form.Label className="App-header">Option A</Form.Label>
        {/* < Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorOptionA}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={true}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formOptionBId">
        <Form.Label className="App-header">Option B</Form.Label>
        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorOptionB}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={true}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formOptionCId">
        <Form.Label className="App-header">Option C</Form.Label>
        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorOptionC}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={true}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formOptionDId">
        <Form.Label className="App-header">Option D</Form.Label>
        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorOptionD}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={true}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formOptionEId">
        <Form.Label className="App-header">Option E</Form.Label>
        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorOptionE}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={true}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Form.Group controlId="formCorrectOptionId">
        <Form.Label className="App-header">Correct Option </Form.Label>

        <Form.Control
          text={useEditorCorrectOption.text}
          value={useEditorCorrectOption.value}
          onChange={useEditorCorrectOption.onChange}
        />
        {/* <Form.Control
          type="text"
          value={correctOption}
          onChange={handleCorrectOptionChange}
        /> */}
      </Form.Group>

      <Form.Group controlId="formExplanationEId">
        <Form.Label className="App-header">Explanation</Form.Label>

        {/* <Form.Control> */}
        <MyRichEditor
          useEditorMainBlog={useEditorExplanation}
          readOnly={false}
          toolbarOnFocus={false}
          toolbarPresent={true}
          smallHeight={false}
        />
        {/* </Form.Control> */}
      </Form.Group>

      <Button type="submit" style={{ margin: 5 }} block>
        create question
      </Button>
    </Form>
  );
};
export default CreateQuestionsForm;
