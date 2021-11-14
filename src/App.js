
import './App.css';
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import {lazy,Suspense} from 'react'
import Logout from './logout/Logout';



const Login = lazy(() => import("./login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const Header = lazy(() => import("./components/appheader/Header"));
const AddBooks = lazy(() => import("./components/books/AddBooks"));
const EditBooks = lazy(() => import("./components/books/EditBooks"));
const DisplayBooksLists = lazy(() => import("./components/books/DisplayBooksLists"));


function App() {
  return (
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
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route path="/add/books" component={AddBooks} />
              <Route path="/edit/bookks/:id" component={EditBooks} />
              <Route path="/view/books" component={DisplayBooksLists} />
              <Route exact path="/logout" component={Logout} />
              </Switch>
          </BrowserRouter>
        </Suspense>
  );
}

export default App;
