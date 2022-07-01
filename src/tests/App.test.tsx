import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import { DATA } from '../data';


const render = (ui: JSX.Element, {route = '/'} = {}) => {
  // https://testing-library.com/docs/example-react-router/#reducing-boilerplate
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {wrapper: Router}),
  }
}


test('renders header', () => {
  const {user} = render(<App />);
  const header = screen.getByText(/Unit Converter/i);
  expect(header).toBeInTheDocument();
});


test('renders unit category buttons', () => {
  const {user} = render(<App />);
  DATA.forEach(unitCategory => {
    expect(screen.getByText(unitCategory.categoryName)).toBeInTheDocument();
  });
})


test('back button works', async () => {
  // Test with only one unit category
  const {user} = render(<App />);
  await user.click(screen.getByText(DATA[0].categoryName));
  await user.click(screen.getByText(/back/i));
  const header = screen.getByText(/Unit Converter/i);
  expect(header).toBeInTheDocument();
})


test('navigation to unit categories renders unit names', async () => {
  // Test with all unit categories
  const {user} = render(<App />);
  for (const unitCategory of DATA) {
    await user.click(screen.getByText(unitCategory.categoryName));
    unitCategory.units.forEach(unit => {
      if (unit.unitId !== 'separator') {
        expect(screen.getByText(unit.unitName)).toBeInTheDocument();
      }
    })
    await user.click(screen.getByText(/back/i));
  }
})


test('typing `123` renders as `123` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '123';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual(text);
})


test('typing `1234` renders as `1,234` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '1234';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual('1,234');
})


test('typing `123456` renders as `123,456` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '123456';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual('123,456');
})

test('typing `1.5` renders as `1.5` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '1.5';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual('1.5');
})

test('typing `-1.5` renders as `-1.5` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '-1.5';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual('-1.5');
})

test('typing `-123567.8` renders as `-123,567.8` correctly', async () => {
  // Test with only one unit category and one unit
  const text = '-123567.8';
  const category = DATA[0];
  const unit = category.units[0];

  const {user} = render(<App />);
  await user.click(screen.getByText(category.categoryName));

  const input = screen.getByLabelText(unit.unitName) as HTMLInputElement;
  await user.type(input, text);
  expect(input.value).toEqual('-123,567.8');
})
