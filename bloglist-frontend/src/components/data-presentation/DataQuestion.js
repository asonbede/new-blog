import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { Table, Image } from "react-bootstrap";

const DataQuestion = () => {
  //   const dispatch = useDispatch();
  //   let blogs = useSelector(({ blogs }) => {
  //     return blogs;
  //   });
  //console.log("kkkkjj", notes);

  return (
    <div style={{ marginTop: "30%", width: "100%" }}>
      <div style={{ marginBottom: "3%", width: "100%", fontSize: "20px" }}>
        The data table below and the graph following it were prepared by a
        student in a certain experiment. Use them to answer questions 1- 10.
      </div>
      <Table striped bordered hover size="sm" variant="dark" responsive="lg">
        <thead>
          <tr>
            <th>Volume(mL)</th>
            <th>Mass of Solution(g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.2</td>
            <td>7.0</td>
          </tr>
          <tr>
            <td>0.4</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>0.8</td>
            <td>16.0</td>
          </tr>
          <tr>
            <td>1.2</td>
            <td>22.0</td>
          </tr>
          <tr>
            <td>1.6</td>
            <td>32.0</td>
          </tr>
          <tr>
            <td>2.3</td>
            <td>38.0</td>
          </tr>
        </tbody>
      </Table>

      {/* <div style={{ margin: 20, width: "100%" }}> */}
      <img
        //variant="top"
        style={{
          marginBottom: 5,
          marginRight: 4,
          width: "100%",
          height: "auto",
        }}
        src="data:image/svg+xml;base64,PHN2ZyBpZD0ibXlTVkciIHdpZHRoPSI4NTAiIGhlaWdodD0iNjUwIiBzdHlsZT0ibWFyZ2luOiA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjcwMCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iNjAiIHkxPSI4MCIgeDI9IjcwMCIgeTI9IjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjYwIiB5MT0iMTAwIiB4Mj0iNzAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjYwIiB5MT0iMTIwIiB4Mj0iNzAwIiB5Mj0iMTIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjYwIiB5MT0iMTQwIiB4Mj0iNzAwIiB5Mj0iMTQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjYwIiB5MT0iMTYwIiB4Mj0iNzAwIiB5Mj0iMTYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjYwIiB5MT0iMTgwIiB4Mj0iNzAwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjYwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNzAwIiB5Mj0iMjIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjYwIiB5MT0iMjQwIiB4Mj0iNzAwIiB5Mj0iMjQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iNzAwIiB5Mj0iMjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjYwIiB5MT0iMjgwIiB4Mj0iNzAwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjYwIiB5MT0iMzAwIiB4Mj0iNzAwIiB5Mj0iMzAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjYwIiB5MT0iMzIwIiB4Mj0iNzAwIiB5Mj0iMzIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjYwIiB5MT0iMzQwIiB4Mj0iNzAwIiB5Mj0iMzQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjYwIiB5MT0iMzYwIiB4Mj0iNzAwIiB5Mj0iMzYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjYwIiB5MT0iMzgwIiB4Mj0iNzAwIiB5Mj0iMzgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjYwIiB5MT0iNDAwIiB4Mj0iNzAwIiB5Mj0iNDAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjYwIiB5MT0iNDIwIiB4Mj0iNzAwIiB5Mj0iNDIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjYwIiB5MT0iNDQwIiB4Mj0iNzAwIiB5Mj0iNDQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjYwIiB5MT0iNDYwIiB4Mj0iNzAwIiB5Mj0iNDYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjYwIiB5MT0iNDgwIiB4Mj0iNzAwIiB5Mj0iNDgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjYwIiB5MT0iNTAwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iODAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjEwMCIgeTE9IjYwIiB4Mj0iMTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjEyMCIgeTE9IjYwIiB4Mj0iMTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjE0MCIgeTE9IjYwIiB4Mj0iMTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjE2MCIgeTE9IjYwIiB4Mj0iMTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjE4MCIgeTE9IjYwIiB4Mj0iMTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjIyMCIgeTE9IjYwIiB4Mj0iMjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjI2MCIgeTE9IjYwIiB4Mj0iMjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjI4MCIgeTE9IjYwIiB4Mj0iMjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjMwMCIgeTE9IjYwIiB4Mj0iMzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjMyMCIgeTE9IjYwIiB4Mj0iMzIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjM0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjM2MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjM4MCIgeTE9IjYwIiB4Mj0iMzgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjQwMCIgeTE9IjYwIiB4Mj0iNDAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjQyMCIgeTE9IjYwIiB4Mj0iNDIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjQ0MCIgeTE9IjYwIiB4Mj0iNDQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjQ2MCIgeTE9IjYwIiB4Mj0iNDYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjQ4MCIgeTE9IjYwIiB4Mj0iNDgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjUwMCIgeTE9IjYwIiB4Mj0iNTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUyMCIgeDE9IjUyMCIgeTE9IjYwIiB4Mj0iNTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU0MCIgeDE9IjU0MCIgeTE9IjYwIiB4Mj0iNTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU2MCIgeDE9IjU2MCIgeTE9IjYwIiB4Mj0iNTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU4MCIgeDE9IjU4MCIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwMCIgeDE9IjYwMCIgeTE9IjYwIiB4Mj0iNjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYyMCIgeDE9IjYyMCIgeTE9IjYwIiB4Mj0iNjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY0MCIgeDE9IjY0MCIgeTE9IjYwIiB4Mj0iNjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY2MCIgeDE9IjY2MCIgeTE9IjYwIiB4Mj0iNjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY4MCIgeDE9IjY4MCIgeTE9IjYwIiB4Mj0iNjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjcwMCIgeDE9IjcwMCIgeTE9IjYwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBpZD0iMHBvaW50LWlkIiBjeD0iMTAwIiBjeT0iNDMwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjFwb2ludC1pZCIgY3g9IjE0MCIgY3k9IjQwMCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSIycG9pbnQtaWQiIGN4PSIyMjAiIGN5PSIzNDAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iM3BvaW50LWlkIiBjeD0iMzAwIiBjeT0iMjgwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjRwb2ludC1pZCIgY3g9IjM4MCIgY3k9IjE4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSI1cG9pbnQtaWQiIGN4PSI1MjAiIGN5PSIxMjAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PHRleHQgaWQ9IjIwMHRleHQtaWQiIHg9IjI2MCIgeT0iNTE1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTwvdGV4dD48dGV4dCBpZD0iNDAwdGV4dC1pZCIgeD0iNDYwIiB5PSI1MTUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4yPC90ZXh0Pjx0ZXh0IGlkPSI2MDB0ZXh0LWlkIiB4PSI2NjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjM8L3RleHQ+PHRleHQgaWQ9IjEwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSI0MDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMDwvdGV4dD48dGV4dCBpZD0iMjB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9IjMwNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjIwPC90ZXh0Pjx0ZXh0IGlkPSIzMHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMjA1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzA8L3RleHQ+PHRleHQgaWQ9IjQwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIxMDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij40MDwvdGV4dD48cG9seWxpbmUgcG9pbnRzPSIxMDAsNDMwIDE0MCw0MDAgIDIyMCwzNDAgIDMwMCwyODAgNTIwLDEyMCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiBub25lO3N0cm9rZS13aWR0aDozIi8+PHRleHQgeD0iMjAwIiB5PSI1NDAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwOyBzdHJva2U6IG5vbmU7IGZvbnQtc2l6ZTogMjBweDsiPgogICAgICAgICAgVm9sdW1lKG1MKQogICAgICA8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjE1MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDA7IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyB3cml0aW5nLW1vZGU6IHRiOyI+CiAgICAgICAgICBNYXNzIG9mIHNvbHV0aW9uKGcpCiAgICAgIDwvdGV4dD48dGV4dCB4PSIyMDAiIHk9IjMwIj4KICAgICAgICAgICAgICA8dHNwYW4gc3R5bGU9ImZpbGw6ICMwMDAwMDA7IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyNXB4OyI+R3JhcGggb2YgVm9sdW1lKG1MKSB2cyBNYXNzIG9mIFNvbHV0aW9uKGcpPC90c3Bhbj4KICAgICAgICAgICAgICA8dHNwYW4gZHg9Ii0yNjAiIGR5PSIyMCIgc3R5bGU9ImZpbGw6IGdyZWVuOyBzdHJva2U6IG5vbmU7IGZvbnQtc2l6ZTogMTNweDsiPkRyYXduIEJ5IEJlZGUgQXNvbnllPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD48dGV4dCB4PSI3MjAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6IGdyZWVuOyBzdHJva2U6IG5vbmU7IGZvbnQtc2l6ZTogMjBweDsgd3JpdGluZy1tb2RlOiB0YiI+CiAgICAgICAgIDEgc3F1YXJlIHRvIDIgZyBvbiB5LWF4aXMKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogZ3JlZW47IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyI+CiAgICAgICAgICAgICAgICAgIDEgc3F1YXJlIHRvIDAuMSBtTCBvbiB4LWF4aXMKICAgICAgPC90ZXh0Pjwvc3ZnPg=="
        alt="blog image"
        //   fluid
        //   rounded
      />
      {/* </div> */}
    </div>
  );
};

export default DataQuestion;
