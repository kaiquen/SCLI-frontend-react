import { useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IGerente } from "../../../../models/gerente";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlGerente = "http://localhost:8080/gerente";

type IProps = {
  gerente:IGerente
  modalEdit: boolean;
  modalTrash: boolean;
  handleModalTrash():void;
  handleModalEdit():void;
}

const Card = ({gerente, modalTrash, modalEdit, handleModalTrash, handleModalEdit}:IProps) => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>{gerente.nome}</p>

        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash}/>
        </div> 

        <ModalTrash id={gerente.id} url={baseUrlGerente} modalTrash={modalTrash} handleModalTrash={handleModalTrash}/>
        <ModalEdit gerente={{...gerente}} modalEdit={modalEdit} handleModalEdit={handleModalEdit}/>
    </div>
  )
}

export { Card };