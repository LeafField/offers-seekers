import { http, HttpResponse } from "msw";
import { mockPrefectures } from "./mockPrefectures";
import { mockSeekersBload } from "./mockSeekersbload";
import { mockSeekersMiddle } from "./mockSeekersMiddle";

export const handler = [
  http.get(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, () => {
    return HttpResponse.json(mockPrefectures);
  }),

  http.get(
    "https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio",
    ({ request }) => {
      const url = new URL(request.url);
      const classNumber = url.searchParams.get("class");
      if (classNumber === "2") {
        return HttpResponse.json(mockSeekersMiddle);
      } else {
        return HttpResponse.json(mockSeekersBload);
      }
    },
  ),
];
