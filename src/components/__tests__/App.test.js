import { fireEvent, render, screen } from "@testing-library/react";
import App from "./../App";
import "@testing-library/jest-dom";

describe("String calculator", () => {
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

  test("should return the number when a single number is provided", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "1" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 1");
    expect(result).toBeInTheDocument();
  });

  test("should return the addition of numbers when multiple comma separeted valid numbers are provided", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "1,5,6" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 12");
    expect(result).toBeInTheDocument();
  });

  test("should return the addition of numbers when multiple valid numbers  provided in new lines", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "1\n2\n5\n3" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 11");
    expect(result).toBeInTheDocument();
  });

  test("should return the addition of numbers when multiple valid numbers are provided in new lines or comma separated", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "1\n2\n5,3" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 11");
    expect(result).toBeInTheDocument();
  });

  test("should return sum of numbers when beginning of the string will contain a separate line for delimiter", () => {
    render(<App />);
    global.alert = jest.fn();

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "//;\n1;3;5" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 9");
    expect(result).toBeInTheDocument();
  });

  test("should return sum of numbers when beginning of the string will contain a separate line for delimiter *", () => {
    render(<App />);
    global.alert = jest.fn();

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "//\*\n1\*3\*5" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 9");
    expect(result).toBeInTheDocument();
  });

  test("should throw an error when negative numbers are provided", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "-2,4,-6" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Negative numbers are not allowed: -2,-6");
    expect(result).toBeInTheDocument();
  });
});
