import { useState } from "react";
import { IRealizarServicoEmpresa } from "../../../../../models/realizarServicoEmpresa";
import styles from "./styles.module.scss";

type IProps = {
  realizarEmpresa: IRealizarServicoEmpresa;
  handleModalEdit():void;
  modalEdit: boolean;
}

const ModalEdit = ({modalEdit, handleModalEdit, realizarEmpresa}:IProps) => {
 
  return (
    <div 
      className={styles.modal}
      style={modalEdit ? {display:"flex"} : {display: "none"}}>
      <div className={styles.modal__content}>
      
      </div>  
      <div className={styles.modal__overlay} onClick={handleModalEdit}></div>
    </div>   
  )
}

export { ModalEdit }