import Rreact, { Component } from "react";

import "./LoginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      // Login Form
      <div className="form">
        <div className="form_inner">
          {/* Header for Form with H3 tag */}
          <div className="form_header">
            <h3>Log In</h3>
          </div>
          {/* Form Body */}
          <div className="form_dody">
            {/* 1st Row for login input */}
            <div className="row">
              <label htmlFor="login">Enter your Login</label>
              <input
                id="login"
                type="text"
                className="input-login"
                placeholder="login or username"
              />
            </div>
            {/* 2nd Row fro password input */}
            <div className="row">
              <label htmlFor="pass">Enter your password</label>
              <input
                id="pass"
                type="password"
                className="input-password"
                placeholder="password"
              />
            </div>
            <div className="row">
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
