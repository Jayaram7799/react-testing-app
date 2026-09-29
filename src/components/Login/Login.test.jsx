import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Login from "./Login";

describe("Test Login Application", () => {
  it("shows welcome message when user clicks Login", async () => {
    render(<Login />);
    const user = userEvent.setup();
    expect(screen.queryByText("Welcome Jay")).not.toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: "Login",
    });
    await user.click(button);
    expect(screen.getByText("Welcome Jay")).toBeInTheDocument();
  });
});
