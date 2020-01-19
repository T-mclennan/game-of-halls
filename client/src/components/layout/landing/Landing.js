import React, { Component } from "react";
import { Card } from "reactstrap";
import "../../../App.css";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Card body className="dataCard" style={cardStyle}></Card>
      </div>
    );
  }
}

const cardStyle = {
  float: "none",
  marginTop: "2.5rem",
  width: "50rem",
  boxShadow: "0 19px 18px",
  justifyContent: "center",
  fontSize: "1.3rem",
  padding: "1rem",
  marginBottom: "10rem"
};

export default Landing;
