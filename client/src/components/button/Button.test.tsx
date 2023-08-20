import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Button from './Button';

test('renders with text', () => {
  render(<Button text="Click me" />);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  const button = screen.getByText('Click me');
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});

test('applies fill style', () => {
  render(<Button text="Click me" isFilled={true} />);
  const button = screen.getByText('Click me');
  expect(button).toHaveClass('fill-button');
});

// Add more tests for different props and behaviors as needed
