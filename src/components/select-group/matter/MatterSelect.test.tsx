import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import MatterSelect from "./MatterSelect";

describe("MatterSelectコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<MatterSelect />);
  });

  test("コンポーネントが正しくレンダリングされているか", () => {
    expect(screen.getByRole("combobox", { name: "表示内容" })).toBeDefined();
    expect(screen.getByText("有効求職者数（総数）")).toBeDefined();
    expect(screen.getByText("有効求職者数（男性）")).toBeDefined();
    expect(screen.getByText("有効求職者数（女性）")).toBeDefined();
    expect(screen.getByText("有効求人数")).toBeDefined();
    expect(screen.getByText("就職件数")).toBeDefined();
  });
});
