import "./EditBooks.css";
import React, { Component } from "react";
import AddForm from "./addbooks/AddForm";
class MobileEdit extends Component {
  render() {
    const { state, onSubmit, handleChange } = this.props;
    return (
      <section className="mt-10 container-fluid new ">
        <section className="row justify-content-center">
          <form onSubmit={onSubmit}>
            <div class="container-fluid mt-5 col-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 col-xxl-6 ">
              <div class=" col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 text-white p-3">
                <AddForm state={state} handleChange={handleChange} />

                <button type="submit" className="ms-4 p-2 button">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
export default MobileEdit;
