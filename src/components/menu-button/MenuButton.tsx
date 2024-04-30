import { FC } from "react";
import { useStore } from "../../store/useStore";
import styles from "./MenuButton.module.css";

const MenuButton: FC = () => {
  const { navOpen, setNavOpen } = useStore();

  const clickHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <button
      className={styles.button}
      onClick={clickHandler}
      aria-controls="nav"
      aria-expanded={navOpen}
    >
      {navOpen ? "閉じる" : "検索メニュー"}
    </button>
  );
};

export default MenuButton;
