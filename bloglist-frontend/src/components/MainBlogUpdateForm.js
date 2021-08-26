import React, { useState, useEffect } from "react";
import { handleUpdateMainBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

//import { useRouteMatch } from "react-router-dom";
import Togglable from "./Togglable";
//import { sendMainBlogUpdate } from "../reducers/commentUpdate";

import {
  useField,
  //useResource,
  useEditor,
  handleImageInsert,
  MyRichEditor,
} from "../hooks/resourse";

const MainBlogUpdateForm = ({ noteFormRef, blog, blogIdValue }) => {
  const [image, setimage] = useState("");
  const [oldImage, setoldimage] = useState("");
  const [comment, setcomment] = useState([]);
  const [questions, setquestions] = useState([]);

  const [likes, setlikes] = useState({});

  let imageType = "old";
  const dispatch = useDispatch();

  const useFieldTopic = useField("text");
  const useFieldAuthor = useField("text");
  const useFieldImage = useField("text");
  const useEditorMainBlog = useEditor();
  const useEditorMainBlogTitle = useEditor();

  const { url, editorState, onEditorStateChange } = useEditorMainBlog;
  const { url: title } = useEditorMainBlogTitle;

  const { value: author, setValue: setAuthorValue } = useFieldAuthor;
  const { value: topic, setValue: setTopicValue } = useFieldTopic;
  const { value: imageBlog } = useFieldImage;

  console.log({ blog }, "fromblogggggggggg");
  const user = useSelector((state) => state.logInUser);

  const mainBlogUpdate = useSelector(
    (state) => state.updateState.mainBlogUpdate
  );
  useEditorMainBlog.useServerContent(blog.url);
  useEditorMainBlogTitle.useServerContent(blog.title);

  useEffect(() => {
    if (blog) {
      console.log(blog.likes, "blog likesssss");
      //setUrl(blog.url);
      setAuthorValue(blog.author);
      setTopicValue(blog.topic ? blog.topic : "no topic yet");
      //setTitle(blog.title);//
      setoldimage(blog.imageid);
      setcomment(blog.comments);
      setlikes(blog.likes);
      setquestions(blog.questions);
    }
  }, [blog]);

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    if (image) {
      imageType = "new";

      console.log(blog.comments, "commmmmmentsss");
      const formData = new FormData();
      formData.append("image", image);
      formData.append("topic", topic);
      formData.append("title", title);
      formData.append("url", url);
      formData.append("author", author);
      formData.append("oldimage", oldImage);
      formData.append("imagetype", imageType);
      formData.append("comments", JSON.stringify(comment));
      formData.append("likes", JSON.stringify(likes));
      formData.append("questions", JSON.stringify(questions));
      formData.append("updated", new Date().getTime());

      dispatch(handleUpdateMainBlog(blog.id, formData));
    } else {
      const timeValue = new Date().getTime();
      console.log({ timeValue });
      console.log(blog, "11111111");
      const newObject = {
        ...blog,

        title,
        author,
        url,
        comments: JSON.stringify(blog.comments),
        questions: JSON.stringify(blog.questions),
        likes: JSON.stringify(blog.likes),
        updated: new Date().getTime(),
        imageType: "old",
      };
      console.log({ newObject }, "222222222222222");
      dispatch(handleUpdateMainBlog(blog.id, newObject));
    }

    // setTitle("");
    // setAuthor("");
    // setUrl("");

    noteFormRef.current.togglevisibility();
    imageType = "old";
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  if (mainBlogUpdate && mainBlogUpdate === blogIdValue) {
    return (
      <>
        <Togglable buttonLabel="Click Here To Begin Update" ref={noteFormRef}>
          <Form onSubmit={handleUpdateBlog}>
            <Form.Group controlId="formBlogTopicId">
              <Form.Label>Topic</Form.Label>
              <Form.Control {...useFieldTopic} as="textarea" rows={2} />
            </Form.Group>
            <Form.Group controlId="formTitleId">
              <Form.Label className="App-header">Title</Form.Label>

              <MyRichEditor
                style={{ height: "10%" }}
                useEditorMainBlog={useEditorMainBlogTitle}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={false}
              />
            </Form.Group>

            <Form.Group controlId="formAuthorId">
              <Form.Label> author</Form.Label>

              <Form.Control {...useFieldAuthor} />
            </Form.Group>

            <Form.Group controlId="formUrlId">
              <Form.Label className="App-header"> Contents</Form.Label>
              <MyRichEditor
                useEditorMainBlog={useEditorMainBlog}
                readOnly={false}
                toolbarOnFocus={false}
                toolbarPresent={true}
                smallHeight={false}
              />
            </Form.Group>
            <Form.Group controlId="formBlogImageId">
              <Form.Label>Blog image</Form.Label>
              <Form.Control {...useFieldImage} as="textarea" rows={2} />
            </Form.Group>
            <Form.Group controlId="formProfileImageId">
              <Form.File
                onChange={fileSelected}
                accept="image/*"
                label="Profile Image"
              />
            </Form.Group>
            <Button
              onClick={() =>
                handleImageInsert(editorState, imageBlog, onEditorStateChange)
              }
              style={{ margin: 5 }}
            >
              Insert Image
            </Button>

            <Button type="submit" style={{ margin: 5 }} block>
              update
            </Button>
          </Form>
        </Togglable>
      </>
    );
  }
  return null;
};
export default MainBlogUpdateForm;
//profileimageid
