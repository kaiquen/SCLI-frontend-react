import { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import api from "../services/api";

export const GerenteContext = createContext({} as IProps);

type IProps = {
  gerente: IGerente[];
}

export type IGerente = {
  id:number;
  nome:string;
  cpf:string;
  uf:string;
  cidade:string;
  bairro:string;
  rua:string;
  email:string;
  senha:string;
}

export const GerenteProvider = (props:any) => {
  const [gerente, setGerente] = useState<IGerente[]>([]);

 
  useEffect (() => {
    (async () => {
      const {data} = await api.get("/gerente");
      setGerente(data);
      console.log(data);
    })()
  }, []);

  return (
    <GerenteContext.Provider value={{gerente}}>
      {props.children}
    </GerenteContext.Provider>
  )
}

/*
  () => {
    const storedValues = localStorage.getItem("gerente");
    return storedValues ? JSON.parse(storedValues) : [];
  }

   useEffect(() => {
    localStorage.setItem("gerente", JSON.stringify(gerente));
  }, [gerente])

*/