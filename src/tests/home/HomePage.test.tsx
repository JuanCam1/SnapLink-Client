import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

import HomePage from "@/page/home/HomePage";

describe("HomePage", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
  })

  it("should render HomePage", () => {
    const titleP = screen.getByText("SnapLink", { selector: "p" });
    const createLinkButton = screen.getByTestId("create-link-button");
    expect(titleP).toBeInTheDocument();
    expect(createLinkButton).toHaveAttribute("href", "/auth/login");
  });


  it("should render Create Link button navigate to login page", () => {
    const createLinkButton = screen.getByTestId("create-link-button");

    fireEvent.click(createLinkButton);
    expect(window.location.pathname).toBe("/auth/login");
  })
});