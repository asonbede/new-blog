import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/allUsersReducer";
import { useHistory } from "react-router-dom";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setimage] = useState("");
  const noteFormRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreateUser = (event) => {
    //noteFormRef.current.togglevisibility();
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", username);
    formData.append("name", name);
    formData.append("password", password);

    // const newUserObject = {
    //   username,
    //   name,
    //   password,
    //   image,
    // };

    dispatch(createUser(formData));
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

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
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

      <Form.Group controlId="formProfileImageId">
        <Form.File
          onChange={fileSelected}
          accept="image/*"
          label="Profile Image"
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
  /* <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
</Form> */
}
