import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useStore } from "./useStore";

describe("useStoreの単体テスト", () => {
  test("resasParametersの初期値が正しく設定されているか", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.resasParameters).toEqual({
      class: "1",
      matter: "1",
      prefCode: "1",
      year: "2012",
    });
  });

  test("一つの値を変更した時、その値だけ変更されて他の値は保持される", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setResasParameters({ prefCode: "2" });
    });
    expect(result.current.resasParameters).toEqual({
      class: "1",
      matter: "1",
      prefCode: "2",
      year: "2012",
    });
  });

  test("navOpenの初期値がfalseであるか", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.navOpen).toBeFalsy();
  });

  test("setNavOpenにtrueを入力したら、navOpenの値もtrueになる", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setNavOpen(true);
    });
    expect(result.current.navOpen).toBeTruthy();
  });
});
