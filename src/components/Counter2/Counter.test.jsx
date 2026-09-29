import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Testing Async Counter Application", () => {
  it("increments count when button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(button);
    expect(await screen.findByText("Count: 1")).toBeInTheDocument();
  });
});
