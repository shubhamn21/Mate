// import React, { Component } from 'react';
import React, { useEffect, useState, Component } from "react";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Axios from "axios";
  
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });


export class Login extends Component {


  render() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // Axios.defaults.withCredentials = true;

  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //   });
  // };
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                <h4>Student Helper!</h4>
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">

                <Form.Control type="email" placeholder="Username" size="lg" className="h-auto"/>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">

                  <Form.Control type="password" placeholder="Password" size="lg" className="h-auto"/>
                  </Form.Group>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
