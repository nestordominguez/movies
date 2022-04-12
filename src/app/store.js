import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../model/authenticate/authenticateSlice';

export const store = configureStore({
  reducer: {
    authenticate: authReducer,
  },
});
