import React, { useEffect, useState } from "react";

import { db } from "../../Firebase";
import { collection, getDocs, deleteDoc,doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./DisplayBooksLists.css";

function DisplayBooksLists() {
  const [books, setBooks] = useState([]);
  const booksCollection = collection(db, "books");

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollection);
      console.log("data", data);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
  }, []);


  const deleteBooks = async (id) => {
      console.log("id",id)
    const BooksData = doc(db, "books", id);
    await deleteDoc(BooksData);
    window.location.reload();
  };

  return (
    <>
      <div className="row mt-2 ps-5 pe-5">
        {books.map((data) => (
        
          <div className="column mt-5 rounded ">
              
            <div style={{ minWidth: "100%" }} id="card" className="card">
            <h4 className="text-primary ps-2">{`${data.authorName}`}</h4>
              <div className="row">
                <div className="col-4 span">Book Name</div>
                <div className="col-2  text-left">:</div>
                <div className="col-6 span">{data.bookName}</div>
              </div>
              <div className="row ">
                <div className="col-4 span">Author Name</div>
                <div className="col-2 span text-left">:</div>
                <div className="col-6 span">{data.authorName}</div>
              </div>
              <div className="row ">
                <div className="col-4 span">Price</div>
                <div className="col-2 span text-left">:</div>
                <div className="col-6 span">${data.price}</div>
              </div>

              <div className="d-flex flex-row-reverse mt-2">
                <div className="p-2  flex-fill bg-danger">
                  <button
                      onClick={() => {
                        deleteBooks(data.id);
                      }}
                    className=" btn-danger ms-1 "
                  >
                    <i className="fa fa-trash-o"></i>
                    Delete
                  </button>
                </div>
                <div className="p-2 bg-success flex-fill ">
                  <Link className="link " to={`/edit/bookks/${data.id}`}>
                    <button className="btn-success  ms-3  ">
                      <i className="fa fa-pencil-square-o"></i>
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayBooksLists;
