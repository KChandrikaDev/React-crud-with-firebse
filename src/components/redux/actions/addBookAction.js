import { getFirestore } from "redux-firestore";
import * as types from "../actionTypes";


export const createBookAction = (book) => {
  return (dipatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Books")
      .add({
        ...book,
      })
      .then(() => {
        dipatch({
          type: types.ADD_BOOK,
          book,
        });
      })
      .catch((err) => {
        dipatch({
          type: types.ADD_BOOK_ERR,
          err,
        });
      });
  };
};
export const removeBook = (book) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore =getFirestore();
    firestore
      .collection("Books")
      .doc(book.id)
      .delete()
      .then(() => {
        dispatch({
          type: types.DELETE_BOOK,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.DELETE_BOOK_ERR,
          err,
        });
      });
  };
};
export const updateBook = (book) => {
  return (dispatch, getState, { getFirestore }) => {
   
    const firestore = getFirestore()
		firestore
    .collection('Books')
    .doc(book.id)
    .update({
			...book
		})
      .then(() => {
        dispatch({
          type: types.UPDATE_BOOK
        });
      })
      .catch((err) => {
        dispatch({
          type: types.UPDATE_BOOK_ERR,
          err,
        });
      });
  };
};
export const getBookDetailsById = (bookID) => {
	return (dispatch, getState, { getFirestore }) => {

		const firestore = getFirestore()
		firestore
    .collection('goalz')
    .doc(bookID)
    .get()
    .then((doc) => {
			if(doc.exists){
				const data = doc.data()
				dispatch({ type: types.GET_BOOK_BY_ID, data })	
			}else{
				console.log('does not exist')
			}
			
		})
    .catch((err) => {
      dispatch({
        type: types.GET_BOOK_BY_ID_ERR,
        err,
      });
    });
	}
}