import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action) => {},
  },
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
