import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
const Notification = () => {
  const stateMessage = useSelector((state) => state.message);
  const [show, setShow] = useState(true);

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

    if (show) {
      return (
        <div id="noteti">
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
