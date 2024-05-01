import { expect, test, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Headerの単体テスト", () => {
  test("コンポーネントが正しくレンダリングされている", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: "求人・求職者数" }),
    ).toBeDefined();
  });
});
