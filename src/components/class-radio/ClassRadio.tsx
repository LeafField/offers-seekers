import { ChangeEvent, FC } from "react";
import styles from "./ClassRadio.module.css";
import { radioData } from "./RadioData";
import { useStore } from "../../store/useStore";

const ClassRadio: FC = () => {
  const { resasParameters, setResasParameters } = useStore();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setResasParameters({ class: e.target.value });
  };
  return (
    <div role="group" className={styles.container}>
      {radioData.map((radio) => (
        <label key={radio.id} htmlFor={radio.id}>
          <input
            type="radio"
            name="class"
            id={radio.id}
            value={radio.value}
            checked={resasParameters.class === radio.value}
            onChange={changeHandler}
            className={styles.radio}
            key={radio.id}
          />
          <span className={styles.label}>{radio.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ClassRadio;
