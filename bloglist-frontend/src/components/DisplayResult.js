import React, { useState, useEffect } from "react";

import { Jumbotron, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

//import { transformQuestionArray } from "../questions";
//import { useRouteMatch } from "react-router-dom";
//import { useRouteMatch, Link } from "react-router-dom";
import {
  sendResulReviewtHandler,
  sendResultHandler,
} from "../reducers/resultReducer";
//window.location.reload()
//import useShowResult from "../hooks/resourse";

const DisplayResult = ({ radioNameValue }) => {
  const [skippedArr, setskippedArr] = useState([]);
  const [isOpen, setIsOpen] = React.useState(true);
  const dispatch = useDispatch();
  const { showResult, reviewResult } = useSelector(
    (state) => state.resultState
  );
  let flag = false;
  let resultValue;
  let skippedArrayMap = [];
  let skippedArrayString;

  useEffect(() => {
    if (flag) {
      dispatch(sendResulReviewtHandler());
      setskippedArr(skippedArrayMap);
      setIsOpen(true);
    }
  }, [showResult]);
  const user = useSelector((state) => state.logInUser);

  //const sendResultReview = useShowResult();
  //const { blogQuestionArray, nameValueObj } = useSelector((state) => {
  //     return state.radioNameValue;
  //   });
  //   const radioNameValue = JSON.parse(
  //     window.localStorage.getItem("radioNameValue")
  //   );
  //   const blogQuestionArray = window.localStorage.getItem("blogQuestionArray");
  console.log({ radioNameValue }, "from displayResult");
  //   const blogQuestionArray = radioNameValue.blogQuestionArray;
  //   const nameValueObj = radioNameValue.nameValueObj;
  const optionLetters = ["A", "B", "C", "D", "E"];
  const { blogQuestionArray, nameValueObj } = radioNameValue;
  //let match = useRouteMatch("/questions/:id");
  // const paraValue = match.params.id;
  //console.log({ paraValue });

  const matchingCorrectAnswer = (optionssArray, optionAlpabet) => {
    const objectAlpha = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    return optionssArray[objectAlpha[optionAlpabet.trim().toLowerCase()]];
  };

  const markScript = (questionOptionArray, radioButtonNameValueObject) => {
    const newQuestionArray = [];
    let skippedArray = [];
    let correctArray = [];
    let incorrectArray = [];

    let objectItem;
    let score = 0;
    questionOptionArray.map((question, indexQue) => {
      let questionString = question.question;
      let optionsArray = Object.values(question.options);
      console.log({ question }, "from displayyyyyy");
      if (
        radioButtonNameValueObject.hasOwnProperty(`optioname${indexQue}`) &&
        matchingCorrectAnswer(optionsArray, question.correctOption) ===
          radioButtonNameValueObject[`optioname${indexQue}`]
      ) {
        score = score + 1;
        objectItem = { ...question, markStatus: "correct" };
        newQuestionArray.push(objectItem);
        correctArray.push(objectItem);
      } else if (
        radioButtonNameValueObject.hasOwnProperty(`optioname${indexQue}`) &&
        matchingCorrectAnswer(optionsArray, question.correctOption) !==
          radioButtonNameValueObject[`optioname${indexQue}`]
      ) {
        objectItem = { ...question, markStatus: "incorrect" };
        newQuestionArray.push(objectItem);
        incorrectArray.push(objectItem);
      } else {
        objectItem = { ...question, markStatus: "Skipped" };
        const skippedObj = { objectItem, indexQue };
        newQuestionArray.push(objectItem);
        skippedArray.push(skippedObj);
      }
    });
    const scoreValue = `${score} out of  ${questionOptionArray.length}`;
    console.log({ newQuestionArray });
    console.log({ scoreValue });
    const radioObj = {
      blogQuestionArray: newQuestionArray,
      nameValueObj: radioButtonNameValueObject,
      correctNumber: correctArray.length,
      incorrectNumber: incorrectArray.length,
      skippedNumber: skippedArray.length,
    };

    window.localStorage.setItem("radioNameValue", JSON.stringify(radioObj));
    flag = true;
    //sendResultReview();
    return { newQuestionArray, scoreValue, skippedArray };
  };
  // if (showResult) {
  //   dispatch(sendResulReviewtHandler());
  // }
  if (showResult) {
    resultValue = markScript(blogQuestionArray, nameValueObj);
    skippedArrayMap = resultValue.skippedArray.map((item) => item.indexQue + 1);

    skippedArrayString = skippedArrayMap.join(",");
  }
  const continueHandler = () => {
    console.log("okay44444");
    setskippedArr([]);
    setIsOpen(false);
  };
  const cancelHandler = () => {
    console.log("okay");
    dispatch(sendResultHandler());
    dispatch(sendResulReviewtHandler());
    setIsOpen(false);
  };

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  const hideModal = () => {
    setIsOpen(false);
  };

  if (showResult) {
    if (skippedArr.length === 0) {
      return (
        <Jumbotron>
          <h1>Hello {user.username}</h1>
          <p>Your score is {resultValue.scoreValue}</p>
          <p>Click on the review button to see details</p>
        </Jumbotron>
      );
    } else {
      return (
        <>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title as="h3">Skipped Questios Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              `You have skipped questions {skippedArrayString} if you click
              continue your script will be submitted but you will lose the marks
              attached to the skipped questions`
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={cancelHandler}>Cancel Submission</Button>
              <Button onClick={continueHandler}>Continue</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  return null;
};

export default DisplayResult;
