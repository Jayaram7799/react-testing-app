import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Test Login Page", () => {
  it("shows successful message", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "Login",
    });
    await user.click(button);
    await waitFor(() => {
      expect(screen.getByText("Login successful")).toBeInTheDocument();
    });
  });
});
