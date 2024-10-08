// src/redux/index.js

import { createStore, combineReducers } from 'redux';
import nacl from 'tweetnacl';

// Actions
export const SET_KEY_PAIR = 'SET_KEY_PAIR';

// Action creators
export const setKeyPair = (keyPair) => ({
  type: SET_KEY_PAIR,
  payload: keyPair,
});

// Reducers
const keyPairReducer = (state = null, action) => {
  switch (action.type) {
    case SET_KEY_PAIR:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  keyPair: keyPairReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;