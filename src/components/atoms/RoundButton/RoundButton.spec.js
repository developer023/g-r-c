import RoundButton from './RoundButton';
import { Thumb } from 'assets';
import { render, screen } from '@testing-library/react';

const onClickMock = jest.fn();

describe('RoundButton component', () => {
  it('should render RoundButton component', () => {
    render(
      <RoundButton onClick={onClickMock}>
        <Thumb />
      </RoundButton>
    );
    const element = screen.getByRole('button');

    expect(element).toBeInTheDocument();
  });
});
