import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from 'utils/utils-for-tests';
import App from './App';

describe('App.js component', () => {
  it('should render App component', () => {
    const tree = renderWithProviders(<App />);
    const title = screen.getByText(/ToDo/i);

    expect(title).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
