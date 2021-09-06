import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';


function PrivateRoute({ component: Component, ...rest }) {
    const { data } = useSelector((state) => state.auth)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          data ? (
            <Component />
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
  }
  

export default PrivateRoute;