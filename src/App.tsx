import { FC } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Table from "./components/table/Table";

const App: FC = () => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <Nav />
        <Table />
      </div>
    </div>
  );
};

export default App;
