import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";

const CreateBlog = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const handleCreateBlog = (event) => {
    //noteFormRef.current.togglevisibility();
    //console.log({ noteFormRef });
    event.preventDefault();
    const newBlogObject = {
      title: title,
      url: url,
      author: author,
    };

    props.noteFormRef.current.togglevisibility();

    dispatch(createBlog(newBlogObject));
    setTitle("");
    setAuthor("");
    setUrl("");
    //noteFormRef.current.togglevisibility();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Form onSubmit={handleCreateBlog}>
      <Form.Group controlId="formTitleId">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} />
      </Form.Group>

      <Form.Group controlId="formAuthorId">
        <Form.Label> author</Form.Label>

        <Form.Control
          type="text"
          value={author}
          onChange={handleAuthorChange}
        />
      </Form.Group>
      <Form.Group controlId="formUrlId">
        <Form.Label> Contents</Form.Label>

        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          value={url}
          onChange={handleUrlChange}
        />
      </Form.Group>
      <Button type="submit" style={{ margin: 5 }} block>
        create
      </Button>
    </Form>
  );
};
export default CreateBlog;
{
  /* <div>
      <h2>login</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div> */
}
