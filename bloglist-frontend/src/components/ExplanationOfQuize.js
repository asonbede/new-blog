import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { Table, Image, Jumbotron } from "react-bootstrap";

const ExplanationOfQuize = (question, blogIdItems, blog, quizeNum) => {
  //   const dispatch = useDispatch();
  //   let blogs = useSelector(({ blogs }) => {
  //     return blogs;
  //   });
  //console.log("kkkkjj", notes);

  return (
    <Jumbotron>
      <h1>Explanation</h1>
      {blog.id in blogIdItems && quizeNum in blogIdItems.quizeObj ? (
        //   <Card.Img variant="top" src={`${imagePath}`} alt="blog image" />

        <img
          //variant="top"
          style={{
            marginBottom: 5,
            marginRight: 4,
            width: "100%",
            height: "auto",
          }}
          src={blogIdItems.quizeObj[quizeNum]}
          alt="blog image"
          //   fluid
          //   rounded
        />
      ) : null}
      <p>{question.explanation}</p>
    </Jumbotron>
  );
};

export default ExplanationOfQuize;
