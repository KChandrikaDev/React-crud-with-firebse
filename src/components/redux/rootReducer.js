import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import bookReducer from "./reducers/bookReducer";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key:'root',
//   storage,
//   whitelist:['firestoreReducer','book']
// }


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  book: bookReducer,
});

export default rootReducer;
// export default persistReducer(peristedState, rootReducer)

