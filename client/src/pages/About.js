import React, { Component } from "react";
import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <div>
        This is some content about the project!
        <Link to="/">
          <h3>See Game Status</h3>
        </Link>
      </div>
    );
  }
}

export default About;
