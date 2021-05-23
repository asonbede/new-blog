import React, { useState, useEffect } from "react";

import { Jumbotron, Modal, Button } from "react-bootstrap";

const AlertComponent = ({
  showAlert,
  continueHandler,
  cancelHandler,
  alertContent,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  //   const continueHandler = () => {
  //     console.log("okay44444");
  //     setskippedArr([]);
  //     setIsOpen(false);
  //   };
  //   const cancelHandler = () => {
  //     console.log("okay");
  //     dispatch(sendResultHandler());
  //     dispatch(sendResulReviewtHandler());
  //     setIsOpen(false);
  //   };

  //   const showModal = () => {
  //     setIsOpen(true);
  //   };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal show={showAlert} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title as="h3">{alertContent.headers}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {alertContent.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={cancelHandler}>Cancel </Button>
          <Button onClick={continueHandler}>Continue</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertComponent;
