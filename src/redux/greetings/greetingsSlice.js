import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: [],
};

export const fetchGreetings = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios('http://localhost:3000/greetings/random');
    return response.data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {

  },
  extraReducers: (builders) => {
    builders.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.greetings = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
