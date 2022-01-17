import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../Firebase";
import B from "../../images/B.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      show: true,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="nav-link" to="/">
            <strong>
              {/* <i className="fa fa-book fa-2x" aria-hidden="true"></i> */}
              <img
                style={{ borderRadius: "50%" }}
                src={B}
                alt="Book"
                width="50px"
                height="50px"
              />
            </strong>
          </Link>

          <button
            className="navbar-toggler border border-info text-info"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {this.state.show ? (
              <i className="fa fa-bars " aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times" aria-hidden="true"></i>
            )}
          </button>
          <div
            className={
              this.state.show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-5">
                <Link className="nav-link  " to="/test">
                  <strong>Test</strong>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link " to="/">
                  <strong text-white>Home</strong>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link " to="/view/books">
                  <strong>Books Info</strong>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/add/books">
                  <strong>Add Books</strong>
                </Link>
              </li>

              {this.state.currentUser ? (
                <Link className="nav-link " to="/login">
                  <img
                    style={{ borderRadius: "50%", border: "2px solid blue" }}
                    src={this.state.currentUser.photoURL}
                    width="30px"
                    height="30px"
                  />

                  <strong onClick={() => auth.signOut()}>signOut</strong>
                </Link>
              ) : (
                <Link className="nav-link " to="/login">
                  <i className="fa fa-fw fa-user"></i>
                  <strong>Login</strong>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
