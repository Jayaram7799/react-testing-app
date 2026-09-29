import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Product from "./Product";

describe("Test Product Details Page", () => {
  it("verifies the product name ", async () => {
    render(<Product />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const product = await screen.findByText("Laptop");

    expect(product).toBeInTheDocument();
  });
});
