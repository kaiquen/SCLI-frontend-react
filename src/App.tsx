import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reposicao } from "./pages/Reposicao";
import { Orcamento } from "./pages/Orcamento";
import "./global/styles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reposicao" element={<Reposicao />} />
        <Route path="orcamento" element={<Orcamento />} />
      </Routes>
    </>
  );
}

export default App;
