import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import {store,persistor }from './components/redux/store'
// import persistor from './components/redux/store'
import {createFirestoreInstance} from 'redux-firestore'
import firebase from './Firebase';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import { PersistGate } from "redux-persist/es/integration/react";
import store from './components/redux/store'


const rrfProps={
  firebase,
  config:{},
  dispatch:store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  // <React.StrictMode>
  
    <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store ={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </ReactReduxFirebaseProvider>
  
  // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
