import React from "react";
// import { eventNames } from "cluster";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
      // password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      return this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      // ! How is this working
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
