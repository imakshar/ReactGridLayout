import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('render app component', () => {
  render(<App />);
  const app = screen.getByTestId("App");
  expect(app).toBeInTheDocument();
});
