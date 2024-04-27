import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>求人・求職者数</h1>
    </header>
  );
};

export default Header;
