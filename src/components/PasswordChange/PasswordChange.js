import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {  Link} from "react-router-dom";
import { isEmail } from "validator";
import AuthService from '../../services/auth.service'


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vcode = (value,code) =>{
    //   const {code} = this.props;
      if(value !== code ){
          return (
            <div className="alert alert-danger" role="alert">
              Please enter your four digit code received by email.
            </div>
          );
      } 
  }
  
  const vusername = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

class PasswordChange extends React.Component {

    
    constructor(props){
        super(props)
        this.handleResetPassword = this.handleResetPassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.state = {
            code: '',
            email: '',
            password: '',
            confirmNewPass:'',
            successful: false,
            message: ""
        }
    }
    onChangeCode =(e) =>{
        this.setState({
            code: e.target.value
        })
    }
    handleEmail =(e)=>{
        this.setState({
            email: e.target.value
        })
    }


    onChangeNewPassword = (e) =>{
        this.setState({
            password: e.target.value,
        })
    }
    onConfirmNewPass =(e) =>{
        this.setState({
            confirmNewPass: e.target.value
        })
        // const {password, confirmNewPass} = this.state;
        if(this.state.password !== this.state.confirmNewPass){
            return (
                <div className="alert alert-danger" role="alert">
                  Passwords do not macth! Try again!
                </div>
              );
        }
    }

    handleResetPassword = (e) => {
        e.preventDefault();
    
        this.setState({
          message: "",
          successful: false
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.confirmResetPassword(
            this.state.code,
            this.state.email,
            this.state.password
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
              this.props.history.push("/signin")
              
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                successful: false,
                message: resMessage
              });
            }
          );
        }
      }


    
    render() {
        return (

            <div className="outer justify-center align-content-center">
        <h2 className="title-form">Reset your password</h2>
      <div className="col-md-6 inner">
        <div className="card-container-reg">
          {/* <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          /> */}

          <Form
            onSubmit={this.handleResetPassword}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                  <div className="form-group">
                  <label htmlFor="code">Enter Code received</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="code"
                    placeHolder="Enter the 4 digit code"
                    value={this.state.code}
                    onChange={this.onChangeCode}
                    // validations={[required, vcode]}
                  />
                </div>
                
                {/* <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeHolder="Create a user name"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div> */}

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    placeHolder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                    // validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Set New Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeHolder="Create a new password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    // validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm New Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="confirm-password"
                    placeHolder="Confirm new password"
                    value={this.state.password}
                    onChange={this.onConfirmNewPass}
                    // validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-block" type="submit">Submit</button>
                </div>
               
                
                
                
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
            

                
            
        )
    }
}

export default PasswordChange



