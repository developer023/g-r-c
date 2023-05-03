import Button from './Button';
import { render, screen } from '@testing-library/react';

const onClickMock = jest.fn();

describe('Button component', () => {
  it('should render Button component', () => {
    render(<Button onClick={onClickMock}>Example</Button>);
    const element = screen.getByRole('button');

    expect(element).toBeInTheDocument();
  });
});
