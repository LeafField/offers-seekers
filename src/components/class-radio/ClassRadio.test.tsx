import { describe, test, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import ClassRadio from "./ClassRadio";
import { radioData } from "./RadioData";

describe("ClassRadioコンポーネントの単体テスト", () => {
  beforeEach(() => {
    render(<ClassRadio />);
  });

  test("コンポーネントが正しくレンダリングされているか", () => {
    expect.assertions(2);
    radioData.forEach((radio) => {
      expect(screen.getByRole("radio", { name: radio.label })).toBeDefined();
    });
  });
});
