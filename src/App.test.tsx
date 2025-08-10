import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name and navigation', () => {
  render(<App />);
  
  // Test for the unique site name
  const siteNameElement = screen.getByText(/Zarrin/i);
  expect(siteNameElement).toBeInTheDocument();
  
  // Test for elements that appear multiple times using getAllByText
  const blogNavItems = screen.getAllByText(/Blog/i);
  expect(blogNavItems.length).toBeGreaterThan(0);
  
  const aboutNavItems = screen.getAllByText(/About/i);
  expect(aboutNavItems.length).toBeGreaterThan(0);
  
  // Test for Contact Us elements (appears in both desktop and mobile nav)
  const contactUsElements = screen.getAllByText(/Contact Us/i);
  expect(contactUsElements.length).toBeGreaterThan(0);
  
  // Test for the main heading
  const mainHeading = screen.getByText(/How AI Will Change the Future/i);
  expect(mainHeading).toBeInTheDocument();
});
