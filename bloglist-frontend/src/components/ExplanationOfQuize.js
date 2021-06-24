import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { Table, Image, Jumbotron } from "react-bootstrap";

const ExplanationOfQuize = ({ question, blogIdItems, paraValue, quizeNum }) => {
  console.log(question.explanation, "explanation");
  console.log({ question });
  console.log({ quizeNum });
  console.log({ paraValue });
  //console.log(blogIdItems[paraValue].quizeObj[quizeNum]);
  //   const dispatch = useDispatch();
  //   let blogs = useSelector(({ blogs }) => {
  //     return blogs;
  //   });
  //console.log("kkkkjj", notes);

  return (
    <Jumbotron>
      <h1>Explanation</h1>
      {paraValue in blogIdItems &&
      quizeNum in blogIdItems[paraValue].quizeObj ? (
        <img
          style={{
            marginBottom: 5,
            marginRight: 4,
            width: "100%",
            height: "auto",
          }}
          src={blogIdItems[paraValue].quizeObj[quizeNum]}
          alt="blog image"
        />
      ) : null}
      <p>{question.explanation}</p>
    </Jumbotron>
  );
};

export default ExplanationOfQuize;
