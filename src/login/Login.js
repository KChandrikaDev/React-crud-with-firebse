import "./Login.css";
import { auth , signInWithGoogle} from "../Firebase";
import firebase from "../Firebase";
import '../App.css'

import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };

    // this.signInWithGoogle = this.signInWithGoogle.bind(this);
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

  isSignin = async()=>{
   await signInWithGoogle()
    this.props.history.push('/')

  }

  

  render() {
    return (
      <div id="animate-area">
      {/* <div id="login" className="container"> */}
        <button className="button p-3"
          style={{ minWidth: "200px", fontSize: "30px",backgroundColor:"blue" }}
          onClick={this.isSignin}
        >
          SIGN IN WITH GOOGLE
        </button>
      {/* </div> */}
      </div>
    );
  }
}
