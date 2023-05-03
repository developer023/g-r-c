import RadioInput from './RadioInput';
import { render, screen } from '@testing-library/react';

const onChangeMock = jest.fn();

describe('RadioInput component', () => {
  it('should render RadioInput component', () => {
    render(
      <RadioInput
        id="id"
        type="radio"
        name="filter"
        checked={false}
        onChange={onChangeMock}
      >
        All
      </RadioInput>
    );
    const element = screen.getByRole('radio');

    expect(element).toBeInTheDocument();
  });
});
