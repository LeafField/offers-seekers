import { FC } from "react";
import styles from "./MatterSelect.module.css";

const MatterSelect: FC = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="year" className={styles.label}>
        表示内容
      </label>
      <select name="year" id="year" className={styles.matter}>
        <option value="1">有効求職者数（総数）</option>
        <option value="2">有効求職者数（男性）</option>
        <option value="3">有効求職者数（女性）</option>
        <option value="4">有効求人数</option>
        <option value="5">就職件数</option>
      </select>
    </div>
  );
};

export default MatterSelect;
