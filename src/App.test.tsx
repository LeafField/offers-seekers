import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Appコンポーネントの結合テスト", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("各コンポーネントが正しくマウントされているか", async () => {
    expect.assertions(4);
    expect(
      screen.getByRole("heading", { name: "求人・求職者数" }),
    ).toBeDefined();
    expect(screen.getByRole("heading", { name: "検索条件" })).toBeDefined();
    expect(screen.getByText("職業分類名")).toBeDefined();
    expect(await screen.findByText("事務的職業")).toBeDefined();
  });

  test("職業分類を選択した時、グラフに選択が正しく反映されるか", async () => {
    expect.assertions(1);
    await userEvent.click(
      screen.getByRole("radio", { name: "職業中分類で見る" }),
    );
    expect(await screen.findByText("一般事務員")).toBeDefined();
  });
});
