import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

import FFooter from "../components/FFooter.js";
import FHeader from "../components/FHeader";

const required = value => 
{
  if (!value) {
    return(<div className="rgb-alert" role="alert">This field is required!</div>);
  }
};

const email = value => 
{
  if (!isEmail(value)) 
  {
    return(<div className="rgb-alert" role="alert">This is not a valid email.</div>);
  }
};

const vusername = value => 
{
  if (value.length < 3 || value.length > 20) 
  {
    return ( <div className="rgb-alert" role="alert"> 
        The username must be between 3 and 20 characters. </div>);
  }
};

const vpassword = value => 
{
  if (value.length < 8 || value.length > 40) 
    {
    return (<div className="rgb-alert" role="alert"> 
        The password must be between 8 and 40 characters. </div>
    );
  }
};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handlePatch = this.handlePatch.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {username: "", email: "", password: "", successful: false, message: ""};
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            authenticated: "checking"
        };
    }

    onChangeUsername(e) 
    {
        this.setState({username: e.target.value});
    }
    
    onChangeEmail(e) 
    {
        this.setState({ email: e.target.value });
    }

    onChangePassword(e) 
    {
      this.setState({ password: e.target.value });
    }

    handlePatch(e) 
    {
      e.preventDefault();
      this.setState({ message: "", successful: false });
      if (this.checkBtn.context._errors.length === 0) 
      {
        AuthService.updateUser( this.state.username, this.state.email, this.state.password).then(
          response => 
          {
            this.setState({ message: response.data.message, successful: true });
            window.location.reload();
          },
          error => 
          {
            const resMessage = (error.response && error.response.data 
                && error.response.data.message) || error.message || error.toString();
            this.setState({ successful: false, message: resMessage });
          }
        );
      }
    }

    componentDidMount() {
        UserService.getAuthTest().then(authed => this.setState({authenticated: authed.authenticated ? "passed" : "failed"}))
    }


    render() {
        const {currentUser} = this.state;
        return (
<div className="h-100 d-flex flex-column m-3 m-xxl-0">
    <FHeader/>
    <main className="mb-5 container-fluid">
        <div className="my-5 d-lg-flex justify-content-around align-items-center">
            <div className="col-lg-7 mx-md-5 mb-5" >
                <p className="ffs-1 ffw-2 m-0 p-0 me-4">Settings</p>
                <hr/> 
                <Form onSubmit={this.handlePatch} ref={c => { this.form = c; }} >
                    {!this.state.successful && (
                  <div>
                    <div className="mb-5">
                        <div className="FForm d-lg-flex mb-3 align-items-center">
                          <label className="form-label col-2 rgb-2 ffw-2" htmlFor="username">New Username</label>
                          <Input placeholder={currentUser.username} type="text" className="FFormInput w-100" name="username" value={this.state.username} 
                                onChange={this.onChangeUsername} validations={[vusername]} />
                        </div>
                        <div className="FForm d-lg-flex mb-3 align-items-center">
                          <label className="form-label col-2 rgb-2 ffw-2" htmlFor="email">New Email</label>
                          <Input placeholder={currentUser.email} type="text" className="FFormInput w-100" name="email" value={this.state.email}
                                onChange={this.onChangeEmail} validations={[email]} />
                        </div>
                        <div className="FForm d-lg-flex mb-3 align-items-center">
                          <label className="form-label col-2 rgb-2 ffw-2" htmlFor="password">New Password</label>
                          <Input type="password" className="FFormInput w-100" name="password" value={this.state.password} 
                             onChange={this.onChangePassword} validations={[vpassword]} />
                        </div>
                        // TODO (Elias): Check if this is correct
                        <div className="FForm d-lg-flex mb-3 align-items-center mt-5">
                          <label className="form-label col-2 rgb-2 ffw-2" htmlFor="password">Current Password</label>
                          <Input type="password" className="FFormInput w-100" name="password" value={this.state.password} 
                             onChange={this.onChangePassword} validations={[vpassword]} />
                        </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Save</button>
                    </div>
                  </div>
                )}
                {this.state.message && (
                  <div className="form-group">
                    <div className={ this.state.successful ? "alert alert-success" : "py-2 rgb-alert" } role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
                </Form>
            </div>
        </div>
    </main>
    <FFooter/>
</div>
        );
    }
}

export default Profile;
