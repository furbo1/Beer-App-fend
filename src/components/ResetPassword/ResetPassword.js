import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import axios from "axios";
import "./ResetPassword.js"


class ResetPassword extends React.Component {
  state={
    message:"",
    email: ""
  }
  onEmailChange = (e) =>{
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e) =>{
    
      e.preventDefault();

      axios.post('http://localhost:4004/user/reset-password', {
        email: this.state.email
      })
      .then( res => {
        this.setState({
          message: res.message
        })
        
        this.props.history.push("/password-change")
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }
  render(){
    return (
      <div className="">
        <h1>Password reset</h1>
          <Form className="inner">
          
            <div className="form-group">
                  <label htmlFor="email-address">Enter your email address to restet your password</label>
                  <Input
                    type="email"
                    className="form-control"
                    name="email-address"
                    placeHolder="Enter your email address"
                    
                    onChange={this.onEmailChange}
                  
                  />
                </div>
                <div className="form-group">
                  
                  <button className="btn btn-block" onClick={this.handleSubmit}
                  disabled= {!this.state.email}
                  >Reset password</button>
                  
                </div> 
            </Form>
              <div className="message">
                {this.state.message}
              </div>
      </div>
  )

  }
    
}

export default ResetPassword
