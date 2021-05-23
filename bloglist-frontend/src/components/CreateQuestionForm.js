import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCreateQuestion } from "../reducers/blogReducer";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const CreateQuestionsForm = ({ noteFormRef, blog }) => {
  const [question, setquestion] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [optionE, setoptionE] = useState("");
  const [correctOption, setcorrectOption] = useState("");
  const [explanation, setexplanation] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.logInUser);

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
        commentId: uuidv4(),
        examiner: user.username,
      },
    ];
    dispatch(
      sendCreateQuestion(blog.id, { ...blog, questions: questionArray })
    );
    noteFormRef.current.togglevisibility();

    // setTitle("");
    // setAuthor("");
    // setUrl("");
    //noteFormRef.current.togglevisibility();
  };

  const handleQuestionChange = (event) => {
    setquestion(event.target.value);
  };

  const handleOptionAChange = (event) => {
    setoptionA(event.target.value);
  };

  const handleOptionBChange = (event) => {
    setoptionB(event.target.value);
  };

  const handleOptionCChange = (event) => {
    setoptionC(event.target.value);
  };

  const handleOptionDChange = (event) => {
    setoptionD(event.target.value);
  };

  const handleOptionEChange = (event) => {
    setoptionE(event.target.value);
  };

  const handleCorrectOptionChange = (event) => {
    setcorrectOption(event.target.value);
  };

  const handleExplanationChange = (event) => {
    setexplanation(event.target.value);
  };

  return (
    <Form onSubmit={handleCreateQuestion}>
      <Form.Group controlId="formUrlId">
        <Form.Label> Questions</Form.Label>

        <Form.Control
          type="text"
          as="textarea"
          rows={5}
          value={question}
          onChange={handleQuestionChange}
        />
      </Form.Group>

      <Form.Group controlId="formOptionAId">
        <Form.Label>Option A</Form.Label>
        <Form.Control
          type="text"
          value={optionA}
          as="textarea"
          rows={2}
          onChange={handleOptionAChange}
        />
      </Form.Group>

      <Form.Group controlId="formOptionBId">
        <Form.Label>Option B</Form.Label>
        <Form.Control
          type="text"
          value={optionB}
          as="textarea"
          rows={2}
          onChange={handleOptionBChange}
        />
      </Form.Group>

      <Form.Group controlId="formOptionCId">
        <Form.Label>Option C</Form.Label>
        <Form.Control
          type="text"
          value={optionC}
          as="textarea"
          rows={2}
          onChange={handleOptionCChange}
        />
      </Form.Group>

      <Form.Group controlId="formOptionDId">
        <Form.Label>Option D</Form.Label>
        <Form.Control
          type="text"
          value={optionD}
          as="textarea"
          rows={2}
          onChange={handleOptionDChange}
        />
      </Form.Group>

      <Form.Group controlId="formOptionEId">
        <Form.Label>Option E</Form.Label>
        <Form.Control
          type="text"
          value={optionE}
          as="textarea"
          rows={2}
          onChange={handleOptionEChange}
        />
      </Form.Group>

      <Form.Group controlId="formCorrectOptionId">
        <Form.Label>Correct Option </Form.Label>
        <Form.Control
          type="text"
          value={correctOption}
          onChange={handleCorrectOptionChange}
        />
      </Form.Group>

      <Form.Group controlId="formExplanationEId">
        <Form.Label>Explanation</Form.Label>
        <Form.Control
          type="text"
          value={explanation}
          as="textarea"
          rows={7}
          onChange={handleExplanationChange}
        />
      </Form.Group>

      <Button type="submit" style={{ margin: 5 }} block>
        create question
      </Button>
    </Form>
  );
};
export default CreateQuestionsForm;
