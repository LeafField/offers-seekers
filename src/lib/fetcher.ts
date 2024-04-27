import axios from "axios";
import { PrefecturesFetch } from "../types/fetchtype";

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
