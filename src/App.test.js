import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("input element", () => {
  render(<App></App>);

  const inputElement = screen.getByRole("textbox");

  expect(inputElement.value).toBe("");
});
test("password element initially empty", () => {
  render(<App></App>);

  const passwordElement = screen.getByLabelText("Password");

  expect(passwordElement.value).toBe("");
});
test("confirmation password element initially empty", () => {
  render(<App></App>);

  const passwordElement = screen.getByLabelText(/confirm password/i);

  expect(passwordElement.value).toBe("");
});

test("should able to type the email", () => {
  render(<App></App>);

  const emailElement = screen.getByRole("textbox", { name: /email/i });

  userEvent.type(emailElement, "sam@gmail.com");

  expect(emailElement.value).toBe("sam@gmail.com");
});

test("should able to type the password", () => {
  render(<App></App>);

  const passwordElement = screen.getByLabelText("Password");

  userEvent.type(passwordElement, "cool");

  expect(passwordElement.value).toBe("cool");
});

test("should able to type the confirm password", () => {
  render(<App></App>);

  const confirmPasswordElement = screen.getByLabelText(/confirm password/i);

  userEvent.type(confirmPasswordElement, "cool");

  expect(confirmPasswordElement).toBe("cool");
});
