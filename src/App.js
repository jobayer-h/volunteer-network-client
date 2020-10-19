import React, { createContext, useState } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EventTasks from './components/EventTasks/EventTasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
              <Landing />
        </Route>
        <Route path="/login">
              <Login />
        </Route>
        <PrivateRoute path="/events">
              <EventTasks />
        </PrivateRoute>
        <PrivateRoute path="/activity/:activitytype">
              <Register />
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
