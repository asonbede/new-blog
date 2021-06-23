import React, { useState, useEffect } from "react";

import {
  Media,
  Image,
  Card,
  Button,
  Badge,
  Nav,
  ListGroupItem,
  ListGroup,
  Jumbotron,
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
const AllAnswers = ({ radioNameValue, blog }) => {
  const dispatch = useDispatch();
  //const { blogQuestionArray, nameValueObj } = useSelector((state) => {
  //     return state.radioNameValue;
  //   });
  // const radioNameValue = JSON.parse(
  //   window.localStorage.getItem("radioNameValue")
  // );
  //   const blogQuestionArray = window.localStorage.getItem("blogQuestionArray");
  console.log({ radioNameValue });
  const blogQuestionArray = radioNameValue.blogQuestionArray;
  const nameValueObj = radioNameValue.nameValueObj;
  const optionLetters = ["A", "B", "C", "D", "E"];
  const blogIdItems = {
    "60c8ccabc7580d2db825db5b": { quizeObj: { 1: "" } },
  };

  //let match = useRouteMatch("/questions/:id");
  // const paraValue = match.params.id;
  //console.log({ paraValue });

  const matchingCorrectAnswer = (optionsArray, optionAlpabet) => {
    const objectAlpha = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    return optionsArray[objectAlpha[optionAlpabet.toLowerCase()]];
  };

  if (blogQuestionArray !== null && nameValueObj !== null) {
    return (
      <div>
        {blogQuestionArray.map((question, indexQue) => (
          <Card style={{ width: "100%" }} className="mb-3">
            <Card.Body key={`${question}-${indexQue}`}>
              <Card.Title>
                <span>{`Question${indexQue + 1}:`}</span> {question.question}
                <span
                  style={{
                    color:
                      question.markStatus === "correct"
                        ? "green"
                        : question.markStatus === "incorrect"
                        ? "red"
                        : "blue",
                  }}
                >
                  {question.markStatus}
                </span>
              </Card.Title>

              <ListGroup className="list-group-flush">
                {Object.values(question.options).map((option, index) => {
                  if (
                    nameValueObj.hasOwnProperty(`optioname${indexQue}`) &&
                    matchingCorrectAnswer(
                      Object.values(question.options),
                      question.correctOption
                    ) === nameValueObj[`optioname${indexQue}`] &&
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
                    nameValueObj.hasOwnProperty(`optioname${indexQue}`) &&
                    matchingCorrectAnswer(
                      Object.values(question.options),
                      question.correctOption
                    ) !== nameValueObj[`optioname${indexQue}`] &&
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
                    nameValueObj.hasOwnProperty(`optioname${indexQue}`) &&
                    nameValueObj[`optioname${indexQue}`] !== option
                  ) {
                    if (
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
                                colo: "blue",
                                fontSize: "30px",
                                display: "inline",
                              },
                            }}
                          >
                            <BsCheck />
                          </IconContext.Provider>
                        </ListGroupItem>
                      );
                    } else {
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
                  } else if (
                    !nameValueObj.hasOwnProperty(`optioname${indexQue}`) &&
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
                        <span>Skipped</span>
                        <BsCheck />
                      </ListGroupItem>
                    );
                  } else if (
                    !nameValueObj.hasOwnProperty(`optioname${indexQue}`) &&
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
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  return null;
};

export default AllAnswers;
