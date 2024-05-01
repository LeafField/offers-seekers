import { describe, test, expect, beforeEach } from "vitest";
import { screen, render, waitFor, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import { useStore } from "../../store/useStore";

describe("Navコンポーネントによる結合テスト", () => {
  beforeEach(() => {
    render(<Nav />);
  });

  test("コンポーネントが正しくレンダリングされているか", async () => {
    expect.assertions(7);
    expect(screen.getByRole("heading", { name: "検索条件" })).toBeDefined();
    expect(screen.getByRole("combobox", { name: "表示内容" })).toBeDefined();
    expect(screen.getByRole("combobox", { name: "年度" })).toBeDefined();
    expect(
      screen.getByRole("radio", { name: "職業大分類で見る" }),
    ).toBeDefined();
    expect(
      screen.getByRole("radio", { name: "職業中分類で見る" }),
    ).toBeDefined();
    expect(await screen.findByRole("combobox", { name: "都道府県" }));
    expect(await screen.findByText("北海道")).toBeDefined();
  });

  test("それぞれの要素を選択した時、中央ステートに値が反映される", async () => {
    expect.assertions(2);
    const { result } = renderHook(() => useStore());
    expect(result.current.resasParameters).toEqual({
      prefCode: "1",
      matter: "1",
      year: "2012",
      class: "1",
    });

    await userEvent.selectOptions(
      await screen.findByRole("combobox", { name: "都道府県" }),
      screen.getByText("青森県"),
    );

    await userEvent.selectOptions(
      await screen.findByRole("combobox", { name: "表示内容" }),
      screen.getByText("就職件数"),
    );

    await userEvent.selectOptions(
      screen.getByRole("combobox", { name: "年度" }),
      screen.getByText(2020),
    );

    await userEvent.click(
      screen.getByRole("radio", { name: "職業中分類で見る" }),
    );

    await waitFor(() => {
      expect(result.current.resasParameters).toEqual({
        prefCode: "2",
        matter: "5",
        year: "2020",
        class: "2",
      });
    });
  });
});
