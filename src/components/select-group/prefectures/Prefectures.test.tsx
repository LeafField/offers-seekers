import { expect, describe, test, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import Prefectures from "./Prefectures";

describe("Prefecturesコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<Prefectures />);
  });

  test("非同期処理を完了し、コンポーネントが正しく表示されるか", async () => {
    expect.assertions(2);
    expect(screen.getByText("都道府県")).toBeDefined();
    expect(await screen.findByDisplayValue("北海道")).toBeDefined();
  });
});
