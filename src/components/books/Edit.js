import React, { Component } from 'react'
import { connect } from "react-redux";
import {updateBook} from '../redux/actions/addBookAction';
import { withRouter } from "react-router";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Edit extends Component {
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
            return <>{this.props.render(this.state.data, this.onSubmit, this.cancel, this. onInputChange)}</>;
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
  const mapDispatchToProps = (dispatch) => {
    return {
      updateBook: (book) => {
          console.log("book", book)
        dispatch(updateBook(book));
      },
    };
  };
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(() => [
      {
        collection: "Books",
      },
    ])
  )(withRouter(Edit));
