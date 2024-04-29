import { screen, render } from "@testing-library/react";
import Column from "./Column";
import { describe, test, expect } from "vitest";

describe("Columnコンポーネントの単体テスト", () => {
  test("bloadName、valueが入力されたとき、正しくレンダリングされるか", () => {
    expect.assertions(2);
    render(<Column broadName="事務的職業" value={352130} />);
    expect(screen.getByText("事務的職業")).toBeDefined();
    expect(screen.getByText("352130人")).toBeDefined();
  });

  test("valueがnullであった場合、人数及び単位の「人」は表示されない", () => {
    render(<Column broadName="事務的職業" value={null} />);
    expect(screen.queryByText("人")).toBeNull();
  });

  test("middleNameが入力されたとき、bloadNameは表示されずmiddleNameだけが表示される", () => {
    expect.assertions(2);
    render(
      <Column broadName="事務的職業" value={null} middleName="一般事務員" />,
    );
    expect(screen.queryByText("事務的職業")).toBeNull();
    expect(screen.getByText("一般事務員")).toBeDefined();
  });
});
