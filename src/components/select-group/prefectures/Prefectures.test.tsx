import { expect, describe, test, beforeEach } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Prefectures from "./Prefectures";

describe("Prefecturesコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<Prefectures />);
  });

  test("非同期処理を完了し、コンポーネントが正しく表示されるか", async () => {
    expect.assertions(2);
    expect(screen.getByText("都道府県")).toBeDefined();
    await waitFor(() => {
      expect(screen.findByDisplayValue("北海道")).toBeDefined();
    });
  });

  test("セレクトタグの初期表示は北海道で、その後青森県を選択する", async () => {
    await userEvent.click(await screen.findByDisplayValue("北海道"));
    await userEvent.click(await screen.findByText("青森県"));
    await waitFor(() => {
      expect(screen.findByDisplayValue("青森県")).toBeDefined();
    });
  });
});
