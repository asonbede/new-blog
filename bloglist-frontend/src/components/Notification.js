import React from "react";
import { useSelector } from "react-redux";
const Notification = () => {
  const message = useSelector((state) => state.message);
  if (message === null) {
    return null;
  }
  const { type } = message;
  return (
    <div className={type === "error" ? "error" : "success"}>
      {" "}
      {message.message}
    </div>
  );
};

export default Notification;
