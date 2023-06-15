import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import authSlice from '../slices/auth-slice';

const authTransform = createFilter('auth', ['name', 'email', 'selectedPlan', 'status', 'token', 'userId']);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'pipelines'],
  transforms: [authTransform],
};

const reducers = combineReducers({
  auth: authSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk],
});
