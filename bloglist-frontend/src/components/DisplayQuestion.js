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
  Form,
  ProgressBar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Togglable from "./Togglable";
import QuestionUpdateForm from "./QuestionUpdateForm";

import CreateQuestions from "./CreateQuestionForm";
import AlertComponent from "./AlertComponent";
import { transformQuestionArray } from "../questions";
//import { useRouteMatch } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";
import {
  sendRadioButtonNameValue,
  sendBlogQuestionArray,
} from "../reducers/radioButtonNameValueReducer";
import { sendResultHandler } from "../reducers/resultReducer";
import { sendQuestionUpdate } from "../reducers/commentUpdate";
import { sendQuestionDelete } from "../reducers/blogReducer";
import { sendResulReviewtHandler } from "../reducers/resultReducer";

import DisplayResult from "./DisplayResult";
//window.location.reload()
const DisplayQuestion = ({ noteFormRef }) => {
  const [submitButtonState, setsubmitButtonState] = useState(true);
  const [showAlert, setshowAlert] = useState(false);
  const [alertContent, setalertContent] = useState({});
  const [deleteHandlerOutput, setdeleteHandlerOutput] = useState({});
  // const [continueValue, setContinue] = useState(false);
  // const [cancel, setCancel] = useState(false);
  let user = useSelector((state) => state.logInUser);
  if (!user) {
    user = JSON.parse(localStorage.getItem("loggedNoteappUser"));
  }
  const dispatch = useDispatch();
  const radioNameValue = useSelector((state) => {
    return state.radioNameValue;
  });
  const { showResult, reviewResult } = useSelector(
    (state) => state.resultState
  );
  //blogQuestionArray: null, nameValueObj
  let now;
  const optionLetters = ["A", "B", "C", "D", "E"];
  //let deleteHandlerOutput = {};
  let blogQuestionObjArray = [];
  let match = useRouteMatch("/questions/:id");
  const paraValue = match.params.id;
  console.log({ paraValue });

  let blogs = useSelector((state) => state.blogs);
  if (!blogs.length) {
    blogs = JSON.parse(localStorage.getItem("allBlogs"));
  }

  console.log({ blogs });
  const blog = blogs
    ? blogs.find((blog) => blog.id.toString() === match.params.id)
    : null;
  console.log({ blog });
  // useEffect(
  //   (blog) => {
  //     setContinue(false);
  //     setCancel(false);
  //   },
  //   [blog]
  // );
  if (blog && blog.questions.length) {
    blogQuestionObjArray = transformQuestionArray(blog.questions);
    //dispatch(sendBlogQuestionArray(blogQuestionObjArray));
  }
  if (radioNameValue.blogQuestionArray && radioNameValue.nameValueObj) {
    now =
      (Object.keys(radioNameValue.nameValueObj).length /
        radioNameValue.blogQuestionArray.length) *
      100;
  }
  console.log({ now });

  const handleRadioButtonChange = (event) => {
    const { name, value } = event.target;

    console.log({ name, value });
    if (radioNameValue.nameValueObj && submitButtonState) {
      setsubmitButtonState(false);
    }

    dispatch(sendRadioButtonNameValue({ name, value }));
    dispatch(sendBlogQuestionArray(blogQuestionObjArray));
  };

  const resultHandler = () => {
    dispatch(sendResultHandler());
    //dispatch(sendResulReviewtHandler());
  };

  const setVariant = (nowValue) => {
    if (nowValue < 27) {
      return "danger";
    } else if (nowValue > 27 && nowValue < 51) {
      return "warning";
    } else if (nowValue > 52 && nowValue < 77) {
      return "primary";
    } else {
      return "success";
    }
  };

  console.log(setVariant(now), "variantValue");

  const handleDeleteQuestion = (blog, questionObj) => {
    const blogId = blog.id;
    const questionId = questionObj.commentId;
    const blogObj = {
      ...blog,
      questions: blog.questions.filter((item) => item.commentId !== questionId),
    };

    //const blogObject = blogs.find((blog) => blog.id === id);
    // const confirmResult = window.confirm(
    //   `Do you really want to delete this comment ${questionObj.question} from database/server`
    // );
    // if (!confirmResult) {
    //   return;
    // }
    setalertContent({
      headers: "Question Delete Alert",
      body: `Do you really want to delete this question ${questionObj.question} from database`,
    });
    setshowAlert(true);

    //deleteHandlerOutput = { blogId, blogObj };
    setdeleteHandlerOutput({ blogId, blogObj });
    //dispatch(sendQuestionDelete(blogId, blogObj));
  };

  const continueHandler = () => {
    const { blogId, blogObj } = deleteHandlerOutput;
    console.log({ blogId });
    console.log({ deleteHandlerOutput });
    dispatch(sendQuestionDelete(blogId, blogObj));
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };
  const cancelHandler = () => {
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };

  console.log({ blog });
  if (blog.questions.length) {
    console.log(blog.questions, "questionnnnnqrray");
    return (
      <div>
        <AlertComponent
          showAlert={showAlert}
          continueHandler={continueHandler}
          cancelHandler={cancelHandler}
          alertContent={alertContent}
        />
        <Card
          style={{
            width: "70%",
            position: "fixed",
            zIndex: 1,
            top: "8%",
          }}
          // className="mt-3"
        >
          <DisplayResult radioNameValue={radioNameValue} />
          <Card.Header>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="#first"
                  onClick={resultHandler}
                  disabled={submitButtonState}
                >
                  {showResult ? "Hide Result" : "Submit And Show Result"}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/aswerrview"
                  target="_blank"
                  disabled={reviewResult}
                >
                  Review Performance
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={`/blogs/${paraValue}`}>Back</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <ProgressBar
              now={now === undefined ? 0 : now}
              label={`${now === undefined ? 0 : now}% Complete`}
              striped
              variant={setVariant(now)}
              animated
              // srOnly
            />{" "}
          </Card.Body>
        </Card>

        {blogQuestionObjArray.map((question, indexQue) => (
          <Card
            style={{ width: "70%" }}
            className={`${
              indexQue === 0 ? "first-card-margin" : "other-card-margin"
            }`}
          >
            <Card.Body key={`${question}-${indexQue}`}>
              <Card.Title>
                <span>{`Question${indexQue + 1}:`}</span>{" "}
                {Object.keys(question)[0]}
              </Card.Title>

              <ListGroup className="list-group-flush">
                {question[Object.keys(question)[0]].map((option, index) => (
                  <ListGroupItem key={`question${index}:${indexQue}`}>
                    {" "}
                    <Form.Check
                      type="radio"
                      value={option}
                      name={`optioname${indexQue}`}
                      id={`question${index}:${indexQue}`}
                      label={`${optionLetters[index]}. ${option}`}
                      onClick={handleRadioButtonChange}
                    />
                  </ListGroupItem>
                ))}
              </ListGroup>
              {/* {user.username === question.examiner ? ( */}
              <Link
                onClick={() =>
                  dispatch(
                    sendQuestionUpdate(blog.questions[indexQue].commentId)
                  )
                }
                to="#"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                Update Question
              </Link>
              {/* ) : null} */}
              <QuestionUpdateForm
                blog={blog}
                questionObj={blog.questions[indexQue]}
                noteFormRef={noteFormRef}
                questionIdValue={blog.questions[indexQue].commentId}
              />

              {/* {user.username === question.examiner ? ( */}
              <Link
                onClick={() =>
                  handleDeleteQuestion(blog, blog.questions[indexQue])
                }
                to="#"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                Delete This Question
              </Link>
              {/* ) : null} */}
            </Card.Body>
          </Card>
        ))}

        <hr />
        <Togglable buttonLabel="Set Question" ref={noteFormRef}>
          <CreateQuestions blog={blog} noteFormRef={noteFormRef} />
        </Togglable>
      </div>
    );
  }
  return (
    <div>
      <p>No Questions Yet, Set One</p>
      <hr />
      <Togglable buttonLabel="Set Question" ref={noteFormRef}>
        <CreateQuestions blog={blog} noteFormRef={noteFormRef} />
      </Togglable>
    </div>
  );
};
export default DisplayQuestion;
