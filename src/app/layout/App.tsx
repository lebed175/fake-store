import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/ui/Header";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>

      <main className={styles.container}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
