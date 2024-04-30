import { ChangeEvent, FC } from "react";
import styles from "./MatterSelect.module.css";
import { useStore } from "../../../store/useStore";
import useNavHidden from "../../../hooks/useNavHidden";

const MatterSelect: FC = () => {
  const { resasParameters, setResasParameters } = useStore();
  const { hidden, navOpen } = useNavHidden();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setResasParameters({ matter: e.target.value });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="matter" className={styles.label}>
        表示内容
      </label>
      <select
        name="matter"
        id="matter"
        className={styles.matter}
        value={resasParameters.matter}
        onChange={changeHandler}
        tabIndex={hidden && !navOpen ? -1 : 0}
      >
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
