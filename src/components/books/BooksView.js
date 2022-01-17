import React, { Component } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import "../../App.css";
import "./BooksView.css";

export default class BooksView extends Component {
  constructor(props) {
    super(props);
    this.booksCollection = collection(db, "books");
    this.state = {
      data: [],
      editData: {},
    };
  }
  componentDidMount() {
    this.fetchMessages();
  }
  fetchMessages = async () => {
    console.log("booksCollection", this.booksCollection);
    const data = await getDocs(this.booksCollection);
    console.log("data", data);
    const data1 = this.setState({
      data: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
    console.log("data1", this.state.data);
    let filterData = this.state.data.filter((edit) => {
      return edit.id === this.props.match.params.id;
    });
    console.log("filterData", filterData);
    filterData.map((data) => {
      this.setState({ editData: data });
    });
    console.log("id", this.props.match.params.id);
    console.log("editData", this.state.editData);
  };

  render() {
    return (
      <div id="animate-area">
        <section className="mt-5 container justify-content-center ">
         <section className="row justify-content-center "> 
            <div class="col-sm-6 para text-white">
              <div class="row m-1 card-wrapper mt-5">
                <div class="col-5 info-wrapper">
                  <p>Book Name</p>
                </div>
                <div className="col-1 info-wrapper ">:</div>

                <div class="col-6 p-0">
                  <p className=" right textp">{this.state.editData.bookName}</p>
                </div>
              </div>
              <div class="row m-1 card-wrapper mt-5">
                <div class="col-5 info-wrapper">
                  <p>Author Name</p>
                </div>
                <div className="col-1 info-wrapper ">:</div>

                <div class="col-6 p-0">
                  <p className=" right textp">{this.state.editData.authorName}</p>
                </div>
              </div>
              <div class="row m-1 card-wrapper mt-5">
                <div class="col-5 info-wrapper">
                  <p>Price</p>
                </div>
                <div className="col-1 info-wrapper ">:</div>

                <div class="col-6 p-0">
                  <p className=" right textp">{this.state.editData.price}</p>
                </div>
              </div>
            </div>

       
          </section>
        </section>
      </div>
    );
  }
}
