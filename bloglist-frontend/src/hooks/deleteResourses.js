import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export const useDeleteResourse = (messageObj) => {
  //const [value, setValue] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [alertContent, setalertContent] = useState({});
  const [deleteHandlerOutput, setdeleteHandlerOutput] = useState({});
  const dispatch = useDispatch();

  const handleDeleteComment = (blog, comment) => {
    const blogId = blog.id;
    const commentId = comment.commentId;
    const blogObj = {
      ...blog,
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),
      comments: JSON.stringify(
        blog.comments.filter((item) => item.commentId !== commentId)
      ),
    };

    setalertContent(messageObj);
    setshowAlert(true);

    setdeleteHandlerOutput({ blogId, blogObj });
  };

  const handleDeleteCommentReply = (blog, commentObj, replyId) => {
    const blogId = blog.id;
    console.log({ commentObj }, "from delete");
    const replyObj = commentObj.reply.find(
      (item) => item.commentId === replyId
    );
    console.log({ replyObj }, "from delete");
    const replyText = replyObj.comment;
    const newCommentArray = blog.comments.map((item) => {
      if (item.commentId === commentObj.commentId) {
        return {
          ...item,
          reply: [...item.reply.filter((reply) => reply.commentId !== replyId)],
        };
      } else {
        return item;
      }
    });
    const blogObj = {
      ...blog,
      questions: JSON.stringify(blog.questions),
      likes: JSON.stringify(blog.likes),

      comments: JSON.stringify(newCommentArray),
    };

    // //const blogObject = blogs.find((blog) => blog.id === id);
    // const confirmResult = window.confirm(
    //   `Do you really want to delete this comment: ${replyText} from database/server?`
    // );
    // if (!confirmResult) {
    //   return;
    // }
    setalertContent(messageObj);
    setshowAlert(true);

    setdeleteHandlerOutput({ blogId, blogObj });

    //dispatch(sendDeleteCommentReply(blogId, blogObj));
  };

  const continueHandler = (dispathfunc) => {
    //console.log({ deleteHandlerOutput });
    dispatch(
      dispathfunc(deleteHandlerOutput.blogId, deleteHandlerOutput.blogObj)
    );
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };
  const cancelHandler = () => {
    setshowAlert(false);
    setdeleteHandlerOutput({});
  };

  return {
    handleDeleteComment,
    handleDeleteCommentReply,
    continueHandler,
    cancelHandler,
    showAlert,
    alertContent,
    deleteHandlerOutput,
    setalertContent,
  };
};
