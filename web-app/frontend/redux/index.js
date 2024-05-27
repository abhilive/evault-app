import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initStore = () => {
  return configureStore({ reducer: rootReducer, devTools: true }, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore, { debug: false });
