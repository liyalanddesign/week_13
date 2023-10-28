// create react nav component
import React, { Component } from "react";
import "./Nav.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation_container">
          <div className="logo">Week 13</div>
          <div className="nav">
            <div className="links-container">
              <a href="#" className="link active">
                Home
              </a>
              <a href="SignIn" className="link">
                Login
              </a>
              <a href="SignUp" className="link">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
