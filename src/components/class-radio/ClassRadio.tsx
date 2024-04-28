import { ChangeEvent, FC, useState } from "react";
import styles from "./ClassRadio.module.css";
import { radioData } from "./RadioData";

const ClassRadio: FC = () => {
  const [test, setTest] = useState("1");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
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
            checked={test === radio.value}
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
