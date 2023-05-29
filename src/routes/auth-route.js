import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
import PublicRoute from './public-route';
import PrivateRoute from './private-route';

// eslint-disable-next-line import/extensions
import { setAuthToken } from '../config/axios/axios-configuration';

const AuthRoute = () => {
  const { token } = useSelector(state => state.auth);

  setAuthToken(token);
  console.log('\n\n\n in app route \n\n\n\n');

  return (
    <Switch>
      <PublicRoute path="/auth/signin" component={SignIn} />
      {/* Private Routes */}

      {/* <PrivateRoute path="/auth/subscription-plans" component={NotFound} /> */}
      <Redirect from="*" to="/" />
      <Route path="/not-found" component={NotFound} />
    </Switch>
  );
};

export default AuthRoute;
