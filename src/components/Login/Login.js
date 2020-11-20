import axios from "axios";
import React, { Component } from "react";
import './Login.css'


export default class Login extends Component {
    state = {
        email: "",
        password: ""

    }

    handleChange = e => {
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState(change)
    }
    handleSubmit = e =>{
        e.preventDefault()
        axios.post('http://localhost:4004/user/login', this.state)
        .then(res=> {
            console.log(res);
            
        },
        err=> {
            
        })
    }

    render() {
    
        return (
            <div className="outer">
            <form className="inner" >

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
}