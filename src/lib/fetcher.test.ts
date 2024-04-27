import { describe, test, expect, vi, afterEach } from "vitest";
import { prefecturesFetcher } from "./fetcher";
import { mockPrefectures } from "../../mocks/mockPrefectures";
import axios from "axios";

describe("fetcher.tsの単体テスト", () => {
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
