import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //We would pass the specific data in as a prop from the parent 'Landing.js' component
    };
  }
  render() {
    return (
      <Container>
        <div className="title">
          <h1>Wellmen Hall:</h1>
        </div>
        <div className="details">
          <h3>Status: 2nd place</h3>
          <h3>Projected energy usage: 974</h3>
          <h3>Current energy usage: 1,100</h3>
          <h3>Your team is doing pretty well! Almost on the average.</h3>
          <Link style={{ margin: "2rem" }} to="/contributions">
            <h3>See how you can help improve the buiding's efficiency</h3>
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
