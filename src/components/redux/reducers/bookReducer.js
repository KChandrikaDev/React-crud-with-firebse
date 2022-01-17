import * as types from "../actionTypes";

const initialState={
    data:[],
}
const bookReducer = (state=initialState.data, action) =>{
    switch(action.type){
        case types.ADD_BOOK:{
            console.log("Added a book");
            return state;
        }
        case types.ADD_BOOK_ERR:{
            console.log("An error occurred");
            return state;
        }
        case types.DELETE_BOOK:{
            console.log("Book was removed");
            return state;
        }
        case types.DELETE_BOOK_ERR:{
            console.log("An error occurred while book removed");
            return state
        }
        case types.UPDATE_BOOK:{
            console.log("Book Details was updated");
            return state
        }
        case types.UPDATE_BOOK_ERR:{
            console.log("An error occurred while book was updated");
            return state;
        }
        default:
            return state;
    }
}
export default bookReducer;
