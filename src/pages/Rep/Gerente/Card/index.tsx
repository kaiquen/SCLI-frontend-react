import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { useModals } from "../../../../hooks/useModals";
import { IGerente } from "../../../../models/gerente";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlGerente = "http://localhost:8080/gerente";

const Card = (props:IGerente) => {
  const { 
    handleModalTrash, 
    handleModalEdit
  } = useModals();

  return (
    <div className={styles.container}>
        <p className={styles.text}>{props.nome}</p>

        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash}/>
        </div>

        <ModalTrash id={props.id} url={baseUrlGerente}/>
        <ModalEdit {...props}/>
    </div>
  )
}

export { Card };