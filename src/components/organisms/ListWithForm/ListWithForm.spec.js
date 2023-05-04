import ListWithForm from './ListWithForm';
import { render, screen } from '@testing-library/react';
import * as ReactRedux from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const dataMock = [
  {
    id: 1,
    description: 'description 1',
    isCompleted: false,
  },
  {
    id: 2,
    description: 'description 2 ',
    isCompleted: false,
  },
  {
    id: 3,
    description: 'description 3',
    isCompleted: false,
  },
];

describe('ListWithForm component', () => {
  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => jest.fn());
    jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => dataMock);
  });

  it('should render ListWithForm component', () => {
    render(<ListWithForm />);
    const element = screen.getByTestId('list-with-form');

    expect(element).toBeInTheDocument();
  });
});
