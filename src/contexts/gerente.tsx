import { createContext } from "react";


export const GerenteContext = createContext({});

export const GerenteProvider = (props:any) => {
  return (
    <GerenteContext.Provider value={{}}>
      {props.children}
    </GerenteContext.Provider>
  )
}