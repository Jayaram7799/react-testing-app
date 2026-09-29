import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
describe("Testing Login Page", () => {
  it("verifies login page", async () => {
    render(<Login />);
    const button = screen.getByRole("button", {
      name: "Login",
    });
    const user = userEvent.setup();

    await user.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("Login successful")).toBeInTheDocument();
  });
});
