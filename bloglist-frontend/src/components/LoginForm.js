import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
const LoginForm = ({
  handleLogin,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <Form.Group controlId="formUsernameId">
          <Form.Label>Username</Form.Label>

          <Form.Control value={username} onChange={handleUsernameChange} />
        </Form.Group>
        <Form.Group controlId="formPasswordId">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type="submit" block>
          login
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
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
