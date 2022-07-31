import { createContext, useEffect, useState } from "react";
import api from "../services/api";


export const ModalsContext = createContext({} as IProps);

type IProps = {
  modalTrash: boolean;
  handleModalTrash():void;
  handleTrash(id:number, url:string):Promise<void>;

  modalEdit: boolean;
  handleModalEdit():void;

  modalAdd: boolean;
  handleModalAdd():void;
}

export const ModalsProvider = (props:any) => {
  const [modalTrash, setModalTrash] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalAdd, setModalAdd] = useState<boolean>(false);
 
  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleModalAdd = () => {
    setModalEdit(!modalAdd);
  }


  const handleTrash = async (id:number, url:string) => {
    try {
      await api.delete(`${url}/${id}`);
      handleModalTrash();
    } catch (error) {
      alert(error);
    }    
  }

  return (
    <ModalsContext.Provider value={{
      modalTrash, 
      handleModalTrash, 
      handleTrash,
      modalEdit,
      handleModalEdit,
      modalAdd,
      handleModalAdd}}>
        {props.children}
    </ModalsContext.Provider>
  )
}