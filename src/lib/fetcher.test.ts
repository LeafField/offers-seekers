import { describe, test, expect, vi, afterEach } from "vitest";
import { prefecturesFetcher, seekersFetcher } from "./fetcher";
import { mockPrefectures } from "../../mocks/mockPrefectures";
import { mockSeekersBload } from "../../mocks/mockSeekersbload";
import { mockSeekersMiddle } from "../../mocks/mockSeekersMiddle";
import axios from "axios";

describe("prefecturesFetcherの単体テスト", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("正常系：都道府県の値が正しく取得できる", async () => {
    expect.assertions(1);
    const testData = await prefecturesFetcher();
    return expect(testData).toEqual(mockPrefectures);
  });

  test("異常系:都道府県の取得に失敗した時、エラーがスローされる", async () => {
    expect.assertions(1);
    const mockError = new Error("エラーテスト");
    vi.spyOn(axios, "get").mockRejectedValue(mockError);
    try {
      await prefecturesFetcher();
    } catch (err) {
      expect(err).toEqual(mockError);
    }
  });
});

describe("seekersFetcherの単体テスト", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("正常系:「職業中分類で見る」が選択されている時、mockSeekersMiddleが取得される", async () => {
    expect.assertions(1);
    const testData = await seekersFetcher("class=2");
    return expect(testData).toEqual(mockSeekersMiddle);
  });

  test("正常系:「職業大分類で見る」が選択されている時、mockSeekersbloadが取得される", async () => {
    expect.assertions(1);
    const testData = await seekersFetcher("class=1");
    return expect(testData).toEqual(mockSeekersBload);
  });

  test("異常系:求人・求職者数のデータが取得できなかった場合、エラーがスローされる", async () => {
    expect.assertions(1);
    const mockError = new Error("エラーテスト");
    vi.spyOn(axios, "get").mockRejectedValue(mockError);
    try {
      await seekersFetcher("class=1");
    } catch (err) {
      expect(err).toEqual(mockError);
    }
  });
});
