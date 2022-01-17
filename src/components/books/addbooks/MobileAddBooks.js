import React, { Component } from "react";
import "./AddBook.css";
import AddForm from "./AddForm";

class MobileAddBooks extends Component {
 render() {
    console.log("props MobileAddBoook", this.props);
    const { state, onSubmit, cancel, handleChange } = this.props;
    return (
      <div>
        <section className="mt-10 container-fluid new mt-5 ms-2 me-2">
          <section className="row justify-content-center">
            <form onSubmit={onSubmit}>
              <div className=" col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 text-white p-3">
                <AddForm state={state} handleChange={handleChange} />

                <button type="submit" className="ms-4 p-2 button">
                  Add
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default MobileAddBooks;
