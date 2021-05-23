import React, { useState, useEffect } from "react";

import { Jumbotron, Modal, Button } from "react-bootstrap";

const AlertComponent = ({ radioNameValue }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const continueHandler = () => {
    console.log("okay44444");
    setskippedArr([]);
    setIsOpen(false);
  };
  const cancelHandler = () => {
    console.log("okay");
    dispatch(sendResultHandler());
    dispatch(sendResulReviewtHandler());
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title as="h3">Skipped Questios Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          `You have skipped questions {skippedArrayString} if you click continue
          your script will be submitted but you will lose the marks attached to
          the skipped questions`
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={cancelHandler}>Cancel Submission</Button>
          <Button onClick={continueHandler}>Continue</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertComponent;
