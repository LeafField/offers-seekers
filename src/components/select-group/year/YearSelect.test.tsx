import { describe, test, expect, beforeEach } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YearSelect from "./YearSelect";

describe("YearSelectコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<YearSelect />);
  });

  test("コンポーネントが正しく表示されているか、初期表示が2012年になっているか", () => {
    expect.assertions(2);
    expect(screen.getByLabelText("年度")).toBeDefined();
    expect(screen.getByDisplayValue(2012)).toBeDefined();
  });

  test("クリック時に年度を選択できるようになっているか", async () => {
    await userEvent.click(screen.getByLabelText("年度"));
    await userEvent.click(screen.getByText("2020"));
    await waitFor(() => {
      expect(screen.findByDisplayValue("2020")).toBeDefined();
    });
  });
});
