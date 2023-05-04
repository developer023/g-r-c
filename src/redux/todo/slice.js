import { createSlice } from '@reduxjs/toolkit';
import filterList from './helper';

const todoInitialState = {
  data: [],
  filter: 'all',
  filteredData: [],
};

const todoSlice = createSlice({
  name: 'TODO',
  initialState: todoInitialState,
  reducers: {
    getFilteredData: (state, { payload }) => {
      const data = JSON.parse(localStorage.getItem('data')) || payload;
      const filter = JSON.parse(localStorage.getItem('filter')) || state.filter;
      state.filteredData = filterList(data, filter);
    },
    addItem: (state, { payload }) => {
      state.data.push({
        id: Date.now(),
        description: payload,
        isCompleted: false,
      });
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    deleteItem: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    setCompleteState: (state, { payload }) => {
      state.data = state.data.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
      state.filteredData = filterList(state.data, payload);
      localStorage.setItem('filter', JSON.stringify(payload));
    },
  },
});

export const todoActionTypes = todoSlice.actions;

export default todoSlice.reducer;
