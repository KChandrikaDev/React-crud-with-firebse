import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Tbody extends Component {
  render() {
    console.log("id", this.props.data.id)
    const { index, data, deleteBook } = this.props;
    return (
        <React.Fragment>
      <tr className="p-3 table-focus" key={data.id} >
        <td className="p-3 ">{data.bookName}</td>
        <td style={{ textAlign: "right" }} className="p-2 book-name">
          {data.authorName}
        </td>
        <td
          style={{ textAlign: "right" }}
          className=" me-3 p-2 book-name text-right"
        >
          ${data.price}
        </td>

        <td style={{ textAlign: "right" }}>
          <b>
            <Link className="link d-lg-none" to={`/view/book/${data.id}`}>
              <i className="fa fa-eye  me-1 eye" aria-hidden="true"></i>
            </Link>

            <Link className="link " to={`/edit/books/${data.id}`}>
              <i
                style={{ color: " #013208" }}
                className="fa fa-pencil-square-o "
              ></i>
            </Link>

            <i
              onClick={() => {
                deleteBook(data);
              }}
              className="fa fa-trash-o  fa-5m text-danger ms-1"
            ></i>
          </b>
        </td>
      </tr>
      </React.Fragment>
    );
  }
}

export default Tbody;
