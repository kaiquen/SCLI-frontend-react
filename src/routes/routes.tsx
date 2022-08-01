import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Rep } from "../pages/Rep"
import { Gerente } from "../pages/Rep/Gerente"
import { Reposicao } from "../pages/Rep/Reposicao"
import { Orc } from "../pages/Orc"
import { Cliente } from "../pages/Orc/Cliente"
import { Orcamento } from "../pages/Orc/Orcamento"

const MainRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="rep" element={<Rep />} />
      <Route path="rep/gerente" element={<Gerente />} />
      <Route path="rep/reposicao" element={<Reposicao />} />
      <Route path="orc" element={<Orc />} />
      <Route path="orc/cliente" element={<Cliente />} />
      <Route path="orc/orcamento" element={<Orcamento />} />
    </Routes>
  )
}

export {MainRouter}