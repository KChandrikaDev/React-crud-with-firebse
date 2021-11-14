import React, { Component } from "react";
import "./Logout.css";

export default class Logout extends Component {
  render() {
    return (
      <>
        <div id="logout" className="row">
          <div className="col-sm-10 mt-5  col d-flex justify-content-center">
            <h1 style={{ fontWeight: "900" }} className="font-weight-bold">
              {" "}
              Please login for access your details...
            </h1>
          </div>
        </div>
      </>
    );
  }
}
