// import React from "react";
import "./Login.css";
import { auth, signInWithGoogle } from "../Firebase";
import firebase from "../Firebase";
import { useHistory } from "react-router";

import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };

    // this.signInWithGoogle= this.signInWithGoogle.bind(this);
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    this.unsubscribeFromAuth();
  }

  //  signInWithGoogle =  () => {

  //    auth.signInWithPopup(this.provider);
  //   // this.props.history.push('/')

  //   }

  render() {
    return (
      <div id="login" className="container">
        <button
          style={{ minWidth: "200px", fontSize: "24px" }}
          onClick={signInWithGoogle}
        >
          SIGN IN WITH GOOGLE
        </button>
      </div>
    );
  }
}
