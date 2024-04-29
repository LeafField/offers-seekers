import { FC } from "react";
import styles from "./Table.module.css";
import useSWRImmutable from "swr/immutable";
import { useStore } from "../../store/useStore";
import { seekersFetcher } from "../../lib/fetcher";
import Column from "../table-column/Column";

const Table: FC = () => {
  const { resasParameters } = useStore();
  const { class: classNumber, matter, prefCode, year } = resasParameters;
  const { data } = useSWRImmutable(
    `prefCode=${prefCode}&matter=${matter}&year=${year}&class=${classNumber}`,
    seekersFetcher,
  );

  return (
    <main>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.left} align="left">
              職業分類名
            </th>
            <th className={styles.right} align="right">
              求人・求職者数
            </th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {data &&
            data.result.data.map((columnData, i) => (
              <Column key={i} {...columnData} />
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
