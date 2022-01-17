import "./DisplayBooksLists.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { removeBook } from "../redux/actions/addBookAction";
import Thead from "../../layOuts/Thead";
import Tbody from "../../layOuts/Tbody";
import { Link } from "react-router-dom";

class DisplayBooksLists extends Component {
  deleteBook = (book) => {
    this.props.removeBook(book);
  };
  render() {
    const { booksData } = this.props;
    console.log("Render", booksData);
    return (
      <div id="container" className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <Thead />
              <tbody>
                {booksData ? (
                  booksData.map((data, index) => (
                    <Tbody data={data} deleteBook={this.deleteBook} />
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.firestore.ordered.Books);
  // const bookData = state.firestore.ordered.Books;
  return {
    booksData: state.firestore.ordered.Books,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book) => dispatch(removeBook(book)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [
    {
      collection: "Books",
    },
  ])
)(DisplayBooksLists);
