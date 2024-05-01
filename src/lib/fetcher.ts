import axios from "axios";
import { PrefecturesFetch, SeekersFetcher } from "../types/fetchtype";

export const prefecturesFetcher = async () => {
  try {
    const res = await axios.get<PrefecturesFetch>(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    );
    const data = res.data;
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const seekersFetcher = async (url: string) => {
  try {
    const res = await axios.get<SeekersFetcher>(
      `https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio?${url}`,
      {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      },
    );
    const data = res.data;
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
