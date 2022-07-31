import { Route, Routes } from "react-router-dom"
import { Cliente } from "../pages/Cliente"
import { Home } from "../pages/Home"
import { Orcamento } from "../pages/Orcamento"
import { Rep } from "../pages/Rep"
import { Gerente } from "../pages/Rep/Gerente"
import { Reposicao } from "../pages/Rep/Reposicao"

const MainRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="rep" element={<Rep />} />
      <Route path="rep/gerente" element={<Gerente />} />
      <Route path="rep/reposicao" element={<Reposicao />} />
      <Route path="orcamento" element={<Orcamento />} />
      <Route path="cliente" element={<Cliente />} />
    </Routes>
  )
}

export {MainRouter}