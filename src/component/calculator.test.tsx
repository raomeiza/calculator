import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('test addition', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const two = screen.getByTestId('2')
  const plus = screen.getByTestId('+')
  const equality = screen.getByTestId('=')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(plus)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('3')
});

test('test subtraction', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const two = screen.getByTestId('2')
  const minus = screen.getByTestId('-')
  const equality = screen.getByTestId('=')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(minus)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('-1')
});

test('test multiplication', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const two = screen.getByTestId('2')
  const multiply = screen.getByTestId('*')
  const equality = screen.getByTestId('=')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(multiply)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('2')
});

test('test division', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const two = screen.getByTestId('2')
  const divide = screen.getByTestId('/')
  const equality = screen.getByTestId('=')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(divide)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('0.5')
});

test('test multiplication with fraction', () => {
    render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const dot = screen.getByTestId('.')
  const seven = screen.getByTestId('7')
  const two = screen.getByTestId('2')
  const times = screen.getByTestId('*')
  const equality = screen.getByTestId('=')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(dot)
  fireEvent.click(seven)
  fireEvent.click(times)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('3.4')
});


test('test the ac button. it clears the screen when pressed', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/mode/i);
  const one = screen.getByTestId('1')
  const two = screen.getByTestId('2')
  const divide = screen.getByTestId('/')
  const equality = screen.getByTestId('=')
  const clear = screen.getByTestId('AC')
  const calcScreen = screen.getByTestId('screen')

  fireEvent.click(one)
  fireEvent.click(divide)
  fireEvent.click(two)
  fireEvent.click(equality)
  expect(calcScreen).toHaveTextContent('0.5')
      fireEvent.click(clear)
      expect(calcScreen).toHaveTextContent('0')
});
