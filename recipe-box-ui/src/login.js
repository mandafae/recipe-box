import React from "react";
import "./App.css";

export default class Login extends React.Component {
  handleSubmit() {
    console.log("Booyah");
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text"></input>
            </label>
            <label>
              Password:
              <input type="password"></input>
            </label>
            <input type="submit"></input>
          </form>
          Or browse as guest...
        </div>
      </div>
    );
  }
}
