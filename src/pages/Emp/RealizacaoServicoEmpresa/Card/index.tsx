import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IRealizarServicoEmpresa } from "../../../../models/realizarServicoEmpresa";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlRealizarEmpresa = "http://localhost:8080/realizarservicoempresa";

type IProps = {
  realizarEmpresa:IRealizarServicoEmpresa
  setRealizarEmpresa:React.Dispatch<React.SetStateAction<IRealizarServicoEmpresa[]>>
}

const Card = ({realizarEmpresa, setRealizarEmpresa}:IProps) => {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalTrash, setModalTrash] = useState<boolean>(false);

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/realizarservicoempresa");
      setRealizarEmpresa(data);
    })()
  }, [modalEdit || modalTrash]);

  return (
    <div className={styles.container}>
        <p className={styles.text}>{realizarEmpresa.id}</p>
        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")}  onClick={handleModalEdit} />
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
        </div>

        <ModalTrash id={realizarEmpresa.id} url={baseUrlRealizarEmpresa} modalTrash={modalTrash} handleModalTrash={handleModalTrash}/>
        <ModalEdit realizarEmpresa={{...realizarEmpresa}} modalEdit={modalEdit} handleModalEdit={handleModalEdit}/>
    </div>
  )
}

export { Card };