import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IOrcamento } from "../../../../models/orcamento";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlOrcamento = "http://localhost:8080/orcamento";

type IProps = {
  orcamento: IOrcamento
  setOrcamento: React.Dispatch<React.SetStateAction<IOrcamento[]>>
}

const Card = ({ orcamento, setOrcamento }: IProps) => {
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
      const { data } = await api.get("/orcamento");
      setOrcamento(data);
    })()
  }, [modalEdit || modalTrash]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>{orcamento.id}</p>
      <div className={styles.tools}>
        <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit} />
        <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
      </div>

      <ModalTrash id={orcamento.id} url={baseUrlOrcamento} modalTrash={modalTrash} handleModalTrash={handleModalTrash} />
      <ModalEdit orcamento={{ ...orcamento }} modalEdit={modalEdit} handleModalEdit={handleModalEdit} />
    </div>
  )
}

export { Card };