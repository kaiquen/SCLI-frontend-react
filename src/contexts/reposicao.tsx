import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { GerenteProvider, IGerente } from "./gerente";


export const ReposicaoContext = createContext({} as IProps);

type IProps = {
  reposicao: IReposicao[];
}

type IFornecedor = {
  id:number;
  nome:string;
  cpf:string;
  uf:string;
  cidade:string;
  bairro:string;
  rua:string;
}

export type IReposicao = {
  id:string;
  quantidade:string;
  gerente: IGerente;
  fornecedor: IFornecedor;
}

export const ReposicaoProvider = (props:any) => {
  const [reposicao, setReposicao] = useState<IReposicao[]>([]);
  
  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [])

  return (
    <ReposicaoContext.Provider value={{reposicao}}>
      <GerenteProvider>
        {props.children}
      </GerenteProvider>
    </ReposicaoContext.Provider>
  )
}