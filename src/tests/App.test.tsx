import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import { DATA } from "../data";


const render = (ui: JSX.Element, {route = '/'} = {}) => {
  // https://testing-library.com/docs/example-react-router/#reducing-boilerplate
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, {wrapper: BrowserRouter});
}


test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/Unit Converter/i);
  expect(header).toBeInTheDocument();
});


test('renders unit category buttons', () => {
  render(<App />);
  DATA.forEach(unitCategory => {
    expect(screen.getByText(unitCategory.categoryName)).toBeInTheDocument();
  });
})


test('back button works', () => {
  // Test with only one unit category
  render(<App />);
  userEvent.click(screen.getByText(DATA[0].categoryName));
  userEvent.click(screen.getByText(/back/i));
  const header = screen.getByText(/Unit Converter/i);
  expect(header).toBeInTheDocument();
})


test('navigation to unit categories renders unit names', () => {
  // Test with all unit categories
  render(<App />);
  DATA.forEach(unitCategory => {
    userEvent.click(screen.getByText(unitCategory.categoryName));
    unitCategory.units.forEach(unit => {
      if (unit.unitId !== 'separator') {
        expect(screen.getByText(unit.unitName)).toBeInTheDocument();
      }
    })
    userEvent.click(screen.getByText(/back/i));
  });
})


test('typing `123` renders as `123` correctly', () => {
  // Test with only one unit category and one unit
  const text = '123';
  const category = DATA[0];
  const unit = category.units[0];

  render(<App />);
  userEvent.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  userEvent.type(input, text);
  expect(input.value).toEqual(text);
})


test('typing `1234` renders as `1,234` correctly', () => {
  // Test with only one unit category and one unit
  const text = '1234';
  const category = DATA[0];
  const unit = category.units[0];

  render(<App />);
  userEvent.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  userEvent.type(input, text);
  expect(input.value).toEqual('1,234');
})


test('typing `123456` renders as `123,456` correctly', () => {
  // Test with only one unit category and one unit
  const text = '123456';
  const category = DATA[0];
  const unit = category.units[0];

  render(<App />);
  userEvent.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  userEvent.type(input, text);
  expect(input.value).toEqual('123,456');
})
