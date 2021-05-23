import React, { useState, useEffect } from "react";
import { handleQuestionUpdateComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";
import { sendQuestionUpdate } from "../reducers/commentUpdate";

import { useRouteMatch, Link } from "react-router-dom";
import Togglable from "./Togglable";
const QuestionUpdateForm = ({
  blog,
  noteFormRef,
  questionObj,
  questionIdValue,
}) => {
  const [question, setquestion] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [optionE, setoptionE] = useState("");
  const [correctOption, setcorrectOption] = useState("");
  const [explanation, setexplanation] = useState("");
  //const [postedTime, setpostedTime] = useState("");

  const dispatch = useDispatch();

  console.log({ blog });

  const questionUpdateState = useSelector(
    (state) => state.updateState.questionUpdateState
  );

  useEffect(() => {
    if (questionObj) {
      setquestion(questionObj.question);
      setoptionA(questionObj.options.optionA);
      setoptionB(questionObj.options.optionB);
      setoptionC(questionObj.options.optionC);
      setoptionD(questionObj.options.optionD);
      setoptionE(questionObj.options.optionE);

      setcorrectOption(questionObj.correctOption);
      setexplanation(questionObj.explanation);
      //setpostedTime(questionObj.postedTime);

      //         question,
      //         options: {
      //           optionA,
      //           optionB,
      //           optionC,
      //           optionD,
      //           optionE,
      //         },

      //         correctOption,
      //         explanation,

      //         postedTime: new Date().getTime(),
      //         commentId: uuidv4(),
    }
  }, [questionObj]);
  const handleSubmit = (event) => {
    console.log("sending question Update");
    console.log(event.target.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = {
      ...questionObj,
      question,
      options: { optionA, optionB, optionC, optionD, optionE },
      correctOption,
      explanation,
    };
    console.log({ newItemObject });
    const newCommentArray = [...blog.questions].map((item) => {
      if (item.commentId === questionObj.commentId) {
        return newItemObject;
      } else {
        return item;
      }
    });
    console.log({ newCommentArray });

    dispatch(
      handleQuestionUpdateComment(blog.id, {
        ...blog,
        questions: newCommentArray,
      })
    );
    noteFormRef.current.togglevisibility();

    dispatch(sendQuestionUpdate(null));
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

  if (questionUpdateState && questionUpdateState === questionIdValue) {
    return (
      <div id="updateForm">
        <Togglable
          buttonLabel="click here to update this Question"
          ref={noteFormRef}
        >
          <Form onSubmit={handleSubmit}>
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

            <Button type="submit" style={{ margin: 5 }}>
              Update
            </Button>
          </Form>
        </Togglable>
      </div>
    );
  }
  return null;
};
export default QuestionUpdateForm;
//profileimageid
// import React, { useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { sendCreateQuestion } from "../reducers/blogReducer";
// import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
// const CreateQuestionsForm = ({ noteFormRef, blog }) => {
//   const [question, setquestion] = useState("");
//   const [optionA, setoptionA] = useState("");
//   const [optionB, setoptionB] = useState("");
//   const [optionC, setoptionC] = useState("");
//   const [optionD, setoptionD] = useState("");
//   const [optionE, setoptionE] = useState("");
//   const [correctOption, setcorrectOption] = useState("");
//   const [explanation, setexplanation] = useState("");

//   const dispatch = useDispatch();

//   const handleCreateQuestion = (event) => {
//     //noteFormRef.current.togglevisibility();
//     //console.log({ noteFormRef });
//     event.preventDefault();

//     // const newBlogObject = {
//     //   title: title,
//     //   url: url,
//     //   author: author,
//     // };

//     const questionArray = [
//       ...blog.questions,
//       {
//         question,
//         options: {
//           optionA,
//           optionB,
//           optionC,
//           optionD,
//           optionE,
//         },

//         correctOption,
//         explanation,

//         postedTime: new Date().getTime(),
//         commentId: uuidv4(),
//       },
//     ];
//     dispatch(
//       sendCreateQuestion(blog.id, { ...blog, questions: questionArray })
//     );
//     noteFormRef.current.togglevisibility();

//     // setTitle("");
//     // setAuthor("");
//     // setUrl("");
//     //noteFormRef.current.togglevisibility();
//   };

//   const handleQuestionChange = (event) => {
//     setquestion(event.target.value);
//   };

//   const handleOptionAChange = (event) => {
//     setoptionA(event.target.value);
//   };

//   const handleOptionBChange = (event) => {
//     setoptionB(event.target.value);
//   };

//   const handleOptionCChange = (event) => {
//     setoptionC(event.target.value);
//   };

//   const handleOptionDChange = (event) => {
//     setoptionD(event.target.value);
//   };

//   const handleOptionEChange = (event) => {
//     setoptionE(event.target.value);
//   };

//   const handleCorrectOptionChange = (event) => {
//     setcorrectOption(event.target.value);
//   };

//   const handleExplanationChange = (event) => {
//     setexplanation(event.target.value);
//   };

//   return (
//     <Form onSubmit={handleCreateQuestion}>
//       <Form.Group controlId="formUrlId">
//         <Form.Label> Questions</Form.Label>

//         <Form.Control
//           type="text"
//           as="textarea"
//           rows={5}
//           value={question}
//           onChange={handleQuestionChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formOptionAId">
//         <Form.Label>Option A</Form.Label>
//         <Form.Control
//           type="text"
//           value={optionA}
//           as="textarea"
//           rows={2}
//           onChange={handleOptionAChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formOptionBId">
//         <Form.Label>Option B</Form.Label>
//         <Form.Control
//           type="text"
//           value={optionB}
//           as="textarea"
//           rows={2}
//           onChange={handleOptionBChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formOptionCId">
//         <Form.Label>Option C</Form.Label>
//         <Form.Control
//           type="text"
//           value={optionC}
//           as="textarea"
//           rows={2}
//           onChange={handleOptionCChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formOptionDId">
//         <Form.Label>Option D</Form.Label>
//         <Form.Control
//           type="text"
//           value={optionD}
//           as="textarea"
//           rows={2}
//           onChange={handleOptionDChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formOptionEId">
//         <Form.Label>Option E</Form.Label>
//         <Form.Control
//           type="text"
//           value={optionE}
//           as="textarea"
//           rows={2}
//           onChange={handleOptionEChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formCorrectOptionId">
//         <Form.Label>Correct Option </Form.Label>
//         <Form.Control
//           type="text"
//           value={correctOption}
//           onChange={handleCorrectOptionChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formExplanationEId">
//         <Form.Label>Explanation</Form.Label>
//         <Form.Control
//           type="text"
//           value={explanation}
//           as="textarea"
//           rows={7}
//           onChange={handleExplanationChange}
//         />
//       </Form.Group>

//       <Button type="submit" style={{ margin: 5 }} block>
//         create question
//       </Button>
//     </Form>
//   );
// };
// export default CreateQuestionsForm;
