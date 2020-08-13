import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component (Note: capital Component).
// Then, take all remaining properties defined on the props object and collect them inside an argument called rest.

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default AuthRoute;