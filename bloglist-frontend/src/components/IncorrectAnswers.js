import React, { useState, useEffect } from "react";

import {
  Media,
  Image,
  Card,
  Button,
  Badge,
  Nav,
  ListGroupItem,
  Jumbotron,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck, BsX } from "react-icons/bs";
import { IconContext } from "react-icons";
//import { transformQuestionArray } from "../questions";
//import { useRouteMatch } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";
import {
  sendRadioButtonNameValue,
  sendBlogQuestionArray,
} from "../reducers/radioButtonNameValueReducer";
import ExplanationOfQuize from "./ExplanationOfQuize";
//window.location.reload()
const InCorrectAnswer = ({ radioNameValue, blog }) => {
  const dispatch = useDispatch();
  //const { blogQuestionArray, nameValueObj } = useSelector((state) => {
  //     return state.radioNameValue;
  //   });
  //   const radioNameValue = JSON.parse(
  //     window.localStorage.getItem("radioNameValue")
  //   );
  //   const blogQuestionArray = window.localStorage.getItem("blogQuestionArray");
  // console.log({ radioNameValue });

  // const blogQuestionArray = inCorrectAnswer.blogQuestionArray;
  // const nameValueObj = inCorrectAnswer.nameValueObj;
  const optionLetters = ["A", "B", "C", "D", "E"];

  const blogIdItems = {
    "60c8ccabc7580d2db825db5b": { quizeObj: { 1: "" } },
  };
  // console.log({ blogQuestionArray }, "from incorrec");
  // console.log({ nameValueObj }, "from incorrec");
  const blogQuestionArray = radioNameValue.blogQuestionArray;
  const nameValueObj = radioNameValue.nameValueObj;

  //let match = useRouteMatch("/questions/:id");
  // const paraValue = match.params.id;
  //console.log({ paraValue });jjjjj

  const matchingCorrectAnswer = (optionsArray, optionAlpabet) => {
    const objectAlpha = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    return optionsArray[objectAlpha[optionAlpabet.toLowerCase()]];
  };

  if (blogQuestionArray !== null && nameValueObj !== null) {
    return (
      <div>
        {blogQuestionArray.map((question, indexQue) => (
          // {  if (question.markStatus!=="incorrect") {
          //    continue///
          //  }}
          <Card style={{ width: "100%" }} className="mb-3">
            <Card.Body key={`${question}-${indexQue}`}>
              <Card.Title>
                {question.markStatus === "incorrect" ? (
                  <>
                    <span>{`Question${indexQue + 1}:`}</span>{" "}
                    {question.question}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {question.markStatus}
                    </span>
                  </>
                ) : null}
              </Card.Title>

              <ListGroup className="list-group-flush">
                {Object.values(question.options).map((option, index) => {
                  if (
                    question.markStatus === "incorrect" &&
                    nameValueObj[`optioname${indexQue}`] === option
                  ) {
                    return (
                      <ListGroupItem key={`question${index}:${indexQue}`}>
                        {" "}
                        <Form.Check
                          type="radio"
                          value={option}
                          name={`optioname${indexQue}`}
                          id={`question${index}:${indexQue}`}
                          label={`${optionLetters[index]}. ${option}`}
                          checked
                        />
                        <IconContext.Provider
                          value={{
                            style: {
                              color: "red",
                              fontSize: "30px",
                              display: "inline",
                            },
                          }}
                        >
                          <BsX />
                        </IconContext.Provider>
                      </ListGroupItem>
                    );
                  } else if (
                    question.markStatus === "incorrect" &&
                    matchingCorrectAnswer(
                      Object.values(question.options),
                      question.correctOption
                    ) === option
                  ) {
                    return (
                      <ListGroupItem key={`question${index}:${indexQue}`}>
                        {" "}
                        <Form.Check
                          type="radio"
                          value={option}
                          name={`optioname${indexQue}`}
                          id={`question${index}:${indexQue}`}
                          label={`${optionLetters[index]}. ${option}`}
                        />
                        <IconContext.Provider
                          value={{
                            style: {
                              color: "blue",
                              fontSize: "30px",
                              display: "inline",
                            },
                          }}
                        >
                          <BsCheck />
                        </IconContext.Provider>
                      </ListGroupItem>
                    );
                  } else if (
                    question.markStatus === "incorrect" &&
                    matchingCorrectAnswer(
                      Object.values(question.options),
                      question.correctOption
                    ) !== option
                  ) {
                    return (
                      <ListGroupItem key={`question${index}:${indexQue}`}>
                        {" "}
                        <Form.Check
                          type="radio"
                          value={option}
                          name={`optioname${indexQue}`}
                          id={`question${index}:${indexQue}`}
                          label={`${optionLetters[index]}. ${option}`}
                        />
                      </ListGroupItem>
                    );
                  }
                })}
              </ListGroup>
              {question.markStatus === "incorrect" ? (
                <>
                  {/* <Jumbotron>
                    <h1>Explanation</h1>
                    <p>{question.explanation}</p>
                  </Jumbotron> */}
                  <ExplanationOfQuize
                    blogIdItems={blogIdItems}
                    question={question}
                    blog={blog}
                    quizeNum={indexQue + 1}
                  />
                </>
              ) : null}
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  return null;
};

export default InCorrectAnswer;
