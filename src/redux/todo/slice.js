import { createSlice } from "@reduxjs/toolkit";
import { filterList } from "./helper";

const todoInitialState = {
  data: [
    {
      id: 1,
      description: "Todo 1 description",
      isCompleted: false,
    },
  ],
  filter: "all",
  filteredData: [],
};

const todoSlice = createSlice({
  name: "TODO",
  initialState: todoInitialState,
  reducers: {
    getFilteredData: (state, { payload }) => {
      state.filteredData = filterList(payload, state.filter);
    },
    addItem: (state, { payload }) => {
      state.data.push({
        id: Date.now(),
        description: payload,
        isCompleted: false,
      });
    },
    deleteItem: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
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
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
      state.filteredData = filterList(state.data, payload);
    },
  },
});

export const todoActionTypes = todoSlice.actions;

export default todoSlice.reducer;
