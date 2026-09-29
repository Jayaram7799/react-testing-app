import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";
describe("Test Counter Application", () => {
  it("increments count when button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(button);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
