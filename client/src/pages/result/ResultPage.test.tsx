import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import ResultPage from './ResultPage';

test('displays success message and navigates back to home', () => {
  render(
    <MemoryRouter>
      <ResultPage />
    </MemoryRouter>
  );

  const successImg = screen.getByAltText('Success');
  const successMessage = screen.getByText('Your form submission has been received !');
  const homeButton = screen.getByText('Home');

  expect(successImg).toBeInTheDocument();
  expect(successMessage).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();

  userEvent.click(homeButton);

  // Wait for navigation to complete before asserting
  expect(screen.getByText('Create')).toBeInTheDocument();
});
