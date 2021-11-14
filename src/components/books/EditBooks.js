import React,{useState,useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { collection, getDocs,doc ,updateDoc} from "firebase/firestore";
import { db } from "../../Firebase";
import './AddBook.css'

function EditBooks() {
    const [books, setBooks] = useState([]);
    const[ EditBooks, setEditBooks]= useState({})
    const booksCollection = collection(db, "books");
    const { id } = useParams();
    // history=useHistory();
    useEffect(() => {
        const getBooks = async () => {
          const data = await getDocs(booksCollection);
          console.log("data", data);
          let newData=data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          console.log("newdata", newData)
          let filterData= newData.filter((edit)=>{
            return edit.id === id;
        })
        setEditBooks(...filterData);
        };
    
        getBooks();
      }, []);
        
     
      console.log("id",id)
      console.log("edit",EditBooks)
      const onInputChange = async (e) => {
        await setEditBooks({ ...EditBooks, [e.target.name]: e.target.value });
      };
     
      const onSubmit = async (e) => {
        e.preventDefault();
        
        const BooksDoc = doc(db, "books", id);
    
    await updateDoc(BooksDoc, EditBooks);
    // history.push('/view/books')
    window.location.reload();
 
      }

    return (
    
        
        <section className="mt-10 container-fluid ">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form  onSubmit={onSubmit}>
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
                  placeholder="Book Name"
                  name="bookName"
                  value={EditBooks.bookName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 me-2 ms-2">
                <label className="form-label">Author Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  name="authorName"
                  placeholder=" Author Name"
                  value={EditBooks.authorName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 me-2 ms-2">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  name="price"
                  placeholder="Enter number "
                  value={EditBooks.price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <button
                style={{ width: "95%" }}
                type="Save"
                className="btn btn-primary justify-content-center ms-2 me-6 mb-5"
              >
                Submit
              </button>
            </form>
          </section>
        </section>
      </section>
    )
}

export default EditBooks
