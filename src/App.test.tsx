import App from './App';
import React from 'react';
import { render, screen } from '@testing-library/react';

it('app render no error', () => {
  render(<App />);
  expect(screen.getByText('hello', { exact: false })).toHaveTextContent('Hello webpack');
});
