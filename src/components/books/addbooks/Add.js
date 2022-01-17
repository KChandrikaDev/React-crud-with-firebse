import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createBookAction } from "../../redux/actions/addBookAction";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      authorName: "",
      price: "",
    };
  }
  cancel = () => {
    this.props.history.push("/view/books");
  };
  handleChange = (e) =>{
      this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = async (e) => {
    e.preventDefault();
    if (
      this.state.bookName !== "" &&
      this.state.authorName !== "" &&
      this.state.price !== ""
    ) {
      this.props.createBook(this.state);

      console.log("data", this.state);

      this.props.history.push("/view/books");
    } else {
      alert("please fill all the details");
    }
  };
  render() {
    return <>{this.props.render(this.state, this.onSubmit, this.cancel, this.handleChange)}</>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => {
      dispatch(createBookAction(book));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Add));
