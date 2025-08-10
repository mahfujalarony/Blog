import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name and navigation', () => {
  render(<App />);
  const siteNameElement = screen.getByText(/Zarrin/i);
  expect(siteNameElement).toBeInTheDocument();
  
  const blogNavItem = screen.getByText(/Blog/i);
  expect(blogNavItem).toBeInTheDocument();
  
  const aboutNavItem = screen.getByText(/About/i);
  expect(aboutNavItem).toBeInTheDocument();
});
