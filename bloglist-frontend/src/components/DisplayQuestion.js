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

import DataQuestion from "./data-presentation/DataQuestion";
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
//import useShowResult from "../hooks/resourse";
import DisplayResult from "./DisplayResult";
//window.location.reload()
const DisplayQuestion = ({ noteFormRef }) => {
  const [submitButtonState, setsubmitButtonState] = useState(true);
  const [showAlert, setshowAlert] = useState(false);
  const [alertContent, setalertContent] = useState({});
  const [deleteHandlerOutput, setdeleteHandlerOutput] = useState({});
  const [numValue1, setnumValue1] = useState(1);
  const [numValue2, setnumValue2] = useState(1);
  //const [blogQuestionObjArray, setblogQuestionObjArray] = useState(blog.questions);
  // const [continueValue, setContinue] = useState(false);
  // const [cancel, setCancel] = useState(false);

  const blogIdItems = {
    "60c8ccabc7580d2db825db5b": [() => <DataQuestion />],
  };
  let blogs;
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
  let match = useRouteMatch("/questions/:id");
  const paraValue = match.params.id;
  blogs = useSelector((state) => state.blogs);
  // useEffect(() => {
  //   if (blog && blog.questions.length) {
  //     //blogQuestionObjArray = blog.questions;
  //     setblogQuestionObjArray(blog.questions);
  //     //transformQuestionArray()
  //     //dispatch(sendBlogQuestionArray(blogQuestionObjArray));
  //   }
  // }, [paraValue, numValue]);
  //blogQuestionArray: null, nameValueObj
  let now;
  const optionLetters = ["A", "B", "C", "D", "E"];
  //let deleteHandlerOutput = {};
  //let blogQuestionObjArray = [];

  console.log({ paraValue });

  if (!blogs.length) {
    blogs = JSON.parse(localStorage.getItem("allBlogs"));
  }
  console.log({ blogs }, "from display questions");

  console.log({ blogs });
  const blog = blogs
    ? blogs.find((blog) => blog.id.toString() === match.params.id)
    : null;
  console.log({ blog });
  const [blogQuestionObjArray, setblogQuestionObjArray] = useState(
    blog.questions
  );

  // if (blog && blog.questions.length) {
  //   //blogQuestionObjArray = blog.questions;
  //   setblogQuestionObjArray(blog.questions);
  //   //transformQuestionArray()
  //   //dispatch(sendBlogQuestionArray(blogQuestionObjArray));
  // }

  if (radioNameValue.blogQuestionArray && radioNameValue.nameValueObj) {
    now =
      (Object.keys(radioNameValue.nameValueObj).length /
        radioNameValue.blogQuestionArray.length) *
      100;
    now = Math.round(now);
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

  function getTimeDiff(oDatePublished) {
    const oResult = {};
    let timeToShow = "";
    var oToday = new Date();

    var nDiff = oToday.getTime() - oDatePublished;

    // Get diff in days
    oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
    nDiff -= oResult.days * 1000 * 60 * 60 * 24;

    // Get diff in hours
    oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
    nDiff -= oResult.hours * 1000 * 60 * 60;

    // Get diff in minutes
    oResult.minutes = Math.floor(nDiff / 1000 / 60);
    nDiff -= oResult.minutes * 1000 * 60;

    // Get diff in seconds
    oResult.seconds = Math.floor(nDiff / 1000);

    // var timeValueArr = [];
    // for (let time in oResult) {
    //   timeValueArr.push(oResult[time]);
    // }
    // const max = Math.max(...timeValueArr);
    for (let time in oResult) {
      if (oResult[time] > 0) {
        timeToShow = oResult[time].toString() + " " + time + " " + "ago";
        return timeToShow;
      }
    }
  }

  const handleNumberInputChange = (event) => {
    setnumValue1(event.target.value);

    console.log({ numValue1 }, "numberrrrvaluee");
    //const value = event.target.value
    // this.setState({financialGoal: value});
    //setblogQuestionObjArray(blog.questions);
  };
  const handleNumberInputChange2 = (event) => {
    setnumValue2(event.target.value);
    console.log({ numValue2 }, "numberrrrvaluee");
  };
  const HandleNumberSubmit = (event) => {
    console.log(event);

    setblogQuestionObjArray(blog.questions.slice(numValue1 - 1, numValue2));
    //console.log({ numValue1 }, "numberrrrvaluee3333333");

    //const value = event.target.value
    // this.setState({financialGoal: value});
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
            width: "80%",
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
                  {showResult ? "Hide Result" : "Submit"}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href={`/aswerrview/${paraValue}`}
                  target="_blank"
                  disabled={reviewResult}
                >
                  Review
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ cursor: "none" }}>
                  {" "}
                  <Form inline style={{ width: "20%" }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label htmlFor="quantity1">
                        {" "}
                        {`Quantity:1 - ${blog.questions.length}`}: Between{" "}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="quantity1"
                        name="quantity1"
                        min="1"
                        max={blog.questions.length - 1}
                        onChange={handleNumberInputChange}
                        pattern="[1-9]*"
                        inputmode="numeric"
                        // value="1"
                        size="sm"
                      />{" "}
                      <Form.Label htmlFor="quantity2">to</Form.Label>
                      <Form.Control
                        type="number"
                        id="quantity2"
                        name="quantity2"
                        min="1"
                        max={blog.questions.length}
                        onChange={handleNumberInputChange2}
                        pattern="[1-9]*"
                        inputmode="numeric"
                        // value={blog.questions.length}
                        size="sm"
                      />
                      <Button onClick={HandleNumberSubmit} size="sm">
                        {" "}
                        Go
                      </Button>
                    </Form.Group>
                  </Form>
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

        {blog.id in blogIdItems ? blogIdItems[blog.id][0]() : null}

        {blogQuestionObjArray.map((question, indexQue) => (
          <Card
            style={{ width: "80%" }}
            className={`${
              indexQue === 0 ? "first-card-margin" : "other-card-margin"
            }`}
          >
            <Card.Body key={`${question}-${indexQue}`}>
              <Card.Title>
                <span>{`Question${indexQue + 1}:`}</span> {question.question}
              </Card.Title>

              <ListGroup className="list-group-flush">
                {Object.values(question.options).map((option, index) => (
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
                onClick={() => dispatch(sendQuestionUpdate(question.commentId))}
                to="#"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                Update Question
              </Link>
              {/* ) : null} */}
              <QuestionUpdateForm
                blog={blog}
                questionObj={question}
                noteFormRef={noteFormRef}
                questionIdValue={question.commentId}
              />

              {/* {user.username === question.examiner ? ( */}
              <Link
                onClick={() => handleDeleteQuestion(blog, question)}
                to="#"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                Delete This Question
              </Link>
              {/* ) : null} */}
              <Link
                to="#"
                style={{
                  marginRight: 10,
                  cursor: "none",
                  textDecoration: "none",
                }}
              >
                First Published:{" "}
                {question.postedTime
                  ? getTimeDiff(question.postedTime)
                  : "notime"}
              </Link>

              <Link
                to="#"
                style={{
                  marginRight: 10,
                  cursor: "none",
                  textDecoration: "none",
                }}
              >
                Last Updated:{" "}
                {question.updateTime
                  ? getTimeDiff(question.updateTime)
                  : "notime"}
              </Link>
            </Card.Body>
          </Card>
        ))}

        <hr />
        <Togglable buttonLabel="Set Question" ref={noteFormRef}>
          <CreateQuestions blog={blog} noteFormRef={noteFormRef} />
        </Togglable>
        <br />
        <br />
        <br />
        <br />
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
