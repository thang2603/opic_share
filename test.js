import React from 'react';
import { render, screen } from '@testing-library/react';
import { useQuery } from 'react-query';
import MyComponent from './MyComponent'; // Adjust the import to your component

// Mock useQuery
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

describe('MyComponent', () => {
  it('displays an error message when useQuery fails', () => {
    // Arrange
    useQuery.mockImplementation(() => ({
      data: null,
      error: new Error('Something went wrong'),
      isLoading: false,
    }));

    // Act
    render(<MyComponent />);

    // Assert
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
