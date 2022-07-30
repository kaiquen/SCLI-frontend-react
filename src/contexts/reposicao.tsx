import { createContext, useEffect, useState } from "react";
import api from "../services/api";


export const ReposicaoContext = createContext({});

type reposicao = {

}

export const ReposicaoProvider = (props:any) => {
  const [reposicao, setReposicao] = useState([]);
  useEffect(() => {
    const getReposicao = async () => {
      const data = await api.get("/reposicao");
      console.log(data);  
    }

    getReposicao()
  }, [])
  return (
    <ReposicaoContext.Provider value={{}}>
      {props.children}
    </ReposicaoContext.Provider>
  )
}