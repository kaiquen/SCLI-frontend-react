import { useContext } from "react";
import { ReposicaoContext } from "../contexts/reposicao";

export const useReposicao = () => useContext(ReposicaoContext);