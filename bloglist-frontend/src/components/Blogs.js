import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Blogs = () => {
  const dispatch = useDispatch();
  let blogs = useSelector(({ blogs }) => {
    return blogs;
  });
  //console.log("kkkkjj", notes);

  if (blogs) {
    return (
      <div style={{ marginTop: 20 }}>
        <Table striped bordered hover size="sm" variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>Blog Title</th>
              <th>Blog Author</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>
                  <Link to={`/blogs/${blog.id}`}>{blog.title} </Link>
                </td>
                <td>{blog.author}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  return null;
};

export default Blogs;
