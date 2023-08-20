import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import FormInput from './FormInput';

test('renders label and input', () => {
  render(<FormInput label="Name" name="name" type="text" id={1} value="" onChange={() => {}} />);
  const label = screen.getByText('Name');
  const input = screen.getByRole('textbox');
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('handles change event', () => {
  const handleChange = jest.fn();
  render(<FormInput label="Name" name="name" type="text" id={1} value="" onChange={handleChange} />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'John');
  expect(handleChange).toHaveBeenCalledTimes(4); // 4 characters in 'John'
});

test('renders error message', () => {
  render(
    <FormInput
      label="Email"
      name="email"
      type="email"
      id={2}
      value=""
      onChange={() => {}}
      errorMessage="Invalid email"
    />
  );
  const errorMessage = screen.getByText('Invalid email');
  expect(errorMessage).toBeInTheDocument();
});

// Add more tests for different props and behaviors as needed
