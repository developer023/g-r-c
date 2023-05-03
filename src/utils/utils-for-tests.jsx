import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import todoReducer from 'redux/todo/slice';

function renderWithProviders(
  ui,
  {
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { todo: todoReducer },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;

renderWithProviders.propTypes = {
  ui: PropTypes.element.isRequired,
  store: PropTypes.shape({}).isRequired,
};
