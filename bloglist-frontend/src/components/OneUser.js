import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserHandler } from "../reducers/allUsersReducer";

import { useRouteMatch, Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

console.log("one blog running");

const OneUser = () => {
  //const singleUser= useSelector(state=>state.singleUser)
  const dispatch = useDispatch();
  const match = useRouteMatch("/users/:id");
  const allUsers = useSelector((state) => state.allUsers); //singleUser
  const user = useSelector((state) => state.logInUser);

  const singleUser = allUsers
    ? allUsers.find((user) => user.id.toString() === match.params.id)
    : null;

  //const dispatch= useDispatch()
  console.log({ singleUser });
  if (singleUser) {
    console.log(singleUser.profileimageid, "imgeprofile");

    return (
      <Card
        style={{ width: "50%", marginTop: "5%" }}
        border="primary"
        bg=""
        text=""
      >
        <Image
          variant="top"
          src={`http://localhost:8082${singleUser.profileimageid}`}
          thumbnail
          fluid
          alt="profile image"
        />
        <Card.Header as="h2">{singleUser.name} Profile </Card.Header>
        <Card.Body>
          {/* <Card.Title>{singleUser.name} Profile</Card.Title> */}
          <Card.Text>
            Total Number of Blogs: {singleUser.blogs.length}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <Card.Text> Added Blogs</Card.Text>
            {singleUser.blogs.map((blog) => (
              <ListGroupItem key={blog.id}>{blog.title}</ListGroupItem>
            ))}
          </ListGroup>

          {/* <ListGroup className="list-group-flush">
          <Card.Text> Added Blogs</Card.Text>
          {singleUser.blogs.map((blog) => (
            <ListGroupItem key={blog.id}>{blog.title}</ListGroupItem>
          ))}
        </ListGroup> */}

          {user.username === singleUser.username ? (
            <Card.Link
              href="#"
              onClick={() => dispatch(removeUserHandler(singleUser.id))}
              style={{ marginRight: 15 }}
            >
              Delete User
            </Card.Link>
          ) : null}

          <Link to="/users">Go To Users List</Link>
        </Card.Body>
      </Card>
    );
  }

  return null;
};

export default OneUser;
