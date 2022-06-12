import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteInput from './FavoriteInput';

describe('Favorite Input', () => {
  it('calls onChange correct number of times', async () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'Lion');

    await waitFor(() => expect(onChangeMock).toHaveBeenCalledTimes(4));
  });
  it('calls onChange with correct argument(s) on each input', async () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'Ox');

    await waitFor(() => expect(onChangeMock).toHaveBeenNthCalledWith(1, 'O'));
    await waitFor(() => expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox'));
  });

  it('input has correct values', async () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'Whale');

    await waitFor(() => expect(input).toHaveValue('Whale'));
  });
});
