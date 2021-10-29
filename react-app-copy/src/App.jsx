import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import {Contactus} from "./pages/Contactus";
import { Login } from "./components/Login";
import {ProtectedRoute} from './components/Auth/ProtectedRoute'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
