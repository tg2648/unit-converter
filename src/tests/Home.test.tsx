import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import { DATA } from '../data';


const render = (ui: JSX.Element, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, {wrapper: Router});
}

test('renders header', () => {
  render(<Home />);
  const header = screen.getByText(/Unit Converter/i);
  expect(header).toBeInTheDocument();
});
