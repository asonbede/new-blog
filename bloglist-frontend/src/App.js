import React, { useState, useEffect, useRef } from "react";
import Blogs from "./components/Blogs";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import CreateBlog from "./components/CreateBlog";
import Togglable from "./components/Togglable";
import LogOutButton from "./components/LogOutButton";
import AllUsers from "./components/AllUsers";
import OneUser from "./components/OneUser";
import OneBlog from "./components/Oneblog";
import CreateUser from "./components/CreateUserForm";

import blogServices from "./services/blogs";

import usersService from "./services/users";
import loginService from "./services/login";

import { initializeBlogs } from "./reducers/blogReducer";
import { setLoginUser } from "./reducers/usersReducer";
import { getAllUsers } from "./reducers/allUsersReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { Table, Form, Button, Alert, Navbar, Nav } from "react-bootstrap";

const App = (props) => {
  //const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [controlRerender, setcontrolRerender] = useState(false);

  const user = useSelector((state) => state.logInUser);
  const blogs = useSelector((state) => state.blogs);
  const allUsers = useSelector((state) => state.allUsers);
  const trigarRender = useSelector((state) => state.trigarRender);

  console.log({ user });
  const noteFormRef = useRef(null);
  console.log({ noteFormRef }, "noteformRef");
  const dispatch = useDispatch();
  const history = useHistory();
  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  // export const controlUseEffectRerender = () => {
  //   return !true;
  // };

  //const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [trigarRender]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      //setUser(user);
      dispatch(setLoginUser(user));
      blogServices.setToken(user.token);
      usersService.setToken(user.token);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in with", username, password);
    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      blogServices.setToken(user.token);
      //setUser(user);
      dispatch(setLoginUser(user));
      setUsername("");
      setPassword("");
      setMessage({ type: "success", message: `${user.name} logged in` });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (exception) {
      setMessage({
        type: "error",
        message: "Login failed. Wrong credentials: wrong username or password",
      });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };
  const handleLogout = () => {
    window.localStorage.removeItem("loggedNoteappUser");
    // setMessage({ type: "success", message: `${userName} logged out` });
    // setTimeout(() => {
    //   setMessage(null);
    // }, 5000);
    // setUser(null);
    dispatch(setLoginUser(null));
  };

  // //implementing updating likes
  // const updateLikes = (id) => {
  //   console.log(`Likes of ${id} about to be changed`);
  //   //const url = `http://localhost:3001/notes/${id}`;
  //   // const note = notes.find((n) => n.id === id);
  //   const changeBlog = {
  //     user: "5a43e6b6c37f3d065eaaa581",
  //     likes: 45,
  //     author: "Joel Spolsky",
  //     title: "The Joel Test: 12 Steps to Better Code",
  //     url:
  //       "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/",
  //   };
  //   blogServices
  //     .update(id, changeBlog)
  //     .then((returnedBlog) => {
  //       console.log({ returnedBlog });
  //      // setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
  //       //setNotes(returnedNote);
  //       setMessage({
  //         type: "success",
  //         message: `The Likes of Blog with id:${id} was successfully updated`,
  //       });
  //       setTimeout(() => {
  //         setMessage(null);
  //       }, 5000);
  //     })
  //     .catch(() => {
  //       setMessage(`Blogs likes update failed`);
  //       setTimeout(() => {
  //         setMessage(null);
  //       }, 5000);
  //       //setNotes(notes.filter((n) => n.id !== id));
  //     });
  //   // .catch((error) => {
  //   //   alert(`the note ${note.content} was already deleted`);
  //   // });
  // };

  // const match = useRouteMatch('/blogs/:id')
  // const blog = match ? blogs.find(blog => blog.id === Number(match.params.id)): null

  // if (user === null) {
  //   return (
  //     <div>
  //       <Notification message={message} />
  //       <h2>Log in to application</h2>
  //       <Togglable buttonLabel="login">
  //         <LoginForm
  //           handlePasswordChange={handlePasswordChange}
  //           handleUsernameChange={handleUsernameChange}
  //           handleLogin={handleLogin}
  //           password={password}
  //           username={username}
  //         />
  //       </Togglable>
  //     </div>
  //   );
  // }
  const padding = {
    padding: 5,
  };

  return (
    <div className="container">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                <Link to="/" style={padding}>
                  Blogs{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/users" style={padding}>
                  Users{" "}
                </Link>
              </Nav.Link>

              {user ? (
                <>
                  <em style={{ color: "white", padding: 5 }}>
                    {user.username} logged in{" "}
                  </em>{" "}
                  <Nav.Link href="#" as="span">
                    <Link to="/logout" style={padding}>
                      {" "}
                      logout{" "}
                    </Link>{" "}
                  </Nav.Link>
                </>
              ) : (
                <>
                  {" "}
                  <Nav.Link href="#" as="span">
                    <Link style={padding} to="/login">
                      login
                    </Link>{" "}
                  </Nav.Link>
                  <Nav.Link href="#" as="span">
                    <Link style={padding} to="/register">
                      registerr
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Notification message={message} />

        <Switch>
          <Route path="/users/:id">
            {" "}
            <OneUser />{" "}
          </Route>
          <Route path="/users">
            {user ? <AllUsers /> : <Redirect to="/login" />}
          </Route>

          <Route path="/logout">
            {" "}
            <LogOutButton handleLogout={handleLogout} />{" "}
          </Route>

          <Route path="/blogs/:id">
            {" "}
            <OneBlog /> <Blogs />{" "}
          </Route>

          <Route path="/login">
            {user ? (
              <Redirect to="/" />
            ) : (
              <>
                {" "}
                <Togglable buttonLabel="login">
                  <h2>Log in to application</h2>
                  <LoginForm
                    handlePasswordChange={handlePasswordChange}
                    handleUsernameChange={handleUsernameChange}
                    handleLogin={handleLogin}
                    password={password}
                    username={username}
                  />
                </Togglable>
              </>
            )}
          </Route>

          <Route path="/register">
            <Togglable buttonLabel="create user">
              <p>Create New User</p>
              <CreateUser />
            </Togglable>
          </Route>

          <Route path="/">
            {console.log("in blogs")}
            <Togglable buttonLabel="create blog" ref={noteFormRef}>
              <p>Create New</p>
              <CreateBlog noteFormRef={noteFormRef} />
            </Togglable>
            <h2 style={{ textAlign: "center" }}>blogs</h2>

            <Blogs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
{
  /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#" as="span">
      <Link style={padding} to="/">
        home
      </Link>
    </Nav.Link>
    <Nav.Link href="#" as="span">
      <Link style={padding} to="/notes">
        notes
      </Link>
    </Nav.Link>
    <Nav.Link href="#" as="span">
      <Link style={padding} to="/users">
        users
      </Link>
    </Nav.Link>
    <Nav.Link href="#" as="span">
      {user ? (
        <em style={padding}>{user} logged in</em>
      ) : (
        <Link style={padding} to="/login">
          login
        </Link>
      )}
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar> */
}
