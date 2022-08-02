import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { ICliente } from "../../../../models/cliente";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlCliente = "http://localhost:8080/cliente";

type IProps = {
  cliente: ICliente
  setCliente: React.Dispatch<React.SetStateAction<ICliente[]>>
}

const Card = ({ cliente, setCliente }: IProps) => {
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
      const { data } = await api.get("/cliente");
      setCliente(data);
    })()
  }, [modalEdit, modalTrash]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>{cliente.nome}</p>

      <div className={styles.tools}>
        <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit} />
        <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
      </div>

      <ModalTrash id={cliente.id} url={baseUrlCliente} modalTrash={modalTrash} handleModalTrash={handleModalTrash} />
      <ModalEdit cliente={{ ...cliente }} modalEdit={modalEdit} handleModalEdit={handleModalEdit} />
    </div>
  )
}

export { Card };