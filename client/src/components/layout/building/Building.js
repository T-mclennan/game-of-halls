import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export class Building extends Component {
  render() {
    return (
      <Container>
        <div className="title">
          {" "}
          <h1>Building 1:</h1>
        </div>
        <div className="details">
          <h3>Status: 3rd place</h3>
          <h3>Projected energy usage: 1,240</h3>
          <h3>Current energy usage: 1,440</h3>
          <h3>This building could use improvement</h3>
          <Link style={{ margin: "2rem" }} to="/contributions">
            <h3>See how you can help the team</h3>
          </Link>

          <Link style={{ margin: "2rem" }} to="/input">
            <h3>Provide feedback on current heating level!</h3>
          </Link>
        </div>
      </Container>
    );
  }
}

export default Building;
