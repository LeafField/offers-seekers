import { ChangeEvent, FC } from "react";
import styles from "./Prefectures.module.css";
import { prefecturesFetcher } from "../../../lib/fetcher";
import useSWRImmutable from "swr/immutable";
import { useStore } from "../../../store/useStore";
import useNavHidden from "../../../hooks/useNavHidden";

const Prefectures: FC = () => {
  const { data } = useSWRImmutable("prefectures", prefecturesFetcher);
  const { resasParameters, setResasParameters } = useStore();
  const { hidden, navOpen } = useNavHidden();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setResasParameters({ prefCode: e.target.value });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="prefectures" className={styles.label}>
        都道府県
      </label>
      <select
        id="prefectures"
        className={styles.prefectures}
        value={resasParameters.prefCode}
        onChange={changeHandler}
        tabIndex={hidden && !navOpen ? -1 : 0}
      >
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
