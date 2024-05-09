import { FC } from "react";
import Prefectures from "../select-group/prefectures/Prefectures";
import MatterSelect from "../select-group/matter/MatterSelect";
import YearSelect from "../select-group/year/YearSelect";
import ClassRadio from "../class-radio/ClassRadio";
import useNavHidden from "../../hooks/useNavHidden";
import styles from "./Nav.module.css";

const Nav: FC = () => {
  const { hidden, navOpen, transition } = useNavHidden();

  return (
    <nav
      id="nav"
      className={styles.nav}
      aria-hidden={hidden ? !navOpen : false}
      data-transition={transition}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>検索条件</h2>
        <Prefectures />
        <MatterSelect />
        <YearSelect />
        <ClassRadio />
      </div>
    </nav>
  );
};

export default Nav;
