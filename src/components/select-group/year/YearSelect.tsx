import { FC } from "react";
import styles from "./YearSelect.module.css";

const YearSelect: FC = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="year" className={styles.label}>
        年度
      </label>
      <select name="year" id="year" className={styles.yearSelect}>
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
