import { fireEvent, render, screen } from "@testing-library/react";
import App from "./../App";
import "@testing-library/jest-dom";

test("should render input and calculate button", () => {
  render(<App />);

  const inputElement = screen.getByRole("textbox");
  const calculateButton = screen.getByRole("button");

  expect(inputElement).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test("should return 0 if empty value is provided", () => {
  render(<App />);

  const inputElement = screen.getByRole("textbox");
  const calculateButton = screen.getByRole("button");

  fireEvent.change(inputElement, { target: { value: " " } });
  fireEvent.click(calculateButton);

  const result = screen.getByText("Result: 0");
  expect(result).toBeInTheDocument();
});
