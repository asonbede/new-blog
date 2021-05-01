import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/allUsersReducer";
import { useHistory } from "react-router-dom";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const noteFormRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreateUser = (event) => {
    //noteFormRef.current.togglevisibility();
    event.preventDefault();
    const newUserObject = {
      username,
      name,
      password,
    };

    dispatch(createUser(newUserObject));
    setUsername("");
    setName("");
    setPassword("");
    history.push("/users");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleCreateUser}>
      <Form.Group controlId="formUsernameId">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={handleUsernameChange} />
      </Form.Group>
      <Form.Group controlId="formNameId">
        <Form.Label>Name</Form.Label>

        <Form.Control type="text" value={name} onChange={handleNameChange} />
      </Form.Group>

      <Form.Group controlId="formNameId">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Button type="submit" block>
        create
      </Button>
    </form>
  );
};
export default CreateUser;
{
  /* <Form.Group controlId="formTitleId">
<Form.Label>Title</Form.Label>
<Form.Control type="text" value={title} onChange={handleTitleChange} />
</Form.Group> */
}
{
  /* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */
}
