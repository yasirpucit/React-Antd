/* eslint-disable consistent-return */
import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { setAuthToken } from '../config/axios/axios-configuration';

const NonAuthRoute = () => {
  const { token } = useSelector(state => state.auth);
  setAuthToken(token);

  return (
    <Switch>
      {/* <Route path='/non-auth/sign-in' component={SignUp} />
      <Route path='/non-auth/free-plan' component={SubscriptionPlans} /> */}
    </Switch>
  );
};

export default NonAuthRoute;
