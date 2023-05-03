import Input from './Input';
import { render, screen } from '@testing-library/react';

const onChangeMock = jest.fn();

describe('Input component', () => {
  it('should render Input component', () => {
    render(
      <Input placeholder="Test:" value="test example" onChange={onChangeMock} />
    );
    const element = screen.getByDisplayValue('test example');

    expect(element).toBeInTheDocument();
  });
});
