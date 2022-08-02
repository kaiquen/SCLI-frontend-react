import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IGerente } from "../../../../models/gerente";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlGerente = "http://localhost:8080/gerente";

type IProps = {
  gerente:IGerente
  setGerente:React.Dispatch<React.SetStateAction<IGerente[]>>
}

const Card = ({gerente, setGerente}:IProps) => {
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
      const {data} = await api.get("/gerente");
      setGerente(data);
    })()
  }, [modalEdit, modalTrash]);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__item}>
            <p className={styles.text}>{gerente.nome}</p>          
          </div>
  
          <div className={styles.content__item}>
            <p className={styles.text}>{gerente.cpf}</p>
          </div>
        </div>

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