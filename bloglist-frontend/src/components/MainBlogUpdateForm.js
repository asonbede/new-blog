import React, { useState, useEffect } from "react";
import { handleUpdateMainBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
//import { handleComment } from "../reducers/blogReducer";
const MainBlogUpdateForm = ({ blog, noteFormRef }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [image, setimage] = useState("");
  const [oldImage, setoldimage] = useState("");
  const [comment, setcomment] = useState([]);
  //const [state, setstate] = useState(in)
  const [likes, setlikes] = useState(0);
  let imageType = "old";
  const dispatch = useDispatch();
  useEffect(() => {
    if (blog) {
      setUrl(blog.url);
      setAuthor(blog.author);
      setTitle(blog.title);
      setoldimage(blog.imageid);
      setcomment(blog.comments);
      setlikes(blog.likes);
    }
  }, [blog]);

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    if (image) {
      imageType = "new";
      console.log(blog.comments, "commmmmmentsss");
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("url", url);
      formData.append("author", author);
      formData.append("oldimage", oldImage);
      formData.append("imagetype", imageType);
      formData.append("comments", comment);
      formData.append("likes", likes);
      dispatch(handleUpdateMainBlog(blog.id, formData, "main-blog-update"));
    } else {
      const newObject = { ...blog, title, author, url, imageType: "old" };
      dispatch(handleUpdateMainBlog(blog.id, newObject, "main-blog-update"));
    }

    setTitle("");
    setAuthor("");
    setUrl("");
    //noteFormRef.current.togglevisibility();
    noteFormRef.current.togglevisibility();
    imageType = "old";
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
  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  return (
    <Form onSubmit={handleUpdateBlog}>
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
      <Form.Group controlId="formProfileImageId">
        <Form.File
          onChange={fileSelected}
          accept="image/*"
          label="Profile Image"
        />
      </Form.Group>

      <Button type="submit" style={{ margin: 5 }} block>
        update
      </Button>
    </Form>
  );
};
export default MainBlogUpdateForm;
//profileimageid
