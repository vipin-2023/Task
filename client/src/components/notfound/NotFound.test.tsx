import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NotFound from './NotFound';

test('renders "Not Found"', () => {
  render(<NotFound />);
  const notFoundText = screen.getByText('Not Found');
  expect(notFoundText).toBeInTheDocument();
});
