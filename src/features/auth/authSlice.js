// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  status: 'idle',
  error: null,
};
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.access);
      localStorage.setItem('refresh', response.refresh);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await authService.register(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const verifyToken = createAsyncThunk('auth/verifyToken', async (_, { rejectWithValue }) => {
  try {
    const response = await authService.verifyToken();
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.access;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.error = null;
      })

      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(verifyToken.pending, (state) => {  
        state.status = 'loading';
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.access;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
