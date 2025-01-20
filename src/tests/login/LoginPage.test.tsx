import LoginPage from "@/page/login/LoginPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
// import userEvent from "@testing-library/user-event";
// const userTest = { email: 'mario@gmail.com', password: '12345' };

describe("LoginPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
  })

  it("should render form", async () => {
    const titleH1 = screen.getByText("Inicio SnapLink", { selector: "h1" });
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByTestId("login-button");

    expect(titleH1).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  })
});