import { FC } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Table from "./components/table/Table";
import useBodyOverflowListener from "./hooks/useBodyOverflowListener";
import MenuButton from "./components/menu-button/MenuButton";

const App: FC = () => {
  const { overflowY } = useBodyOverflowListener();
  return (
    <div className={styles.body} style={overflowY}>
      <Header />
      <div className={styles.container}>
        <Nav />
        <Table />
      </div>
      <MenuButton />
    </div>
  );
};

export default App;
