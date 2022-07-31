import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { useModals } from "../../../../hooks/useModals";
import { IReposicao } from "../../../../models/reposicao";

import styles from "./styles.module.scss";

const baseUrlReposicao = "http://localhost:8080/reposicao";

const Card = ({id}:IReposicao) => {
  const { 
    handleModalTrash, 
    handleModalEdit,
  } = useModals();


  return (
    <div className={styles.container}>
        <p className={styles.text}>{id}</p>
        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")}  onClick={handleModalEdit} />
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
        </div>
        <ModalTrash id={id} url={baseUrlReposicao}/>
    </div>
  )
}

export { Card };