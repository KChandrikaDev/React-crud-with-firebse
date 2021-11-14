import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../Firebase";



export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
   
    return (
        <div id="navbar" className="topnav">
      <Link className="nav-link" to="/">
        <strong>
          {" "}
          <i className="fa fa-book fa-2x" aria-hidden="true"></i>
        </strong>
      </Link>
      <div className="topnav-right">
        <Link className="nav-link mt-1 pt-3" to="/">
          <i className="fa fa-home"></i>
          <strong>Home</strong>
        </Link>
      
        <Link className="nav-link mt-1 pt-3" to="/view/books">
      
          <strong>Books Info</strong>
        </Link>
        <Link className="nav-link mt-1 pt-3" to="/add/books">
          
          <strong>Add Books</strong>
        </Link>
        {
          this.state.currentUser?
          (<Link className="nav-link mt-1 pt-3" to="/logout">
        
               <img style={{borderRadius:"50%"}}src={this.state.currentUser.photoURL} width="30px" height="30px" />
           
          <strong onClick={() => auth.signOut()}>signOut</strong>
        </Link>):
          (<Link className="nav-link mt-1 pt-3" to="/login">
          <i className="fa fa-fw fa-user"></i>
          <strong>Login</strong>
        </Link>)
        }
      
       


      </div>
    </div>
    );
  }
}
