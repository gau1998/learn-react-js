import React, { Component } from 'react'

export default class Register extends Component {
    Register(){

    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="email id"/><br /><br />
                <input type="text" onChange={(e) => { this.setState({ mobile: e.target.value }) }}placeholder="mobile no" /><br /><br />
                
                <input type="text" onChange={(e) => { this.setState({ password: e.target.value }) }}placeholder="password" /><br /><br />
                <input type="text" onChange={(e) => { this.setState({ confrmpassword: e.target.value }) }}placeholder="confirm password" /><br /><br />
                <button onClick={() => this.Register()}>Register</button>
            </div>
        )
    }
}
