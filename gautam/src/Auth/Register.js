import React, { Component } from "react";

class Register extends Component {
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
          name="email"
          placeholder="email id"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={this.onChange}
          name="phone"
          placeholder="mobile no"
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
        <input
          type="text"
          onChange={this.onChange}
          name="confirmpassword"
          placeholder="confirm password"
        />
        <br />
        <br />
        <button onClick={() => this.Register()}>Register</button>
      </div>
    );
  }
}

export default Register;
