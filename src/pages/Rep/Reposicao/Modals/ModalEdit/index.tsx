import { useState } from "react";
import { IReposicao } from "../../../../../models/reposicao";
import styles from "./styles.module.scss";

type IProps = {
  reposicao: IReposicao;
  handleModalEdit():void;
  modalEdit: boolean;
}

const ModalEdit = ({modalEdit, handleModalEdit, reposicao}:IProps) => {
 
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