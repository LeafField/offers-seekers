import { describe, test, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
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
});
