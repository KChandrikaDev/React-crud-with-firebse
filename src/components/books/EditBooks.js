import { db } from "../../Firebase";
import "./EditBooks.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Form from "./Form";

import React, { Component } from "react";

class EditBooks extends Component {
render() {

    const bookData = this.props.bookData;

    return bookData !== null || undefined ? (
      <section className="mt-10 container-fluid new ">
        <section className="row justify-content-center">
          <Form bookData={bookData} />
        </section>
      </section>
    ) : (
      <div>Loading...</div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("state", state.firestore.ordered.Books);
  const d = state.firestore.ordered.Books;
  const { id } = ownProps;
  const data1 =
    d !== undefined
      ? d.find((data) => {
          return data.id === id;
        })
      : null;

  console.log("Props Id", id);

  console.log("Single Datas", data1);
  return {
    Data: state.firestore.ordered.Books,
    bookData: data1,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect(() => [
    {
      collection: "Books",
    },
  ])
)(withRouter(EditBooks));
