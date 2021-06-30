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
import { useRouteMatch, Link } from "react-router-dom";
import {
  sendRadioButtonNameValue,
  sendBlogQuestionArray,
} from "../reducers/radioButtonNameValueReducer";
import DisplayFormatedBlog from "./DisplayFormatedBlog";
//window.location.reload()
import ExplanationOfQuize from "./ExplanationOfQuize";
const CorrectAnswer = ({ radioNameValue, blog }) => {
  const dispatch = useDispatch();

  const optionLetters = ["A", "B", "C", "D", "E"];

  const blogIdItems = {
    "60c8ccabc7580d2db825db5b": { quizeObj: { 1: "" } },
  };

  const blogQuestionArray = radioNameValue.blogQuestionArray;
  const nameValueObj = radioNameValue.nameValueObj;

  const matchingCorrectAnswer = (optionsArray, optionAlpabet) => {
    const objectAlpha = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    return optionsArray[objectAlpha[optionAlpabet.trim().toLowerCase()]];
  };

  if (blogQuestionArray !== null && nameValueObj !== null) {
    return (
      <div>
        {blogQuestionArray.map((question, indexQue) => (
          // {  if (question.markStatus!=="incorrect") {
          //    continue
          //  }}
          <Card style={{ width: "100%" }} className="mb-3">
            <Card.Body key={`${question}-${indexQue}`}>
              <Card.Title>
                {question.markStatus === "correct" ? (
                  <>
                    <span>{`Question${indexQue + 1}:`}</span>{" "}
                    <DisplayFormatedBlog
                      contentFromServer={question.question}
                      toolbarPresent={false}
                      smallHeight={false}
                    />
                    {/* {question.question} */}
                    <span
                      style={{
                        color: "green",
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
                    question.markStatus === "correct" &&
                    nameValueObj[`optioname${indexQue}`] === option
                  ) {
                    return (
                      <ListGroupItem key={`question${index}:${indexQue}`}>
                        {" "}
                        {/* <Form.Check
                          type="radio"
                          value={option}
                          name={`optioname${indexQue}`}
                          id={`question${index}:${indexQue}`}
                          label={`${optionLetters[index]}. ${option}`}
                          checked
                        /> */}
                        <Form.Check>
                          <Form.Check.Input
                            checked
                            type="radio"
                            value={option}
                            name={`optioname${indexQue}`}
                            id={`question${index}:${indexQue}`}
                          />
                          <Form.Check.Label>
                            <span> {`${optionLetters[index]}`}</span>
                            {/* {
                         
                        } */}
                          </Form.Check.Label>
                        </Form.Check>
                        <DisplayFormatedBlog
                          contentFromServer={option}
                          toolbarPresent={false}
                          smallHeight={true}
                        />
                        <IconContext.Provider
                          value={{
                            style: {
                              color: "green",
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
                    question.markStatus === "correct" &&
                    matchingCorrectAnswer(
                      Object.values(question.options),
                      question.correctOption
                    ) !== option
                  ) {
                    return (
                      <ListGroupItem key={`question${index}:${indexQue}`}>
                        {" "}
                        {/* <Form.Check
                          type="radio"
                          value={option}
                          name={`optioname${indexQue}`}
                          id={`question${index}:${indexQue}`}
                          label={`${optionLetters[index]}. ${option}`}
                        /> */}
                        <Form.Check>
                          <Form.Check.Input
                            type="radio"
                            value={option}
                            name={`optioname${indexQue}`}
                            id={`question${index}:${indexQue}`}
                          />
                          <Form.Check.Label>
                            <span> {`${optionLetters[index]}`}</span>
                            {/* {
                         
                        } */}
                          </Form.Check.Label>
                        </Form.Check>
                        <DisplayFormatedBlog
                          contentFromServer={option}
                          toolbarPresent={false}
                          smallHeight={true}
                        />
                      </ListGroupItem>
                    );
                  }
                })}
              </ListGroup>
              {question.markStatus === "correct" ? (
                <>
                  {/* <Jumbotron>
                    <h1>Explanation</h1>
                    <p>{question.explanation}</p>
                  </Jumbotron> */}
                  {/* <ExplanationOfQuize
                    blogIdItems={blogIdItems}
                    question={question}
                    blog={blog}
                    quizeNum={indexQue + 1}
                  /> */}
                  <h1>Explanation</h1>
                  <DisplayFormatedBlog
                    contentFromServer={question.explanation}
                    toolbarPresent={false}
                    smallHeight={true}
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

export default CorrectAnswer;
