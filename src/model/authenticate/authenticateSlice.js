import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestToken } from './authenticateApi';

const initialState = {
  expires_at: "",
  request_token: "",
  shouldRedirect: false,
};

export const getToken = createAsyncThunk(
  'authenticate/getToken',
  async () => {
    const response = await requestToken();

    return response.data;
  }
);

export const authenticationSlice = createSlice({
  name: 'authenticate',
  initialState,
  
  reducers: {
    getRequestToken: (state, action) => {
      const {request_token, expires_at} = action.payload
      state.request_token = request_token
      state.expires_at = expires_at
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.fulfilled, (state, action) => {
        const {request_token, expires_at} = action.payload
        state.request_token = request_token
        state.expires_at = expires_at
        state.shouldRedirect = true;
      })
  },
});

export const { getRequestToken } = authenticationSlice.actions;

export const selectRequestToken = (state) => state.request_token;
export const selectshouldRedirect = (state) => state.shouldRedirect;

export default authenticationSlice.reducer;
