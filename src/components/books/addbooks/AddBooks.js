import React, { Component } from "react";
import "./AddBook.css";
import AddForm from "./AddForm";

class AddBooks extends Component {
  render() {
    console.log("props AddBoook", this.props)
    const {state, onSubmit,cancel,handleChange}=this.props
    return (
      <section className="mt-10 container-fluid new ">
        <section className="row justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="container-fluid mt-5 col-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 col-xxl-6 ">
              <div className="row ms-3 me-3">
                <div className=" col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 text-white p-3">
                  <h4 className="pt-5  text-white  ms-2 ">Add New Item</h4>
                  <button
                    onClick={cancel}
                    className="ms-2 me-2  text-white buttonc"
                  >
                    Cancel
                  </button>
                  <button
                    className="ms-2 me-2 mb-5 text-white p-0 text-center text-bold p buttona"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
                <div className=" col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 text-white p-3">

                <AddForm  state={state} handleChange={handleChange}/> 
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
export default AddBooks