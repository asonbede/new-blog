import React, { useState, useEffect } from "react";
import { sendUpdateRepyComment } from "../reducers/blogReducer";
import { sendCommentReplyUpdate } from "../reducers/commentUpdate";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { updateMessage } from "../reducers/commentUpdateReducer";
import Togglable from "./Togglable";
import {
  useField,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";
const UpdateReplyForm = ({ blog, noteFormRef, commentObj, replyId }) => {
  //const [comment, setComment] = useState("");
  //const [indexValue, setindexValue] = useState("");
  //const [commentItem, setcommentItem] = useState({});

  //const [blogValue, setblogvalue] = useState({});
  const dispatch = useDispatch();

  const commentReplyUpdateState = useSelector(
    (state) => state.updateState.commentReplyUpdateState
  );
  let itemObject;
  let replyItem;
  //console.log({ dispatch });
  // const user = useSelector((state) => state.logInUser);
  // const { formUpdateTrigar, commentValue } = useSelector(
  //   (state) => state.updateHandle
  // );
  //let indexOfItemToBeRemoved;

  const useEditorReplyComment = useEditor();
  const {
    url: comment,
    editorState,
    onEditorStateChange,
  } = useEditorReplyComment;

  if (commentObj && commentObj.reply.length) {
    replyItem = commentObj.reply.find((item) => item.commentId === replyId);
    //setComment(replyItem.comment);
    useEditorReplyComment.useServerContent(replyItem.comment);
  }

  // useEffect(() => {
  //   if (commentObj && commentObj.reply) {
  //     const replyItem = commentObj.reply.find(
  //       (item) => item.commentId === replyId
  //     );
  //     // setComment(replyItem.comment);
  //     //setblogvalue(blogValue);

  //     //const commentArray = blog.comments;
  //     itemObject = {
  //       comment: comment,
  //       commenter: replyItem.commenter,
  //       profileimageid: replyItem.profileimageid,
  //       postedTime: replyItem.postedTime,
  //       commentId: replyItem.commentId,
  //     };

  //     // indexOfItemToBeRemoved = commentArray.indexOf(itemObject);
  //     //setindexValue(indexOfItemToBeRemoved);
  //     //setcommentItem(itemObject);
  //   }
  // }, [commentObj]);
  const handleSubmit = (event) => {
    console.log("sending comment");
    //console.log(event.target.value);

    event.preventDefault();
    //const initialTime = new Date();
    const newItemObject = {
      ...replyItem,
      comment: comment,
      updatedTime: new Date().getTime(),
    };
    console.log({ newItemObject });

    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [
            ...item.reply.map((reply) =>
              reply.commentId === replyId ? newItemObject : reply
            ),
          ],
        };
      } else {
        return item;
      }
    });
    // const blogObj = {
    //   ...blog,
    //   comments: newCommentArray,
    // };

    const blogObj = {
      ...blog,
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),
      comments: JSON.stringify(newCommentArray),
    };

    dispatch(sendUpdateRepyComment(blog.id, blogObj));
    noteFormRef.current.togglevisibility();
    dispatch(sendCommentReplyUpdate(null));
  };
  // const handleTextAreaChange = (event) => {
  //   setComment(event.target.value);
  // };
  if (commentReplyUpdateState && commentReplyUpdateState === replyId) {
    return (
      <Togglable buttonLabel="update Reply" ref={noteFormRef}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCommentId">
            {/* <Form.Label>Update Comment</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="comment"
              value={comment}
              onChange={handleTextAreaChange}
              style={{ width: "50%" }}
            /> */}
            <Form.Label className="App-header">
              {" "}
              Update Comment Reply
            </Form.Label>

            <MyRichEditor
              useEditorMainBlog={useEditorReplyComment}
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
    );
  }
  return null;
};
export default UpdateReplyForm;
//profileimageid

// import {
//   useField,
//   useEditor,
//   handleImageInsert,
//   MyRichEditor,
// } from "../hooks/resourse";

// const UpdateForm = ({ blog, noteFormRef, commentObj, commentIdValue }) => {
//   //const [comment, setComment] = useState("");

//   const dispatch = useDispatch();

//   console.log({ blog });

//   const commentUpdateState = useSelector(
//     (state) => state.updateState.commentUpdateState
//   );
//   const useEditorMainBlogComment = useEditor();
//   const {
//     url: comment,
//     editorState,
//     onEditorStateChange,
//   } = useEditorMainBlogComment;
//   useEditorMainBlogComment.useServerContent(commentObj.comment);
//   //useEditorMainBlogTitle.useServerContent(blog.title);

//   // useEffect(() => {
//   //   if (commentObj) {
//   //     setComment(commentObj.comment);
//   //   }
//   // }, [commentObj]);
//   const handleSubmit = (event) => {
//     console.log("sending comment");
//     console.log(event.target.value);

//     event.preventDefault();
//     //const initialTime = new Date();
//     const newItemObject = { ...commentObj, comment: comment };
//     console.log({ newItemObject });
//     const newCommentArray = [...blog.comments].map((item) => {
//       if (item.commentId === commentObj.commentId) {
//         return newItemObject;
//       } else {
//         return item;
//       }
//     });
//     console.log({ newCommentArray });

//     const blogObj = {
//       ...blog,
//       questions: JSON.stringify(blog.questions),
//       likes: JSON.stringify(blog.likes),
//       comments: JSON.stringify(newCommentArray),
//     };

//     dispatch(handleUpdateComment(blog.id, blogObj));
//     noteFormRef.current.togglevisibility();

//     dispatch(sendCommentUpdate(null));
//   };
//   // const handleTextAreaChange = (event) => {bb
//   //   setComment(event.target.value);
//   // };

//   if (commentUpdateState && commentUpdateState === commentIdValue) {
//     return (
//       <div id="updateForm">
//         <Togglable buttonLabel="click here to begin update" ref={noteFormRef}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formCommentId">
//               {/* <Form.Label>Update Comment</Form.Label>
//               <Form.Control
//                 type="text"
//                 as="textarea"
//                 rows={3}
//                 name="comment"
//                 value={comment}
//                 onChange={handleTextAreaChange}
//                 style={{ width: "50%" }}
//               /> */}
//               <Form.Label className="App-header"> Update Comment</Form.Label>

//               <MyRichEditor
//                 useEditorMainBlog={useEditorMainBlogComment}
//                 readOnly={false}
//                 toolbarOnFocus={false}
//                 toolbarPresent={true}
//                 smallHeight={false}
//               />
//             </Form.Group>
//             <Button type="submit" style={{ margin: 5 }}>
//               Update
//             </Button>
//           </Form>
//         </Togglable>
//       </div>
//     );
//   }
//   return null;
// };
// export default UpdateForm;
// //profileimageid
