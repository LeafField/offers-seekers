import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Appコンポーネントの結合テスト", () => {
  test("Hello Worldが表示されているか", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Hello World" })).toBeDefined();
  });
});
