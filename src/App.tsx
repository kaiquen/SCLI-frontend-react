import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reposicao } from "./pages/Reposicao";
import "./global/styles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reposicao" element={<Reposicao />} />
      </Routes>
    </>
  );
}

export default App;
