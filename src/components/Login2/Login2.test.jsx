import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { describe, it, expect, afterEach } from "vitest";

import { cleanup } from "@testing-library/react";

import Login from "./Login2";

afterEach(() => {
  cleanup();
});

describe("Test Login Page", () => {
  it("shows email validation error when user clicks Login", async () => {
    render(<Login />);

    const user = userEvent.setup();

    const button = screen.getByRole("button", {
      name: "Login",
    });

    await user.click(button);

    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("does not show email validation error when email is provided", async () => {
    render(<Login />);

    const user = userEvent.setup();

    const emailInput = screen.getByLabelText("Email");

    const button = screen.getByRole("button", {
      name: "Login",
    });

    await user.type(emailInput, "jay@example.com");

    await user.click(button);

    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  });
});
