import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

test("renders dark mode component", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

test("toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;

  expect(inputElement.checked).toEqual(false);

  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);

  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});
