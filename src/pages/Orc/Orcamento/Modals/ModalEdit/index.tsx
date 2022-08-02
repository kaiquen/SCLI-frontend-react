import { useState } from "react";
import { IOrcamento } from "../../../../../models/orcamento";
import styles from "./styles.module.scss";

type IProps = {
  orcamento: IOrcamento;
  handleModalEdit(): void;
  modalEdit: boolean;
}

const ModalEdit = ({ modalEdit, handleModalEdit, orcamento }: IProps) => {

  return (
    <div
      className={styles.modal}
      style={modalEdit ? { display: "flex" } : { display: "none" }}>
      <div className={styles.modal__content}>

      </div>
      <div className={styles.modal__overlay} onClick={handleModalEdit}></div>
    </div>
  )
}

export { ModalEdit }