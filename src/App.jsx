import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import "./styles/App.scss";

export default function App() {

  return (
    <>
      <Cabecalho />

      <Outlet />

      <Rodape />
    </>
  );
}
