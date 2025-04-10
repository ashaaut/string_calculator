import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

test('render string calculator text', () => {
  render(<App />);
  const element = screen.getByText("String Calculator");
  expect(element).toBeInTheDocument();
});
