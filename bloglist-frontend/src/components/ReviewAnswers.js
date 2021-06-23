import React, { useState, useEffect } from "react";
import CorrectAnswer from "./CorrectAnswers";
import InCorrectAnswer from "./IncorrectAnswers";
import AllAnswers from "./AllAnswers";

import {
  Media,
  Image,
  Card,
  Button,
  Badge,
  Nav,
  ListGroupItem,
  ListGroup,
  InputGroup,
  FormGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useRouteMatch, Link } from "react-router-dom";

const ReviewAnswer = () => {
  const [selectValue, setselectValue] = useState("all");

  const radioNameValue = JSON.parse(
    window.localStorage.getItem("radioNameValue")
  );
  let match = useRouteMatch("/aswerrview/:id");
  const paraValue = match.params.id;
  const blogs = useSelector((state) => state.blogs);

  if (!blogs.length) {
    blogs = JSON.parse(localStorage.getItem("allBlogs"));
  }
  // const
  // allBlogs = JSON.parse(
  //   window.localStorage.getItem("allBlogs")
  // );

  // let match = useRouteMatch("/blogs/:id");
  // const paraValue = match.params.id;
  //const blogs = useSelector((state) => state.blogs);
  const blog = blogs
    ? blogs.find((blog) => blog.id.toString() === match.params.id)
    : null;
  console.log({ blog });
  //   const blogQuestionArray = window.localStorage.getItem("blogQuestionArray");

  // const correctAnswer = JSON.parse(window.localStorage.getItem("correctObj"));
  // const inCorrectAnswer = JSON.parse(
  //   window.localStorage.getItem("incorrectObj")
  // );
  //const skippedAnswer = JSON.parse(window.localStorage.getItem("skippObj"));
  const correctQuestionArrayLen = radioNameValue.correctNumber;
  const inCorrectQuestionArrayLen = radioNameValue.incorrectNumber;
  const skippedQuestionArrayLen = radioNameValue.skippedNumber;
  const allQuestionArrayLen = radioNameValue.blogQuestionArray.length;

  const handleChange = (e) => {
    setselectValue(e.target.value);
  };

  if (selectValue === "all") {
    return (
      <div style={{ width: "70%", marginTop: "5%" }}>
        <InputGroup style={{ marginBottom: "3%" }}>
          <Form.Text id="passwordHelpBlock" muted>
            Select correct to see all the questions you answered correctly or
            incorrect to see all questions answered incorrectly. All the
            questions are selected by default.
          </Form.Text>
          <Form.Control
            as="select"
            onChange={handleChange}
            aria-describedby="passwordHelpBlock"
          >
            <option value="all">All</option>
            <option value="correct">Correct</option>
            <option value="incorrect">incorrect</option>
          </Form.Control>
          <InputGroup.Append>
            <InputGroup.Text>
              {" "}
              <Badge pill variant="success">
                {allQuestionArrayLen}
              </Badge>{" "}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <AllAnswers radioNameValue={radioNameValue} blog={blog} />
      </div>
    );
  } else if (selectValue === "correct") {
    return (
      <div style={{ width: "70%", marginTop: "5%" }}>
        <InputGroup style={{ marginBottom: "3%" }}>
          <Form.Text id="passwordHelpBlock" muted>
            Select correct to see all the questions you answered correctly or
            incorrect to see all questions answered incorrectly. All the
            questions are selected by default.
          </Form.Text>
          <Form.Control
            as="select"
            onChange={handleChange}
            aria-describedby="passwordHelpBlock"
          >
            <option value="all">All</option>
            <option value="correct">Correct</option>
            <option value="incorrect">incorrect</option>
          </Form.Control>
          <InputGroup.Append>
            <InputGroup.Text>
              {" "}
              <Badge pill variant="success">
                {correctQuestionArrayLen}
              </Badge>{" "}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <CorrectAnswer radioNameValue={radioNameValue} blog={blog} />
      </div>
    );
  } else if (selectValue === "incorrect") {
    return (
      <div style={{ width: "70%", marginTop: "5%", marginBottom: "3%" }}>
        <InputGroup style={{ marginBottom: "3%" }}>
          <Form.Text id="passwordHelpBlock" muted>
            Select correct to see all the questions you answered correctly or
            incorrect to see all questions answered incorrectly. All the
            questions are selected by default.
          </Form.Text>
          <Form.Control
            as="select"
            onChange={handleChange}
            aria-describedby="passwordHelpBlock"
          >
            <option value="all">All</option>
            <option value="correct">Correct</option>
            <option value="incorrect">incorrect</option>
          </Form.Control>
          <InputGroup.Append>
            <InputGroup.Text>
              {" "}
              <Badge pill variant="success">
                {inCorrectQuestionArrayLen}
              </Badge>{" "}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InCorrectAnswer radioNameValue={radioNameValue} blog={blog} />
      </div>
    );
  }
};

export default ReviewAnswer;
