import { FC } from "react";
import styles from "./Prefectures.module.css";
import useSWRImmutable from "swr/immutable";
import { prefecturesFetcher } from "../../../lib/fetcher";

const Prefectures: FC = () => {
  const { data } = useSWRImmutable("prefectures", prefecturesFetcher);

  return (
    <div className={styles.container}>
      <label htmlFor="prefectures" className={styles.label}>
        都道府県
      </label>
      <select id="prefectures" className={styles.prefectures}>
        {data &&
          data.result.map((value) => (
            <option value={value.prefCode} key={value.prefCode}>
              {value.prefName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Prefectures;
