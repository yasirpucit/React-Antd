import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, withLayout: Layout, ...rest }) => {
  const { token = true } = useSelector(state => state.auth);

  // return token && <Route path={rest.path} component={Component} />;
  return true && <Route path={rest.path} component={Component} />;
};

export default PrivateRoute;
