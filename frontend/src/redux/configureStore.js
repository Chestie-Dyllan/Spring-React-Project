import { createStore, applyMiddleware } from 'redux';
import authReducer from './authReducer.js';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as apiCalls from '../api/apiCalls.js';

const configureStore = (addLogger = true) => {
  let localStorageData = localStorage.getItem('hoax-auth');

  let persistedState = {
    id: 0,
    username: '',
    displayName: '',
    image: '',
    password: '',
    isLoggedIn: false
  };
  if (localStorageData) {
    try {
      persistedState = JSON.parse(localStorageData);
      apiCalls.setAuthorizationHeader(persistedState);
    } catch (error) { }
  }
  const logger = createLogger({

  }
  );
  const middleware = addLogger
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk, logger);
  const store = createStore(authReducer, persistedState, middleware);

  store.subscribe(() => {
    localStorage.setItem('hoax-auth', JSON.stringify(store.getState()));
    apiCalls.setAuthorizationHeader(store.getState());
  });

  return store;
};

export default configureStore;