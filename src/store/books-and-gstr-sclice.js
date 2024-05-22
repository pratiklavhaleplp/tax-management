import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  joinedData: []
};

export const booksAndGstrSclice = createSlice({
  name: 'books-gstr-slice',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.joinedData = action.payload
    }
  }
});

export const { updateData } = booksAndGstrSclice.actions;

export default booksAndGstrSclice.reducer;