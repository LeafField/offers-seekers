import { FC } from "react";
import Prefectures from "../select-group/prefectures/Prefectures";
import MatterSelect from "../select-group/matter/MatterSelect";
import YearSelect from "../select-group/year/YearSelect";
import ClassRadio from "../class-radio/ClassRadio";
import styles from "./Nav.module.css";

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.title}>検索条件</h2>
      <div className={styles.container}>
        <Prefectures />
        <MatterSelect />
        <YearSelect />
        <ClassRadio />
      </div>
    </nav>
  );
};

export default Nav;
