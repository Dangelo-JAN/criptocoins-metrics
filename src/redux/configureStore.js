import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import coinsReducer from './Coins/Coins';

export default configureStore({
  reducer: {
    coins: coinsReducer,
  },
  middleware: [thunk, logger],
});
