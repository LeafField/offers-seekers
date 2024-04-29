import { ChangeEvent, FC } from "react";
import styles from "./YearSelect.module.css";
import { useStore } from "../../../store/useStore";

const YearSelect: FC = () => {
  const { resasParameters, setResasParameters } = useStore();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setResasParameters({ year: String(e.target.value) });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="year" className={styles.label}>
        年度
      </label>
      <select
        name="year"
        id="year"
        className={styles.yearSelect}
        value={resasParameters.year}
        onChange={changeHandler}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <option value={2012 + i} key={i}>
            {2012 + i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
