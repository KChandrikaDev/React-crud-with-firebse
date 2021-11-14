import React, { useState } from "react";
import './AddBook.css'
import { collection, getDocs , addDoc} from "firebase/firestore";
import { db } from "../../Firebase";
import { useHistory } from "react-router-dom";

function AddBooks() {
  const [newBook, setNewBook] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const booksCollection = collection(db, "books");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(booksCollection, { bookName: newBook, authorName:newAuthor,price:price });
   
    history.push("/view/books");
  };
  return (
    <section className="mt-10 container-fluid ">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form onSubmit={onSubmit}>
            <h1
              style={{ marginBottom: "10px" }}
              className="text-white text-center"
            >
              Add Book
            </h1>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Book Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="BookName"
                value={newBook}
                onChange={(e) => {
                  setNewBook(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Author Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder=" Author Name"
                value={newAuthor}
                onChange={(e) => {
                  setNewAuthor(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter number "
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <button
              style={{ width: "95%" }}
              type="Create Book"
              className="btn btn-primary justify-content-center ms-2 me-6 mb-5"
            >
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default AddBooks;
