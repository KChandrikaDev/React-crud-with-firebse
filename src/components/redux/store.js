import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import rootReducer from './rootReducer.js';
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../../Firebase";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore } from "redux-persist";
// import persistReducer from './rootReducer'
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/lib/persistStore";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const fireBaseCompose = compose(
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ getFirestore })
    //   ,...middleware
    )
  ),

  reduxFirestore(firebase)
);
// const store = createStore(persistReducer,

// 	fireBaseCompose);

const store = createStore(rootReducer, fireBaseCompose);

// const persistor = persistStore(store);

// export {store,persistor } ;

export default store;
