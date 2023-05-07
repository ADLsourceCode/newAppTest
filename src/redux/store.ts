/* eslint-disable */ 

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import feedReducer from './reducers';

// Define the root reducer as a combination of all reducers in the app, in this case only the feedReducer
const rootReducer = combineReducers({
  feedReducer: feedReducer,
});

// Configure the store with the root reducer and any additional middleware or configuration options
export const store = configureStore({
  reducer: rootReducer,
});

// Export the configured store as the default export for this module
export default store;
