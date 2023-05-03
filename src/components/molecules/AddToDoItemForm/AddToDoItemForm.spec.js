import AddToDoItemForm from './AddToDoItemForm';
import { render, screen } from '@testing-library/react';

const onChangeMock = jest.fn();
const onSubmitMock = jest.fn();

describe('AddToDoItemForm component', () => {
  it('should render AddToDoItemForm component', () => {
    render(
      <AddToDoItemForm
        value="example"
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
      />
    );
    const element = screen.getByTestId('item-form');

    expect(element).toBeInTheDocument();
  });
});
