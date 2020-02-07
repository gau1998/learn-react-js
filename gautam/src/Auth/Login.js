import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChange}
          name="username"
          placeholder="Username"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={this.onChange}
          name="password"
          placeholder="password"
        />
        <br />
        <br />
        <button onClick={() => this.login()}>login</button>
      </div>
    );
  }
}

export default Login;
