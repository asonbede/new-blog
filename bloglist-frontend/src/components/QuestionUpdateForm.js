import React, { useState, useEffect } from "react";
import { handleQuestionUpdateComment } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";
import { sendQuestionUpdate } from "../reducers/commentUpdate";

import { useRouteMatch, Link } from "react-router-dom";
import Togglable from "./Togglable";
import {
  useField,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const QuestionUpdateForm = ({
  blog,
  noteFormRef,
  questionObj,
  questionIdValue,
}) => {
  const dispatch = useDispatch();

  console.log({ blog });

  const questionUpdateState = useSelector(
    (state) => state.updateState.questionUpdateState
  );
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

  const { value: correctOption, setValue: setCorrectOptionValue } =
    useEditorCorrectOption;
  const { url: explanation } = useEditorExplanation;

  useEditorQuestion.useServerContent(questionObj.question);
  useEditorOptionA.useServerContent(questionObj.options.optionA);
  useEditorOptionB.useServerContent(questionObj.options.optionB);
  useEditorOptionC.useServerContent(questionObj.options.optionC);
  useEditorOptionD.useServerContent(questionObj.options.optionD);
  useEditorOptionE.useServerContent(questionObj.options.optionE);

  useEditorExplanation.useServerContent(questionObj.explanation);
  useEffect(() => {
    setCorrectOptionValue(questionObj.correctOption);
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
      updateTime: new Date().getTime(),
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
      handleQuestionUpdateComment(
        blog.id,
        {
          ...blog,
          likes: JSON.stringify(blog.likes),
          comments: JSON.stringify(blog.comments),
          questions: JSON.stringify(newCommentArray),
        },
        newItemObject
      )
    );
    noteFormRef.current.togglevisibility();

    dispatch(sendQuestionUpdate(null));
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
              <MyRichEditor
                useEditorMainBlog={useEditorQuestion}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={false}
              />
            </Form.Group>

            <Form.Group controlId="formOptionAId">
              <Form.Label className="App-header">Option A</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorOptionA}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={true}
              />
            </Form.Group>

            <Form.Group controlId="formOptionBId">
              <Form.Label className="App-header">Option B</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorOptionB}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={true}
              />
            </Form.Group>

            <Form.Group controlId="formOptionCId">
              <Form.Label className="App-header">Option C</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorOptionC}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={true}
              />
            </Form.Group>

            <Form.Group controlId="formOptionDId">
              <Form.Label className="App-header">Option D</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorOptionD}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={true}
              />
            </Form.Group>

            <Form.Group controlId="formOptionEId">
              <Form.Label className="App-header">Option E</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorOptionE}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={true}
              />
            </Form.Group>

            <Form.Group controlId="formCorrectOptionId">
              <Form.Label>Correct Option </Form.Label>

              <Form.Control {...useEditorCorrectOption} />
            </Form.Group>

            <Form.Group controlId="formExplanationEId">
              <Form.Label className="App-header">Explanation</Form.Label>

              <MyRichEditor
                useEditorMainBlog={useEditorExplanation}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={false}
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
