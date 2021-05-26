import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { sendMainBlogUpdate } from "../reducers/commentUpdate";
const Notification = ({ noteFormRef }) => {
  const stateMessage = useSelector((state) => state.message);
  const [show, setShow] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  // if (stateMessage === null) {
  //   return null;
  // }
  useEffect(() => {
    setShow(true);
  }, [stateMessage]);

  // function handleBackClick() {
  //   titleRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  if (stateMessage) {
    const { type, message } = stateMessage;
    if (message === "Blog-deletion operation was successful") {
      history.push("/");
    }
    if (message === "main-blog-update operation was successful") {
      //noteFormRef.current.togglevisibility();

      dispatch(sendMainBlogUpdate(null));
    }

    if (show) {
      return (
        <div
          id="noteti"
          style={{ position: "fixed", top: "10%", zIndex: 5, width: "70%" }}
        >
          <Alert
            variant={type === "error" ? "danger" : "success"}
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>
              {type === "error"
                ? "Action Not Successful"
                : "Action Was Successful"}
            </Alert.Heading>
            <p>{message}</p>
          </Alert>
        </div>
      );
    } else {
      return null;
    }
  }

  return null;
};

export default Notification;
