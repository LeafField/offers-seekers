import { http, HttpResponse } from "msw";
import { mockPrefectures } from "./mockPrefectures";

export const handler = [
  http.get(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, () => {
    return HttpResponse.json(mockPrefectures);
  }),
];
