import FilterButtonGroup from './FilterButtonGroup';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const onChangeMock = jest.fn();

describe('FilterButtonGroup component', () => {
  it('should render FilterButtonGroup component', () => {
    render(<FilterButtonGroup onChange={onChangeMock} />);
    const element = screen.getByTestId('filter-button-group');

    expect(element).toBeInTheDocument();
  });
});
