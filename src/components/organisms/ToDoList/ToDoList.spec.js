import ToDoList from './ToDoList';
import { render, screen } from '@testing-library/react';

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

describe('ToDoList component', () => {
  it('should render ToDoList component', () => {
    render(<ToDoList data={dataMock} />);
    const element = screen.getByTestId('todo-list');

    expect(element).toBeInTheDocument();
  });
});
