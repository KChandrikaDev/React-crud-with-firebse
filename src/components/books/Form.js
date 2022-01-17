import React, { Component } from "react";
import { updateBook } from "../redux/actions/addBookAction";

import { connect } from "react-redux";
import { withRouter } from "react-router";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.bookData,
    };
  }
  onInputChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };
  cancel = () => {};
  onSubmit = (e) => {
    e.preventDefault();
    console.log("props", this.state.data);
    this.props.updateBook(this.state.data);
    this.props.history.push("/view/books");
  };

  render() {
    return (
      <form key={this.state.data.id} onSubmit={(e) => this.onSubmit(e)}>
        <div className="container-fluid mt-5 col-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 col-xxl-6 ">
          <div className="row ms-3 me-3">
            <div className=" col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 text-white p-3">
              <h4 className="pt-5  text-white  ms-2 ">Edit Item</h4>
              <button
                onClick={this.cancel()}
                className="ms-2 me-2  text-white "
                style={{
                  minWidth: "90% ",
                  marginTop: "35vh",
                  border: "1px solid #FF00FF",
                  backgroundColor: "rgb(2, 2, 46)",
                }}
              >
                Cancel
              </button>
              <button
                className="ms-2 me-2 mb-5 text-white p-0 text-center text-bold p"
                type="submit"
                style={{
                  minWidth: "90% ",
                  marginTop: "3vh",
                  backgroundColor: "#FF00FF",
                  fontWeight: "200",
                }}
              >
                Save Changes
              </button>
            </div>
            <div className=" col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 text-white p-3">
              <div className="mb-5 me-2 ms-3 pt-5  ps-2">
                <label className="form-label text-white p">Book Name</label>
                <input
                  type="text"
                  className="form-control mt-1 input-box "
                  placeholder="Book Name"
                  name="bookName"
                  value={this.state.data.bookName}
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <div className="mb-3 me-2 ms-3  ps-2">
                <label className="form-label text-white p">Author Name</label>
                <input
                  type="text"
                  className="form-control mt-1 input-box"
                  name="authorName"
                  placeholder=" Author Name"
                  value={this.state.data.authorName}
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <div className="mb-3 me-2 ms-3  ps-2 mt-5">
                <label className="form-label text-white p">Price</label>
                <input
                  type="text"
                  className="form-control mt-1 input-box"
                  name="price"
                  placeholder="Enter number "
                  value={this.state.data.price}
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateBook: (book) => {
      console.log("book", book);
      dispatch(updateBook(book));
    },
  };
};
export default connect(null, mapDispatchToProps)(withRouter(Form));
