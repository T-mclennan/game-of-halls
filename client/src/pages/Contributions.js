import React, { Component } from "react";
import { Container } from "reactstrap";

export class Contributions extends Component {
  render() {
    return (
      <Container>
        <div className="about">
          <div className="title">
            <h1>Students can help!</h1>
          </div>
          <div style={{ marginLeft: "15rem" }}>
            <p>
              You can participate in helping the building meet it's energy
              goals.{" "}
            </p>
            <ul>
              <li>Turn off lights when you leave the room.</li>
              <li>Close any windows or doors that are letting heat out.</li>
              <li>Be energy conscious in your behavior.</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contributions;
