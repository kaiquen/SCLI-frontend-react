import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reposicao as Rep } from "./pages/Reposicao";
import { Orcamento } from "./pages/Orcamento";
import { Cliente } from "./pages/Cliente";
import "./global/styles.scss";
import { Gerente } from "./components/Gerente";
import { Reposicao } from "./components/Reposicao";
import { GerenteContext, GerenteProvider } from "./contexts/gerente";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="rep" element={<Rep />} />
        <Route path="rep/gerente" element={<Gerente />} />
        <Route path="rep/reposicao" element={<Reposicao />} />
        <Route path="orcamento" element={<Orcamento />} />
        <Route path="cliente" element={<Cliente />} />
      </Routes>
    </>
  );
}

export default App;
