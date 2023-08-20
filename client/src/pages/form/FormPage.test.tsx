
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import FormPage from './FormPage';

// Mock axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('FormPage', () => {
  it('submits the form successfully', async () => {
    // Mock the axios.post function to resolve
    mockedAxios.post.mockResolvedValue({});

    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const phoneNumberInput = screen.getByLabelText('Phone Number');
    const dobInput = screen.getByLabelText('Date of Birth');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });

    fireEvent.click(submitButton);

    // Wait for the asynchronous action to complete
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled();
    });
  });

  it('displays error when form submission fails', async () => {
    // Mock the axios.post function to reject
    mockedAxios.post.mockRejectedValue(new Error('Submission failed'));

    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    // Wait for the asynchronous action to complete
    await waitFor(() => {
      const errorAlert = screen.getByText('Error creating data:');
      expect(errorAlert).toBeInTheDocument();
    });
  });
});
