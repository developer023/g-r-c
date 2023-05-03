import ListItem from './ListItem';
import { render, screen } from '@testing-library/react';

const onChangeMock = jest.fn();
const onDeleteMock = jest.fn();

describe('ListItem component', () => {
  it('should render ListItem component', () => {
    render(
      <ListItem
        id={1}
        description="description"
        isCompleted={false}
        deleteItem={onDeleteMock}
        changeComplete={onChangeMock}
      />
    );
    const element = screen.getByTestId('list-item');

    expect(element).toBeInTheDocument();
  });
});
