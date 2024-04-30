import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useBodyOverflowListener from "./useBodyOverflowListener";
import { useStore } from "../store/useStore";

describe("useBodyOberflowListenerの単体テスト", () => {
  test("職業分類、大分類(class=1)を指定している時、カスタムプロパティの値が100lvh", () => {
    const { result } = renderHook(() => useBodyOverflowListener());
    expect(result.current.overflowY).toEqual({
      "--overflow-row": "100lvh",
    });
  });

  test("中分類を指定している時、カスタムプロパティの値が101lvh", () => {
    const { result } = renderHook(() => useBodyOverflowListener());
    const { result: store } = renderHook(() => useStore());
    act(() => {
      store.current.setResasParameters({ class: "2" });
    });
    expect(result.current.overflowY).toEqual({
      "--overflow-row": "101lvh",
    });
  });
});
