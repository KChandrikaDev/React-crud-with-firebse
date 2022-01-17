import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import { auth, signInWithGoogle } from "./Firebase";
import {lazy,Suspense} from 'react'
// import Logout from './logout/Logout';
import TestEditForm from "./components/books/TestEditForm";
// import BooksView from "./components/books/BooksView";



const BooksView = lazy(() => import("./components/books/BooksView"));
const Login = lazy(() => import("./login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const Header = lazy(() => import("./components/appheader/Header"));
const Books = lazy(() => import("./components/books/addbooks/Books"));
const EditItems = lazy(() => import("./components/books/EditItems"));
const DisplayBooksLists = lazy(() => import("./components/books/DisplayBooksLists"));




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <>
   
    {this.state.currentUser?
      (<Suspense
      fallback={
        <div 
          style={{
            marginTop: "200px",
            fontSize: "24px",
            fontWeight: "300px",
          }}
          className=" text-center text-primary"
        >
          Loading...
        </div>
      }
    >
        
      <BrowserRouter>
      
        <Header />
     
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/add/books" component={Books}/>
          <Route path="/edit/books/:id" component={EditItems} />
          <Route path="/view/books" component={DisplayBooksLists} />
          <Route path="/view/book/:id" component={BooksView} />
          {/* <Route exact path="/logout" component={Logout} /> */}
          <Route exact path="/test" component={TestEditForm} />
          
          </Switch>
          
          
      </BrowserRouter>
     
  
    </Suspense>):(
      <Suspense
      fallback={
        <div
          style={{
            marginTop: "200px",
            fontSize: "24px",
            fontWeight: "300px",
          }}
          className=" text-center text-primary"
        >
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <Header />
        <Switch>
         <Route exact path="/login" component={Login} />
         
          </Switch>
      </BrowserRouter>
    </Suspense>
    )}

    </>
    // <Suspense
    //       fallback={
    //         <div
    //           style={{
    //             marginTop: "200px",
    //             fontSize: "24px",
    //             fontWeight: "300px",
    //           }}
    //           className=" text-center text-primary"
    //         >
    //           Loading...
    //         </div>
    //       }
    //     >
    //       <BrowserRouter>
    //         <Header />
    //         <Switch>
    //           <Route exact path="/" component={Home} />
    //           <Route exact path="/login" component={Login} />
    //           <Route path="/add/books" component={AddBooks} />
    //           <Route path="/edit/bookks/:id" component={EditBooks} />
    //           <Route path="/view/books" component={DisplayBooksLists} />
    //           <Route exact path="/logout" component={Logout} />
    //           </Switch>
    //       </BrowserRouter>
    //     </Suspense>
  );
        }
}


