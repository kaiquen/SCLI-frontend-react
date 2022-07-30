import { useContext } from "react";
import { GerenteContext } from "../contexts/gerente";

export const useGerente = () => useContext(GerenteContext);