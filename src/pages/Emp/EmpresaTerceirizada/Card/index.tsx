import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IEmpresaTerceirizada } from "../../../../models/empresaTerceirizada";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlEmpresa = "http://localhost:8080/empresaterceirizada";

type IProps = {
  empresa:IEmpresaTerceirizada
  setEmpresa:React.Dispatch<React.SetStateAction<IEmpresaTerceirizada[]>>
}

const Card = ({empresa, setEmpresa}:IProps) => {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalTrash, setModalTrash] = useState<boolean>(false);

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  useEffect (() => {
    (async () => {
      const {data} = await api.get("/empresaterceirizada");
      setEmpresa(data);
    })()
  }, [modalEdit, modalTrash]);

  return (
    <div className={styles.container}>
        <p className={styles.text}>{empresa.nome}</p>

        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash}/>
        </div> 

        <ModalTrash id={empresa.id} url={baseUrlEmpresa} modalTrash={modalTrash} handleModalTrash={handleModalTrash}/>
        <ModalEdit empresa={{...empresa}} modalEdit={modalEdit} handleModalEdit={handleModalEdit}/>
    </div>
  )
}

export { Card };