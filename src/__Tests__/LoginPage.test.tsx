import LoginPage from "../pages/LoginPage";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

test("render sign in form", () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
  const siginLabel = screen.getByTestId("siginLabel");
  expect(siginLabel).toBeInTheDocument();
});

test("render sign in form elements", () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
  const siginLabel = screen.getByTestId("siginLabel");
  const usernameInput = screen.getByTestId("usernameInput");
  const passwordInput = screen.getByTestId("passwordInput");
  const submitButton = screen.getByTestId("submitButton");


  expect(siginLabel).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
