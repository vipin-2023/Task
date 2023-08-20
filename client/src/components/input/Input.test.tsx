import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Input from './input';

test('renders heading', () => {
  render(<Input />);
  const heading = screen.getByText('inputcoponanet');
  expect(heading).toBeInTheDocument();
});
