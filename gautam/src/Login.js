import React, { Component } from 'react'

export default class Login extends Component {
  login() {
    console.warn ("state",this.state)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Username" /><br /><br />
        <input type="text" onChange={(e) => { this.setState({ password: e.target.value }) }}  placeholder="password"/><br /><br />
        <button onClick={() => this.login()}>login</button>
      </div>
    )
  }
}
