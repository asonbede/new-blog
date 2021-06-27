import React, { useState, useEffect } from "react";
import { handleUpdateMainBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import BlogTitle from "./BlogTitle";
import BlogBody from "./BlogBody";
import { useRouteMatch } from "react-router-dom";
import Togglable from "./Togglable";
import { sendMainBlogUpdate } from "../reducers/commentUpdate";
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  AtomicBlockUtils,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
//import "..../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from "draft-js-export-html";
//import { handleComment } from "../reducers/blogReducer";
const MainBlogUpdateForm = ({ noteFormRef, blog, blogIdValue }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //const [url, setUrl] = useState("");
  const [image, setimage] = useState("");
  const [oldImage, setoldimage] = useState("");
  const [comment, setcomment] = useState([]);
  const [questions, setquestions] = useState([]);
  //const [state, setstate] = useState(in)
  const [likes, setlikes] = useState({});
  // const [content, setcontent] = useState({});
  const [imageBlog, setimageBlog] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  let imageType = "old";
  const dispatch = useDispatch();

  //this.state = { editorState: EditorState.createWithContent(content)};

  // }
  // render(){
  //   return(
  //     <Editor
  //       editorState={this.state.editorState}
  //       onChange={this.onChange}

  // let match = useRouteMatch("/updatemainblog/:id");
  // const blogs = useSelector((state) => state.blogs);
  // const blog = blogs
  //   ? blogs.find((blog) => blog.id.toString() === match.params.id)
  //   : null;
  console.log({ blog }, "fromblogggggggggg");
  const user = useSelector((state) => state.logInUser);

  const mainBlogUpdate = useSelector(
    (state) => state.updateState.mainBlogUpdate
  );

  useEffect(() => {
    if (blog) {
      console.log(blog.likes, "blog likesssss");
      //setUrl(blog.url);
      setAuthor(blog.author);
      setTitle(blog.title);
      setoldimage(blog.imageid);
      setcomment(blog.comments);
      setlikes(blog.likes);
      setquestions(blog.questions);

      const content = convertFromRaw(JSON.parse(blog.url));
      if (content) {
        setEditorState(() =>
          EditorState.push(editorState, content, "remove-range")
        );
      }
    }
  }, [blog]);
  // console.log({ content }, "from main blogupdateeeeeeeee");
  // if (content) {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createWithContent(content)
  // );
  //}

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    if (image) {
      imageType = "new";
      const url = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
      console.log(blog.comments, "commmmmmentsss");
      const formData = new FormData();
      formData.append("image", image);
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
      const url = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
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

    setTitle("");
    setAuthor("");
    // setUrl("");
    //noteFormRef.current.togglevisibility();
    noteFormRef.current.togglevisibility();
    imageType = "old";
    //dispatch(sendMainBlogUpdate(null));
  };
  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleImageBlogChange = (event) => {
    setimageBlog(event.target.value);
  };

  //handle blog image
  const handleImageInsert = () => {
    const newEditorState = insertImage(editorState, imageBlog);
    handleEditorChange(newEditorState);
  };

  const insertImage = (editorState, imageBlog) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: imageBlog }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
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
            <Form.Group controlId="formTitleId">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
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
              <Form.Label className="App-header"> Contents</Form.Label>
              {/* <div className="App-main"> */}
              {/* <header className="App-header">Content</header> */}
              <Editor
                //toolbarOnFocus
                //initialEditorState
                // defaultEditorState={editorState}
                editorState={editorState}
                // onChange={setEditorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBlogImageId">
              <Form.Label>Blog image</Form.Label>
              <Form.Control
                type="text"
                value={imageBlog}
                onChange={handleImageBlogChange}
                as="textarea"
                rows={2}
              />
            </Form.Group>
            <Form.Group controlId="formProfileImageId">
              <Form.File
                onChange={fileSelected}
                accept="image/*"
                label="Profile Image"
              />
            </Form.Group>
            <Button onClick={handleImageInsert} style={{ margin: 5 }}>
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
