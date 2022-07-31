import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalAdd } from "../../../../components/Modals/ModalAdd";
import { ModalEdit } from "../../../../components/Modals/ModalEdit";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { useModals } from "../../../../hooks/useModals";
import { IGerente } from "../../../../models/gerente";

import styles from "./styles.module.scss";

const baseUrlGerente = "http://localhost:8080/gerente";

const Card = ({nome, id}:IGerente) => {
  const { 
    handleModalTrash, 
    handleModalEdit
  } = useModals();

  return (
    <div className={styles.container}>
        <p className={styles.text}>{nome}</p>

        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")} onClick={handleModalEdit}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash}/>
        </div>

        <ModalTrash id={id} url={baseUrlGerente}/>
        <ModalAdd id={id} url={baseUrlGerente}/>   
        <ModalEdit id={id} url={baseUrlGerente}/>
    </div>
  )
}

export { Card };