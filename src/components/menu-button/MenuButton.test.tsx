import { describe, test, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuButton from "./MenuButton";

describe("MenuButtonコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<MenuButton />);
  });

  test("コンポーネントが正しく表示されているか", () => {
    expect(screen.getByRole("button", { name: "検索メニュー" })).toBeDefined();
  });

  test("ボタンをクリックした際、閉じるボタンに変わっているか", async () => {
    await userEvent.click(screen.getByRole("button"));
    return expect(screen.getByRole("button", { name: "閉じる" })).toBeDefined();
  });
});
