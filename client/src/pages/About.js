import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export class About extends Component {
  render() {
    return (
      <Container>
        <div className="about">
          <div className="title">
            <h1>Real Time Energy Analysis:</h1>
          </div>

          <p>
            Our project aims to engage students in energy aware practices, while
            also recording feedback from students on how effective energy use
            feels.{" "}
          </p>
          <p>
            We uses historic energy use data to create a model and projection of
            what the energy usage should be. When referenced with real time
            usage data we can rate if a building is currently over or under the
            expected. We decided to make a real-time competition between to
            improve the score
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
