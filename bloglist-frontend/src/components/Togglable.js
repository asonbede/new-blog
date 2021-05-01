import React, { useState, useImperativeHandle } from "react";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const togglevisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      togglevisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={togglevisibility} style={{ marginTop: 10 }}>
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          variant="warning"
          onClick={togglevisibility}
          style={{ marginTop: 3 }}
          block
        >
          cancel
        </Button>
      </div>
    </div>
  );
});

export default Togglable;
