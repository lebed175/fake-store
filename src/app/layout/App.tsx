import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/ui/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
