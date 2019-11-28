import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Auth';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/app" component={Main} /> */}
        <PrivateRoute path="/app" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
