import { describe, test, expect, beforeEach } from "vitest";
import { screen, render, renderHook, act } from "@testing-library/react";
import Table from "./Table";
import { useStore } from "../../store/useStore";

describe("Tableコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<Table />);
  });

  test("非同期処理を終え、初期表示として「職業大分類を見る」の表示がされているか", async () => {
    expect.assertions(2);

    expect(await screen.findByText("事務的職業")).toBeDefined();
    expect(await screen.getByText("352130人")).toBeDefined();
  });

  test("「職業中分類を見る」を選択した時、正しく表示がされているか", async () => {
    expect.assertions(2);
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setResasParameters({ class: "2" });
    });
    expect(await screen.findByText("一般事務員")).toBeDefined();
    expect(await screen.findByText("その他の運搬等の職業")).toBeDefined();
  });
});
