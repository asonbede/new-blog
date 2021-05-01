import React from "react";
import { useSelector, useDinatch } from "react-redux";
import { getAllUsers, hideAllUsers } from "../reducers/allUsersReducer";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

console.log("users");
const AllUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  console.log({ allUsers });
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  if (allUsers.length) {
    return (
      <div style={{ marginTop: 20 }}>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Author</th>
              <th>Number of Blogs</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name} </Link>
                </td>
                <td> {user.blogs.length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  return null;
};

export default AllUsers;
