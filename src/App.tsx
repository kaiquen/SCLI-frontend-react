import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reposicao } from "./pages/Reposicao";
import { Orcamento } from "./pages/Orcamento";
import { Cliente } from "./pages/Cliente";
import "./global/styles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reposicao" element={<Reposicao />} />
        <Route path="orcamento" element={<Orcamento />} />
        <Route path="cliente" element={<Cliente />} />
      </Routes>
    </>
  );
}

export default App;
