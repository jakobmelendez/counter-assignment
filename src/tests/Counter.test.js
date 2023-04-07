// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount === 0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');

  fireEvent.click(screen.getByText(/\+/i))

  const postCount = screen.getByTestId('count');

  expect(initialCount + 1 === postCount);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');

  fireEvent.click(screen.getByText(/-/i))

  const postCount = screen.getByTestId('count');

  expect(initialCount - 1 === postCount);
});
