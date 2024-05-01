import { FC } from "react";
import type { Seeker } from "../../types/fetchtype";
import styles from "./Column.module.css";

const Column: FC<Seeker> = ({ broadName, value, middleName }) => {
  return (
    <tr className={styles.column}>
      <td className={styles.left}>{middleName ? middleName : broadName}</td>
      <td className={styles.right}>
        {value}
        {value ? "人" : ""}
      </td>
    </tr>
  );
};

export default Column;
