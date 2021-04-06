import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebase.auth().currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;