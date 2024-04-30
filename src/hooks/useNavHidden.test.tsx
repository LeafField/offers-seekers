import { renderHook, render, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useNavHidden from "./useNavHidden";
import Nav from "../components/nav/Nav";

describe("useNavHiddenの単体テスト", () => {
  test("windowサイズが767px未満の時、hiddenはtrueになる", () => {
    Object.defineProperty(window, "innerWidth", { value: 500 });
    const { result } = renderHook(() => useNavHidden());
    expect(result.current.hidden).toBeTruthy();
  });

  test("767px以上の時、hiddenがtrueになる", () => {
    Object.defineProperty(window, "innerWidth", { value: 800 });
    const { result } = renderHook(() => useNavHidden());
    expect(result.current.hidden).toBeFalsy();
  });

  test("resizeイベントは正しく発火するか", async () => {
    render(<Nav />);
    Object.defineProperty(window, "innerWidth", { value: 800 });
    const { result } = renderHook(() => useNavHidden());
    expect(result.current.hidden).toBeFalsy();

    Object.defineProperty(window, "innerWidth", {
      value: 500,
      writable: true,
      configurable: true,
    });
    global.dispatchEvent(new Event("resize"));
    await waitFor(() => {
      expect(result.current.hidden).toBeTruthy();
      expect(result.current.hidden).not.toBeFalsy();
    });

    Object.defineProperty(window, "innerWidth", { value: 900 });
    global.dispatchEvent(new Event("resize"));
    await waitFor(() => {
      expect(result.current.hidden).toBeFalsy();
      expect(result.current.hidden).not.toBeTruthy();
    });
  });
});
