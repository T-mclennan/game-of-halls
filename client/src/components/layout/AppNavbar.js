import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <h1 className="navTitle">Game Of Halls</h1>
        </Link>
      </div>
    );
  }
}

const navStyle = {
  color: "#fff",
  // textAlign: "center",
  padding: "1rem 1.6rem",
  background: "#152331",
  background: "linear-gradient(45deg, #000000, #152331)"
  // border: "1px solid #cccccc"
};

export default AppNavbar;
