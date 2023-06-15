import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Dashboard from '../containers/Dashboard';
import Layout from '../layout';

import PrivateRoute from './private-route';

import { setAuthToken } from '../config/axios/axios-configuration';

const AppRoute = () => {
  const { token } = useSelector(state => state.auth);
  setAuthToken(token);

  console.log('\n\n\n in app route \n\n\n\n');
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <PrivateRoute path="/dashboard" component={Dashboard} />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Layout(AppRoute);
