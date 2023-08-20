
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useNavigate } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HomePage', () => {
  it('navigates to the form page with valid username', () => {
    const mockNavigate = useNavigate as jest.Mock;
    render(<HomePage />);

    const usernameInput = screen.getByPlaceholderText('@ Hanabi');
    const startButton = screen.getByText('Start');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.click(startButton);

    expect(mockNavigate).toHaveBeenCalledWith('/form/testuser');
  });

  it('shows error message with empty username', () => {
    render(<HomePage />);

    const startButton = screen.getByText('Start');

    fireEvent.click(startButton);

    const errorMessage = screen.getByText('Please enter a username.');

    expect(errorMessage).toBeInTheDocument();
  });
});
