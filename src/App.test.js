import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
test('renders string calculator text', () => {
  render(<App />);
  const linkElement = screen.getByText("String Calculator");
  expect(linkElement).toBeInTheDocument();
});
