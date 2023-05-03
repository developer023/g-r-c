import { createSelector } from '@reduxjs/toolkit';

const todoStateSelector = (state) => state.todo;

export const getDataSelector = createSelector(
  todoStateSelector,
  (todo) => todo.data
);

export const getFilterSelector = createSelector(
  todoStateSelector,
  (todo) => todo.filter
);

export const getFilteredDataSelector = createSelector(
  todoStateSelector,
  (todo) => todo.filteredData
);
