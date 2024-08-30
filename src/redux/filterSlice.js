import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
