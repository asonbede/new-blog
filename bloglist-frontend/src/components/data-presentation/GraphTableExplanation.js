import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { Table, Image } from "react-bootstrap";

const GraphTableExplanation = () => {
  return (
    <div style={{ marginTop: 20, width: "100%" }}>
      <h2 className="text-center"> How experimental data is presented</h2>
      <p>
        Data gathered from scientific experiment has to be presented in such a
        way that readers can easily see the overall pattern in the data. Two
        common way of presenting data from experiment are tables and graphs.
      </p>
      <h3 className="text-center">Data Tables</h3>
      <p>
        Table is the organisation of data using rows and columns. An example of
        a data table is the one shown below. The data was collected by a student
        who had conducted an experiment to investigate how changing the the
        temperature of a gase affects its volume when pressure and mass of the
        gas are kept constant.{" "}
      </p>
      <h4 className="text-center"> How data is entered on the data table</h4>
      <ul>
        <li>
          {" "}
          The independent variable is usually entered in the first column{" "}
        </li>
        <li> The dependent variable is typically entered in the last column</li>
        <li> The controlled variables are not include at all</li>
        <li>
          {" "}
          Each table column must have a title and must include the unit of
          measurement
        </li>
      </ul>
      <p>
        In the below table for instance, the temperature(the independent
        variable is entered in the first column), the volume(the dependent
        variable) is entered in the last column while the control
        variables(pressure, mass of gas) were not included.
        <br />
        The table makes it easy to see that the volume increases as the
        temperature increases. Take another look at the data table again
      </p>
      <Table striped bordered hover size="sm" variant="dark" responsive="lg">
        <thead>
          <tr>
            <th title="independent variable">Temperature(K)</th>
            <th title="dependent variable">Volume(mL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20</td>
            <td>60</td>
          </tr>
          <tr>
            <td>40</td>
            <td>120</td>
          </tr>
          <tr>
            <td>60</td>
            <td>180</td>
          </tr>
          <tr>
            <td>80</td>
            <td>240</td>
          </tr>
          <tr>
            <td>85</td>
            <td>220</td>
          </tr>
          <tr>
            <td>100</td>
            <td>300</td>
          </tr>
          <tr>
            <td>115</td>
            <td>370</td>
          </tr>
          <tr>
            <td>120</td>
            <td>360</td>
          </tr>
        </tbody>
      </Table>
      <h3 className="text-center">Graphs</h3>
      <p>
        Graphs is a pictorial representation of data using a cordinate system.
        After data has been tabulated, the next step is usually to plot it in a
        graph. A graph ploted from the above data table is shown below.
      </p>
      <h4>How to plot a graph</h4>
      <ul>
        <li>
          The values of the independent variable should be entered along the
          x-axis(the horizontal axis).
        </li>
        <li>
          The values of the dependent variable should entered along the
          y-axis(the vertical axis).
        </li>
        <li>
          Then find where the two values intercepts on the graph sheet and put a
          mark on this point of interception
        </li>
        <li>The controlled variable are not included. </li>
        <li>
          Then draw a line which passes through the point of interception of the
          x and y values, this line need not connect/join all the ploted points,
          the line should be drawn to fit the data, to show the overall pattern
          of the data, this is called the line of best fit.
        </li>
        <li>
          The axis on your the graph should be labelled (what was measured along
          that axis and the unit it was measured with).
        </li>
        <li>The graph should have a title.</li>
        <li>The graph should have a scale.</li>
      </ul>
      <div>
        <img
          //variant="top"
          style={{
            marginBottom: 5,
            marginRight: 4,
            width: "100%",
            height: "auto",
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0ibXlTVkciIHdpZHRoPSI4NTAiIGhlaWdodD0iNjUwIiBzdHlsZT0ibWFyZ2luOiA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjcwMCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iNjAiIHkxPSI4MCIgeDI9IjcwMCIgeTI9IjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjYwIiB5MT0iMTAwIiB4Mj0iNzAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjYwIiB5MT0iMTIwIiB4Mj0iNzAwIiB5Mj0iMTIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjYwIiB5MT0iMTQwIiB4Mj0iNzAwIiB5Mj0iMTQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjYwIiB5MT0iMTYwIiB4Mj0iNzAwIiB5Mj0iMTYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjYwIiB5MT0iMTgwIiB4Mj0iNzAwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjYwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNzAwIiB5Mj0iMjIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjYwIiB5MT0iMjQwIiB4Mj0iNzAwIiB5Mj0iMjQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iNzAwIiB5Mj0iMjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjYwIiB5MT0iMjgwIiB4Mj0iNzAwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjYwIiB5MT0iMzAwIiB4Mj0iNzAwIiB5Mj0iMzAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjYwIiB5MT0iMzIwIiB4Mj0iNzAwIiB5Mj0iMzIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjYwIiB5MT0iMzQwIiB4Mj0iNzAwIiB5Mj0iMzQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjYwIiB5MT0iMzYwIiB4Mj0iNzAwIiB5Mj0iMzYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjYwIiB5MT0iMzgwIiB4Mj0iNzAwIiB5Mj0iMzgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjYwIiB5MT0iNDAwIiB4Mj0iNzAwIiB5Mj0iNDAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjYwIiB5MT0iNDIwIiB4Mj0iNzAwIiB5Mj0iNDIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjYwIiB5MT0iNDQwIiB4Mj0iNzAwIiB5Mj0iNDQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjYwIiB5MT0iNDYwIiB4Mj0iNzAwIiB5Mj0iNDYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjYwIiB5MT0iNDgwIiB4Mj0iNzAwIiB5Mj0iNDgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjYwIiB5MT0iNTAwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iODAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjEwMCIgeTE9IjYwIiB4Mj0iMTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjEyMCIgeTE9IjYwIiB4Mj0iMTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjE0MCIgeTE9IjYwIiB4Mj0iMTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjE2MCIgeTE9IjYwIiB4Mj0iMTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjE4MCIgeTE9IjYwIiB4Mj0iMTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjIyMCIgeTE9IjYwIiB4Mj0iMjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjI2MCIgeTE9IjYwIiB4Mj0iMjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjI4MCIgeTE9IjYwIiB4Mj0iMjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjMwMCIgeTE9IjYwIiB4Mj0iMzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjMyMCIgeTE9IjYwIiB4Mj0iMzIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjM0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjM2MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjM4MCIgeTE9IjYwIiB4Mj0iMzgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjQwMCIgeTE9IjYwIiB4Mj0iNDAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjQyMCIgeTE9IjYwIiB4Mj0iNDIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjQ0MCIgeTE9IjYwIiB4Mj0iNDQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjQ2MCIgeTE9IjYwIiB4Mj0iNDYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjQ4MCIgeTE9IjYwIiB4Mj0iNDgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjUwMCIgeTE9IjYwIiB4Mj0iNTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUyMCIgeDE9IjUyMCIgeTE9IjYwIiB4Mj0iNTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU0MCIgeDE9IjU0MCIgeTE9IjYwIiB4Mj0iNTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU2MCIgeDE9IjU2MCIgeTE9IjYwIiB4Mj0iNTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU4MCIgeDE9IjU4MCIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwMCIgeDE9IjYwMCIgeTE9IjYwIiB4Mj0iNjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYyMCIgeDE9IjYyMCIgeTE9IjYwIiB4Mj0iNjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY0MCIgeDE9IjY0MCIgeTE9IjYwIiB4Mj0iNjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY2MCIgeDE9IjY2MCIgeTE9IjYwIiB4Mj0iNjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY4MCIgeDE9IjY4MCIgeTE9IjYwIiB4Mj0iNjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjcwMCIgeDE9IjcwMCIgeTE9IjYwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBpZD0iMHBvaW50LWlkIiBjeD0iMTQwIiBjeT0iNDQwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjFwb2ludC1pZCIgY3g9IjIyMCIgY3k9IjM4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSIycG9pbnQtaWQiIGN4PSIzMDAiIGN5PSIzMjAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iM3BvaW50LWlkIiBjeD0iMzgwIiBjeT0iMjYwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjRwb2ludC1pZCIgY3g9IjQwMCIgY3k9IjI4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSI1cG9pbnQtaWQiIGN4PSI0NjAiIGN5PSIyMDAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iNnBvaW50LWlkIiBjeD0iNTIwIiBjeT0iMTMwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9Ijdwb2ludC1pZCIgY3g9IjU0MCIgY3k9IjE0MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48dGV4dCBpZD0iODB0ZXh0LWlkIiB4PSIxNDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjIwPC90ZXh0Pjx0ZXh0IGlkPSIxNjB0ZXh0LWlkIiB4PSIyMjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjQwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LWlkIiB4PSIzMDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjYwPC90ZXh0Pjx0ZXh0IGlkPSIzMjB0ZXh0LWlkIiB4PSIzODAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjgwPC90ZXh0Pjx0ZXh0IGlkPSI0MDB0ZXh0LWlkIiB4PSI0NjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjEwMDwvdGV4dD48dGV4dCBpZD0iNDgwdGV4dC1pZCIgeD0iNTQwIiB5PSI1MTUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjYwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSI0NDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij42MDwvdGV4dD48dGV4dCBpZD0iMTIwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIzODUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjE4MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMzI1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTgwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9IjI2NSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjI0MDwvdGV4dD48dGV4dCBpZD0iMzAwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIyMDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4zMDA8L3RleHQ+PHRleHQgaWQ9IjM2MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMTQ1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzYwPC90ZXh0Pjx0ZXh0IGlkPSI0MjB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9Ijg1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NDIwPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjE0MCw0NDAgMjIwLDM4MCAgMzAwLDMyMCAgMzgwLDI2MCA0NjAsMjAwIDU0MCwxNDAiIHN0eWxlPSJzdHJva2U6IzAwNjYwMDsgZmlsbDogIzMzY2MzMztzdHJva2Utd2lkdGg6MyIvPjxsaW5lIHgxPSI2MCIgeTE9IjUwMCIgeDI9IjE0MCIgeTI9IjQ0MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjxsaW5lIHgxPSI1NDAiIHkxPSIxNDAiIHgyPSI2MjAiIHkyPSI4MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjx0ZXh0IHg9IjIwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7Ij4KICAgICAgICAgIFRlbXBlcmF0dXJlKEspCiAgICAgIDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGI7Ij4KICAgICAgICAgIFZvbHVtZShtTCkKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMzAiPgogICAgICAgICAgICAgIDx0c3BhbiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDI1cHg7Ij5HcmFwaCBvZiBUZW1wZXJhdHVyZShLKSB2cyAgVm9sdW1lKG1MKTwvdHNwYW4+CiAgICAgICAgICAgICAgPHRzcGFuIGR4PSItMjYwIiBkeT0iMjAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDEzcHg7Ij5EcmF3biBCeSBCZWRlIEFzb255ZTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+PHRleHQgeD0iNzIwIiB5PSIxNDAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGIiPgogICAgICAgICAxIHNxdWFyZSB0byAyMCBtTCBvbiB5LWF4aXMKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogZ3JlZW47IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyI+CiAgICAgICAgICAgICAgICAgIDEgc3F1YXJlIHRvIDUgSyBvbiB4LWF4aXMKICAgICAgPC90ZXh0Pjwvc3ZnPg=="
          alt="blog image"
          //   fluid
          //   rounded
        />
      </div>
      <h3 className="text-center">The Scale</h3>
      <p>
        The graph is made up of squares or boxes. <br />
        The value which these squares represent is called the scale.
        <br />
        Choose your scale so that the graph should take up as much of the graph
        paper as possible. <br />
        This can be achieved by taking the following steps:
        <br />
        <ul>
          <li>
            {" "}
            identify the lowest measured x-value and place it on the far left
            side of the paper while the highest x-value should be placed on the
            far right side of the graph paper. In the above graph, the lowest
            measured x value is 20 K and it is placed on the far left side of
            the graph paper while the highest measured x value, 120 K is placed
            on the far right side of the graph paper.
          </li>
          <li>
            {" "}
            Do the same to y-value. The lowest y-value should be placed near the
            bottom of the graph paper while the highest y-value should be placed
            near the top of the paper. In the above graph, the lowest measured y
            value is 60 mL near the bottom of the graph paper while the highest
            measured y value, 360 K is placed near the top of the paper..
          </li>
        </ul>
        In the above graph for instance, 1 square represents 5 units of
        temperature on the x-axis, this is the scale on the x -axis while 1
        square represents 20 units of volume on the y-axis, this is the scale on
        the y-axis.
        <br />
        This scale will space-out the lowest and highest x, y values and
        therefore, make the graph take up as much graph paper as possible.{" "}
        <br />
        For this graph, the x and y axis have different scales, but they can
        have similar scales as well.
        <br />
        However, the scale along any axis must be consistent, that is 1 square
        must represents 5 units of temperature along the entire the x-axis, and
        1 square must represents 20 units of volume along the entire y-axis,{" "}
      </p>
      <h3 className="text-center">Reading information from the graph.</h3>
      in addition to enabling us to see the overall pattern in the experimental
      data, graph can also enable us to obtain information as well. Information
      can be obtained from the graph through interpolation and extrapolation
      <h4 className="text-center">Interpolation</h4>
      <div>
        <img
          //variant="top"
          style={{
            marginBottom: 5,
            marginRight: 4,
            width: "100%",
            height: "auto",
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0ibXlTVkciIHdpZHRoPSI4NTAiIGhlaWdodD0iNjUwIiBzdHlsZT0ibWFyZ2luOiA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjcwMCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iNjAiIHkxPSI4MCIgeDI9IjcwMCIgeTI9IjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjYwIiB5MT0iMTAwIiB4Mj0iNzAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjYwIiB5MT0iMTIwIiB4Mj0iNzAwIiB5Mj0iMTIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjYwIiB5MT0iMTQwIiB4Mj0iNzAwIiB5Mj0iMTQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjYwIiB5MT0iMTYwIiB4Mj0iNzAwIiB5Mj0iMTYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjYwIiB5MT0iMTgwIiB4Mj0iNzAwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjYwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNzAwIiB5Mj0iMjIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjYwIiB5MT0iMjQwIiB4Mj0iNzAwIiB5Mj0iMjQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iNzAwIiB5Mj0iMjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjYwIiB5MT0iMjgwIiB4Mj0iNzAwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjYwIiB5MT0iMzAwIiB4Mj0iNzAwIiB5Mj0iMzAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjYwIiB5MT0iMzIwIiB4Mj0iNzAwIiB5Mj0iMzIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjYwIiB5MT0iMzQwIiB4Mj0iNzAwIiB5Mj0iMzQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjYwIiB5MT0iMzYwIiB4Mj0iNzAwIiB5Mj0iMzYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjYwIiB5MT0iMzgwIiB4Mj0iNzAwIiB5Mj0iMzgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjYwIiB5MT0iNDAwIiB4Mj0iNzAwIiB5Mj0iNDAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjYwIiB5MT0iNDIwIiB4Mj0iNzAwIiB5Mj0iNDIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjYwIiB5MT0iNDQwIiB4Mj0iNzAwIiB5Mj0iNDQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjYwIiB5MT0iNDYwIiB4Mj0iNzAwIiB5Mj0iNDYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjYwIiB5MT0iNDgwIiB4Mj0iNzAwIiB5Mj0iNDgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjYwIiB5MT0iNTAwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iODAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjEwMCIgeTE9IjYwIiB4Mj0iMTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjEyMCIgeTE9IjYwIiB4Mj0iMTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjE0MCIgeTE9IjYwIiB4Mj0iMTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjE2MCIgeTE9IjYwIiB4Mj0iMTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjE4MCIgeTE9IjYwIiB4Mj0iMTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjIyMCIgeTE9IjYwIiB4Mj0iMjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjI2MCIgeTE9IjYwIiB4Mj0iMjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjI4MCIgeTE9IjYwIiB4Mj0iMjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjMwMCIgeTE9IjYwIiB4Mj0iMzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjMyMCIgeTE9IjYwIiB4Mj0iMzIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjM0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjM2MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjM4MCIgeTE9IjYwIiB4Mj0iMzgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjQwMCIgeTE9IjYwIiB4Mj0iNDAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjQyMCIgeTE9IjYwIiB4Mj0iNDIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjQ0MCIgeTE9IjYwIiB4Mj0iNDQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjQ2MCIgeTE9IjYwIiB4Mj0iNDYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjQ4MCIgeTE9IjYwIiB4Mj0iNDgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjUwMCIgeTE9IjYwIiB4Mj0iNTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUyMCIgeDE9IjUyMCIgeTE9IjYwIiB4Mj0iNTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU0MCIgeDE9IjU0MCIgeTE9IjYwIiB4Mj0iNTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU2MCIgeDE9IjU2MCIgeTE9IjYwIiB4Mj0iNTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU4MCIgeDE9IjU4MCIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwMCIgeDE9IjYwMCIgeTE9IjYwIiB4Mj0iNjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYyMCIgeDE9IjYyMCIgeTE9IjYwIiB4Mj0iNjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY0MCIgeDE9IjY0MCIgeTE9IjYwIiB4Mj0iNjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY2MCIgeDE9IjY2MCIgeTE9IjYwIiB4Mj0iNjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY4MCIgeDE9IjY4MCIgeTE9IjYwIiB4Mj0iNjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjcwMCIgeDE9IjcwMCIgeTE9IjYwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBpZD0iMHBvaW50LWlkIiBjeD0iMTQwIiBjeT0iNDQwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjFwb2ludC1pZCIgY3g9IjIyMCIgY3k9IjM4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSIycG9pbnQtaWQiIGN4PSIzMDAiIGN5PSIzMjAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iM3BvaW50LWlkIiBjeD0iMzgwIiBjeT0iMjYwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjRwb2ludC1pZCIgY3g9IjQwMCIgY3k9IjI4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSI1cG9pbnQtaWQiIGN4PSI0NjAiIGN5PSIyMDAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iNnBvaW50LWlkIiBjeD0iNTIwIiBjeT0iMTMwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9Ijdwb2ludC1pZCIgY3g9IjU0MCIgY3k9IjE0MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48dGV4dCBpZD0iODB0ZXh0LWlkIiB4PSIxNDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjIwPC90ZXh0Pjx0ZXh0IGlkPSIxNjB0ZXh0LWlkIiB4PSIyMjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjQwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LWlkIiB4PSIzMDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjYwPC90ZXh0Pjx0ZXh0IGlkPSIzMjB0ZXh0LWlkIiB4PSIzODAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjgwPC90ZXh0Pjx0ZXh0IGlkPSI0MDB0ZXh0LWlkIiB4PSI0NjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjEwMDwvdGV4dD48dGV4dCBpZD0iNDgwdGV4dC1pZCIgeD0iNTQwIiB5PSI1MTUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjYwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSI0NDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij42MDwvdGV4dD48dGV4dCBpZD0iMTIwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIzODUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjE4MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMzI1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTgwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9IjI2NSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjI0MDwvdGV4dD48dGV4dCBpZD0iMzAwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIyMDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4zMDA8L3RleHQ+PHRleHQgaWQ9IjM2MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMTQ1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzYwPC90ZXh0Pjx0ZXh0IGlkPSI0MjB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9Ijg1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NDIwPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjE0MCw0NDAgMjIwLDM4MCAgMzAwLDMyMCAgMzgwLDI2MCA0NjAsMjAwIDU0MCwxNDAiIHN0eWxlPSJzdHJva2U6IzAwNjYwMDsgZmlsbDogIzMzY2MzMztzdHJva2Utd2lkdGg6MyIvPjxsaW5lIHgxPSI2MCIgeTE9IjUwMCIgeDI9IjE0MCIgeTI9IjQ0MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjxsaW5lIHgxPSI1NDAiIHkxPSIxNDAiIHgyPSI2MjAiIHkyPSI4MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjx0ZXh0IHg9IjIwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7Ij4KICAgICAgICAgIFRlbXBlcmF0dXJlKEspCiAgICAgIDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGI7Ij4KICAgICAgICAgIFZvbHVtZShtTCkKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMzAiPgogICAgICAgICAgICAgIDx0c3BhbiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDI1cHg7Ij5HcmFwaCBvZiBUZW1wZXJhdHVyZShLKSB2cyAgVm9sdW1lKG1MKTwvdHNwYW4+CiAgICAgICAgICAgICAgPHRzcGFuIGR4PSItMjYwIiBkeT0iMjAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDEzcHg7Ij5EcmF3biBCeSBCZWRlIEFzb255ZTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+PHRleHQgeD0iNzIwIiB5PSIxNDAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGIiPgogICAgICAgICAxIHNxdWFyZSB0byAyMCBtTCBvbiB5LWF4aXMKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogZ3JlZW47IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyI+CiAgICAgICAgICAgICAgICAgIDEgc3F1YXJlIHRvIDUgSyBvbiB4LWF4aXMKICAgICAgPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjUwMCw1MDAgNTAwLDE3MCAgNjAsMTcwIiBzdHlsZT0ic3Ryb2tlOiMwMDY2MDA7ZmlsbDpub25lO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSI+PHRpdGxlPmludGVycG9sYXRvbjwvdGl0bGU+PC9wb2x5bGluZT48L3N2Zz4="
          alt="blog image"
          //   fluid
          //   rounded
        />
      </div>
      <p>
        {" "}
        Suppose we are interested in knowing the volume at a temperature of 110
        K. We can't get that information from the data table. 110 K is not in
        the data table. So to get the information, locate where 110 K lies on
        the x-axis. 110 K lies between 100 K and 120 K. Next, we trace as shown
        above until we arrieve at 330 mL. So the volume at 110 K is 330 mL. This
        is called interpolation. Although 110 K is not in the data table, it is
        still within the range of the plotted points on the x-axis which is
        between 20K to 120 K.
        <br />{" "}
        <strong>
          Obtaining information from a graph by tracing using the range of The
          plotted data points is called interpolation.
        </strong>
      </p>
      <h4 className="text-center">Extrapolation</h4>
      <div>
        <img
          //variant="top"
          style={{
            marginBottom: 5,
            marginRight: 4,
            width: "100%",
            height: "auto",
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0ibXlTVkciIHdpZHRoPSI4NTAiIGhlaWdodD0iNjUwIiBzdHlsZT0ibWFyZ2luOiA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjcwMCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iNjAiIHkxPSI4MCIgeDI9IjcwMCIgeTI9IjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjYwIiB5MT0iMTAwIiB4Mj0iNzAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjYwIiB5MT0iMTIwIiB4Mj0iNzAwIiB5Mj0iMTIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjYwIiB5MT0iMTQwIiB4Mj0iNzAwIiB5Mj0iMTQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjYwIiB5MT0iMTYwIiB4Mj0iNzAwIiB5Mj0iMTYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjYwIiB5MT0iMTgwIiB4Mj0iNzAwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjYwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNzAwIiB5Mj0iMjIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjYwIiB5MT0iMjQwIiB4Mj0iNzAwIiB5Mj0iMjQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iNzAwIiB5Mj0iMjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjYwIiB5MT0iMjgwIiB4Mj0iNzAwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjYwIiB5MT0iMzAwIiB4Mj0iNzAwIiB5Mj0iMzAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjYwIiB5MT0iMzIwIiB4Mj0iNzAwIiB5Mj0iMzIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjYwIiB5MT0iMzQwIiB4Mj0iNzAwIiB5Mj0iMzQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjYwIiB5MT0iMzYwIiB4Mj0iNzAwIiB5Mj0iMzYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjYwIiB5MT0iMzgwIiB4Mj0iNzAwIiB5Mj0iMzgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjYwIiB5MT0iNDAwIiB4Mj0iNzAwIiB5Mj0iNDAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjYwIiB5MT0iNDIwIiB4Mj0iNzAwIiB5Mj0iNDIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjYwIiB5MT0iNDQwIiB4Mj0iNzAwIiB5Mj0iNDQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjYwIiB5MT0iNDYwIiB4Mj0iNzAwIiB5Mj0iNDYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjYwIiB5MT0iNDgwIiB4Mj0iNzAwIiB5Mj0iNDgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjYwIiB5MT0iNTAwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iODAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjEwMCIgeTE9IjYwIiB4Mj0iMTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjEyMCIgeTE9IjYwIiB4Mj0iMTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjE0MCIgeTE9IjYwIiB4Mj0iMTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjE2MCIgeTE9IjYwIiB4Mj0iMTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjE4MCIgeTE9IjYwIiB4Mj0iMTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjIyMCIgeTE9IjYwIiB4Mj0iMjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjI2MCIgeTE9IjYwIiB4Mj0iMjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjI4MCIgeTE9IjYwIiB4Mj0iMjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjMwMCIgeTE9IjYwIiB4Mj0iMzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjMyMCIgeTE9IjYwIiB4Mj0iMzIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjM0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjM2MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjM4MCIgeTE9IjYwIiB4Mj0iMzgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjQwMCIgeTE9IjYwIiB4Mj0iNDAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjQyMCIgeTE9IjYwIiB4Mj0iNDIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjQ0MCIgeTE9IjYwIiB4Mj0iNDQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjQ2MCIgeTE9IjYwIiB4Mj0iNDYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjQ4MCIgeTE9IjYwIiB4Mj0iNDgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjUwMCIgeTE9IjYwIiB4Mj0iNTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUyMCIgeDE9IjUyMCIgeTE9IjYwIiB4Mj0iNTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU0MCIgeDE9IjU0MCIgeTE9IjYwIiB4Mj0iNTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU2MCIgeDE9IjU2MCIgeTE9IjYwIiB4Mj0iNTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU4MCIgeDE9IjU4MCIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwMCIgeDE9IjYwMCIgeTE9IjYwIiB4Mj0iNjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYyMCIgeDE9IjYyMCIgeTE9IjYwIiB4Mj0iNjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY0MCIgeDE9IjY0MCIgeTE9IjYwIiB4Mj0iNjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY2MCIgeDE9IjY2MCIgeTE9IjYwIiB4Mj0iNjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY4MCIgeDE9IjY4MCIgeTE9IjYwIiB4Mj0iNjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjcwMCIgeDE9IjcwMCIgeTE9IjYwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBpZD0iMHBvaW50LWlkIiBjeD0iMTQwIiBjeT0iNDQwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjFwb2ludC1pZCIgY3g9IjIyMCIgY3k9IjM4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSIycG9pbnQtaWQiIGN4PSIzMDAiIGN5PSIzMjAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iM3BvaW50LWlkIiBjeD0iMzgwIiBjeT0iMjYwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjRwb2ludC1pZCIgY3g9IjQwMCIgY3k9IjI4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSI1cG9pbnQtaWQiIGN4PSI0NjAiIGN5PSIyMDAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iNnBvaW50LWlkIiBjeD0iNTIwIiBjeT0iMTMwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9Ijdwb2ludC1pZCIgY3g9IjU0MCIgY3k9IjE0MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48dGV4dCBpZD0iODB0ZXh0LWlkIiB4PSIxNDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjIwPC90ZXh0Pjx0ZXh0IGlkPSIxNjB0ZXh0LWlkIiB4PSIyMjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjQwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LWlkIiB4PSIzMDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjYwPC90ZXh0Pjx0ZXh0IGlkPSIzMjB0ZXh0LWlkIiB4PSIzODAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjgwPC90ZXh0Pjx0ZXh0IGlkPSI0MDB0ZXh0LWlkIiB4PSI0NjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjEwMDwvdGV4dD48dGV4dCBpZD0iNDgwdGV4dC1pZCIgeD0iNTQwIiB5PSI1MTUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjYwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSI0NDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij42MDwvdGV4dD48dGV4dCBpZD0iMTIwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIzODUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjE4MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMzI1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTgwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9IjI2NSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjI0MDwvdGV4dD48dGV4dCBpZD0iMzAwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIyMDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4zMDA8L3RleHQ+PHRleHQgaWQ9IjM2MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMTQ1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzYwPC90ZXh0Pjx0ZXh0IGlkPSI0MjB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9Ijg1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NDIwPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjE0MCw0NDAgMjIwLDM4MCAgMzAwLDMyMCAgMzgwLDI2MCA0NjAsMjAwIDU0MCwxNDAiIHN0eWxlPSJzdHJva2U6IzAwNjYwMDsgZmlsbDogIzMzY2MzMztzdHJva2Utd2lkdGg6MyIvPjxsaW5lIHgxPSI2MCIgeTE9IjUwMCIgeDI9IjE0MCIgeTI9IjQ0MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjxsaW5lIHgxPSI1NDAiIHkxPSIxNDAiIHgyPSI2MjAiIHkyPSI4MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjx0ZXh0IHg9IjIwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7Ij4KICAgICAgICAgIFRlbXBlcmF0dXJlKEspCiAgICAgIDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGI7Ij4KICAgICAgICAgIFZvbHVtZShtTCkKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMzAiPgogICAgICAgICAgICAgIDx0c3BhbiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDI1cHg7Ij5HcmFwaCBvZiBUZW1wZXJhdHVyZShLKSB2cyAgVm9sdW1lKG1MKTwvdHNwYW4+CiAgICAgICAgICAgICAgPHRzcGFuIGR4PSItMjYwIiBkeT0iMjAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDEzcHg7Ij5EcmF3biBCeSBCZWRlIEFzb255ZTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+PHRleHQgeD0iNzIwIiB5PSIxNDAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGIiPgogICAgICAgICAxIHNxdWFyZSB0byAyMCBtTCBvbiB5LWF4aXMKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogZ3JlZW47IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyI+CiAgICAgICAgICAgICAgICAgIDEgc3F1YXJlIHRvIDUgSyBvbiB4LWF4aXMKICAgICAgPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjU4MCw1MDAgNTgwLDExMCAgNjAsMTEwIiBzdHlsZT0ic3Ryb2tlOiMwMDY2MDA7ZmlsbDpub25lO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSI+IDx0aXRsZT5leHRlcnBvbGF0b248L3RpdGxlPjwvcG9seWxpbmU+PC9zdmc+"
          alt="blog image"
          //   fluid
          //   rounded
        />
      </div>
      <p>
        {" "}
        Suppose we are interested in knowing the volume at a temperature of 130
        K. We can't get that information from the data table also. 130 K is not
        in the data table. So to get the information, locate where 130 K lies on
        the x-axis. 130 lies after 120 K. But the best fit line ends at 120 K.
        <br />
        So we have to extend the line to match the pattern already drawn. Then
        we trace as we did previously, first to the connecting line and then to
        the y axis. So the volume at 130 K is 390 mL.
        <strong>
          {" "}
          Obtaining information from a graph by extending the best fit line
          outside the plotted data points is called extrapolation.
        </strong>
        Notice that when the best fit line is extended downwards it passes
        through the origin and can enable to obtain the volume at 0 k.
      </p>
      <h4 className="text-center">Slope</h4>
      <img
        //variant="top"
        style={{
          marginBottom: 5,
          marginRight: 4,
          width: "100%",
          height: "auto",
        }}
        src="data:image/svg+xml;base64,PHN2ZyBpZD0ibXlTVkciIHdpZHRoPSI4NTAiIGhlaWdodD0iNjUwIiBzdHlsZT0ibWFyZ2luOiA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjcwMCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iNjAiIHkxPSI4MCIgeDI9IjcwMCIgeTI9IjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjYwIiB5MT0iMTAwIiB4Mj0iNzAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjYwIiB5MT0iMTIwIiB4Mj0iNzAwIiB5Mj0iMTIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjYwIiB5MT0iMTQwIiB4Mj0iNzAwIiB5Mj0iMTQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjYwIiB5MT0iMTYwIiB4Mj0iNzAwIiB5Mj0iMTYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjYwIiB5MT0iMTgwIiB4Mj0iNzAwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjYwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNzAwIiB5Mj0iMjIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjYwIiB5MT0iMjQwIiB4Mj0iNzAwIiB5Mj0iMjQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iNzAwIiB5Mj0iMjYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjYwIiB5MT0iMjgwIiB4Mj0iNzAwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjYwIiB5MT0iMzAwIiB4Mj0iNzAwIiB5Mj0iMzAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjYwIiB5MT0iMzIwIiB4Mj0iNzAwIiB5Mj0iMzIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjYwIiB5MT0iMzQwIiB4Mj0iNzAwIiB5Mj0iMzQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjYwIiB5MT0iMzYwIiB4Mj0iNzAwIiB5Mj0iMzYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjYwIiB5MT0iMzgwIiB4Mj0iNzAwIiB5Mj0iMzgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjYwIiB5MT0iNDAwIiB4Mj0iNzAwIiB5Mj0iNDAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjYwIiB5MT0iNDIwIiB4Mj0iNzAwIiB5Mj0iNDIwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjYwIiB5MT0iNDQwIiB4Mj0iNzAwIiB5Mj0iNDQwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjYwIiB5MT0iNDYwIiB4Mj0iNzAwIiB5Mj0iNDYwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjYwIiB5MT0iNDgwIiB4Mj0iNzAwIiB5Mj0iNDgwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjYwIiB5MT0iNTAwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwIiB4MT0iNjAiIHkxPSI2MCIgeDI9IjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjgwIiB4MT0iODAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEwMCIgeDE9IjEwMCIgeTE9IjYwIiB4Mj0iMTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjEyMCIgeDE9IjEyMCIgeTE9IjYwIiB4Mj0iMTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE0MCIgeDE9IjE0MCIgeTE9IjYwIiB4Mj0iMTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE2MCIgeDE9IjE2MCIgeTE9IjYwIiB4Mj0iMTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjE4MCIgeDE9IjE4MCIgeTE9IjYwIiB4Mj0iMTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIwMCIgeDE9IjIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjIyMCIgeDE9IjIyMCIgeTE9IjYwIiB4Mj0iMjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI0MCIgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI2MCIgeDE9IjI2MCIgeTE9IjYwIiB4Mj0iMjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjI4MCIgeDE9IjI4MCIgeTE9IjYwIiB4Mj0iMjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMwMCIgeDE9IjMwMCIgeTE9IjYwIiB4Mj0iMzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjMyMCIgeDE9IjMyMCIgeTE9IjYwIiB4Mj0iMzIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM0MCIgeDE9IjM0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM2MCIgeDE9IjM2MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjM4MCIgeDE9IjM4MCIgeTE9IjYwIiB4Mj0iMzgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQwMCIgeDE9IjQwMCIgeTE9IjYwIiB4Mj0iNDAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQyMCIgeDE9IjQyMCIgeTE9IjYwIiB4Mj0iNDIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ0MCIgeDE9IjQ0MCIgeTE9IjYwIiB4Mj0iNDQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ2MCIgeDE9IjQ2MCIgeTE9IjYwIiB4Mj0iNDYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjQ4MCIgeDE9IjQ4MCIgeTE9IjYwIiB4Mj0iNDgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUwMCIgeDE9IjUwMCIgeTE9IjYwIiB4Mj0iNTAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjUyMCIgeDE9IjUyMCIgeTE9IjYwIiB4Mj0iNTIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU0MCIgeDE9IjU0MCIgeTE9IjYwIiB4Mj0iNTQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU2MCIgeDE9IjU2MCIgeTE9IjYwIiB4Mj0iNTYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjU4MCIgeDE9IjU4MCIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYwMCIgeDE9IjYwMCIgeTE9IjYwIiB4Mj0iNjAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjYyMCIgeDE9IjYyMCIgeTE9IjYwIiB4Mj0iNjIwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY0MCIgeDE9IjY0MCIgeTE9IjYwIiB4Mj0iNjQwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY2MCIgeDE9IjY2MCIgeTE9IjYwIiB4Mj0iNjYwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjY4MCIgeDE9IjY4MCIgeTE9IjYwIiB4Mj0iNjgwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGxpbmUgaWQ9IjcwMCIgeDE9IjcwMCIgeTE9IjYwIiB4Mj0iNzAwIiB5Mj0iNTAwIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBpZD0iMHBvaW50LWlkIiBjeD0iMTQwIiBjeT0iNDQwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjFwb2ludC1pZCIgY3g9IjIyMCIgY3k9IjM4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSIycG9pbnQtaWQiIGN4PSIzMDAiIGN5PSIzMjAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iM3BvaW50LWlkIiBjeD0iMzgwIiBjeT0iMjYwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9IjRwb2ludC1pZCIgY3g9IjQwMCIgY3k9IjI4MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48Y2lyY2xlIGlkPSI1cG9pbnQtaWQiIGN4PSI0NjAiIGN5PSIyMDAiIHI9IjUiIHN0cm9rZT0icmVkIiBmaWxsPSJwaW5rIi8+PGNpcmNsZSBpZD0iNnBvaW50LWlkIiBjeD0iNTIwIiBjeT0iMTMwIiByPSI1IiBzdHJva2U9InJlZCIgZmlsbD0icGluayIvPjxjaXJjbGUgaWQ9Ijdwb2ludC1pZCIgY3g9IjU0MCIgY3k9IjE0MCIgcj0iNSIgc3Ryb2tlPSJyZWQiIGZpbGw9InBpbmsiLz48dGV4dCBpZD0iODB0ZXh0LWlkIiB4PSIxNDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjIwPC90ZXh0Pjx0ZXh0IGlkPSIxNjB0ZXh0LWlkIiB4PSIyMjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjQwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LWlkIiB4PSIzMDAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjYwPC90ZXh0Pjx0ZXh0IGlkPSIzMjB0ZXh0LWlkIiB4PSIzODAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjgwPC90ZXh0Pjx0ZXh0IGlkPSI0MDB0ZXh0LWlkIiB4PSI0NjAiIHk9IjUxNSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjEwMDwvdGV4dD48dGV4dCBpZD0iNDgwdGV4dC1pZCIgeD0iNTQwIiB5PSI1MTUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjYwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSI0NDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij42MDwvdGV4dD48dGV4dCBpZD0iMTIwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIzODUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMjA8L3RleHQ+PHRleHQgaWQ9IjE4MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMzI1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTgwPC90ZXh0Pjx0ZXh0IGlkPSIyNDB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9IjI2NSIgc3Ryb2tlPSJyZWQiIGZpbGw9ImJsYWNrIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjI0MDwvdGV4dD48dGV4dCBpZD0iMzAwdGV4dC15LWF4aXMtaWQiIHg9IjQwIiB5PSIyMDUiIHN0cm9rZT0icmVkIiBmaWxsPSJibGFjayIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4zMDA8L3RleHQ+PHRleHQgaWQ9IjM2MHRleHQteS1heGlzLWlkIiB4PSI0MCIgeT0iMTQ1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzYwPC90ZXh0Pjx0ZXh0IGlkPSI0MjB0ZXh0LXktYXhpcy1pZCIgeD0iNDAiIHk9Ijg1IiBzdHJva2U9InJlZCIgZmlsbD0iYmxhY2siIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NDIwPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjE0MCw0NDAgMjIwLDM4MCAgMzAwLDMyMCAgMzgwLDI2MCA0NjAsMjAwIDU0MCwxNDAiIHN0eWxlPSJzdHJva2U6IzAwNjYwMDsgZmlsbDogIzMzY2MzMztzdHJva2Utd2lkdGg6MyIvPjxsaW5lIHgxPSI2MCIgeTE9IjUwMCIgeDI9IjE0MCIgeTI9IjQ0MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjxsaW5lIHgxPSI1NDAiIHkxPSIxNDAiIHgyPSI2MjAiIHkyPSI4MCIgc3R5bGU9InN0cm9rZTojMDA2NjAwOyBmaWxsOiAjMzNjYzMzO3N0cm9rZS13aWR0aDozO3N0cm9rZS1kYXNoYXJyYXk6MTAgNSIvPjx0ZXh0IHg9IjIwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7Ij4KICAgICAgICAgIFRlbXBlcmF0dXJlKEspCiAgICAgIDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGI7Ij4KICAgICAgICAgIFZvbHVtZShtTCkKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMzAiPgogICAgICAgICAgICAgIDx0c3BhbiBzdHlsZT0iZmlsbDogIzAwMDAwMDsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDI1cHg7Ij5HcmFwaCBvZiBUZW1wZXJhdHVyZShLKSB2cyAgVm9sdW1lKG1MKTwvdHNwYW4+CiAgICAgICAgICAgICAgPHRzcGFuIGR4PSItMjYwIiBkeT0iMjAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDEzcHg7Ij5EcmF3biBCeSBCZWRlIEFzb255ZTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+PHRleHQgeD0iNzIwIiB5PSIxNDAiIHN0eWxlPSJmaWxsOiBncmVlbjsgc3Ryb2tlOiBub25lOyBmb250LXNpemU6IDIwcHg7IHdyaXRpbmctbW9kZTogdGIiPgogICAgICAgICAxIHNxdWFyZSB0byAyMCBtTCBvbiB5LWF4aXMKICAgICAgPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNTQwIiBzdHlsZT0iZmlsbDogZ3JlZW47IHN0cm9rZTogbm9uZTsgZm9udC1zaXplOiAyMHB4OyI+CiAgICAgICAgICAgICAgICAgIDEgc3F1YXJlIHRvIDUgSyBvbiB4LWF4aXMKICAgICAgPC90ZXh0Pjxwb2x5bGluZSBwb2ludHM9IjIyMCwzODAgNDYwLDM4MCAgNDYwLDIwMCIgc3R5bGU9InN0cm9rZTojMDA2NjAwO2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MyIvPjwvc3ZnPg=="
        alt="blog image"
        //   fluid
        //   rounded
      />
      <p>
        <h5 className="text-center">
          {" "}
          How to find the slope of a graph and what the slope represents
        </h5>
        The slope reveals the rate at which one parameter is undergoing change
        when compared to another parameter.
        <br />
        For a straightline graph such as the one above, the slope is constant
        for the entire lie and therefore, can be calculated from any section of
        the graph.
        <br />
        The slope of a line is defined as the rise (change in vertical position)
        divided by the run (change in horizontal position).
        <br />
        On the contrary, the slope varies along the line for a non-linear graph
        and to determine it at any point, we have to use the data at that point.
        <br />
        The followig steps can be used to determine the slope of a straightline
        graph:
        <ul>
          <li>
            Identify two points on the best fit line, call them points A and
            point B, or what ever you want to call them.
          </li>
          <li>
            Identify the x and y coordinates of those points. In the above
            graph, the x and y coordinates of point A are x1=40 , y1=120 While
            the x and y coordinates of point B are x2=100, y2=300
          </li>
          <li>
            {" "}
            The slope can be calculated using the formula: (y2-y1)/(x2-y2), that
            is, increase in y/increase in x
          </li>
          <li>
            In the graph above, this evaluates to: (300-120)mL/(100-40)K = 3
            mL/K
          </li>
        </ul>
        So the slope is 3 mL/K. What does this mean? I told you eailer that the
        slope is a measure of how one variable is changing when compared to the
        other. In this case, therefore, the volume is changing 3 times when
        compared to the temperature. This means that if we know the slope and
        one variable we can easily calculate the other variable without even
        doing interpolation or extrapolation.
        <br />
        Let us try it out. if 1 K is equivalent to 3 mL, therefore 110 K will be
        110 * 3 = 330 mL, which agrees with what we obtained earlier by
        interpolation.
        <br />
        again 130 K will be equivalent to 130 * 3 = 390 mL, which also agrees
        with what we obtained earlier through extrapolation. It means that with
        the slope, any variable is within our reach. This is very useful.
        Suppose we want to predict the volume when the temperature is five
        million Kelvins(5000000 K). We can extend the best fit line and
        extrapolate. This will work but very inconvenient since a lot of paper
        time, energy space will be consumed. Using the slope we can easily do
        5000000 K * 3 mL/K = 15000000 mL.
      </p>
    </div>
  );
};

export default GraphTableExplanation;
