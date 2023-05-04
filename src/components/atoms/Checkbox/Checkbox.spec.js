import Checkbox from './Checkbox';
import { render, screen } from '@testing-library/react';

const onChangeMock = jest.fn();

describe('Checkbox component', () => {
  it('should render Checkbox component', () => {
    render(<Checkbox checked={false} onChange={onChangeMock} />);
    const element = screen.getByRole('checkbox');

    expect(element).toBeInTheDocument();
  });
});
