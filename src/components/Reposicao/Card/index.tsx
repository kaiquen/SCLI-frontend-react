import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { IReposicao } from "../../../contexts/reposicao";
import styles from "./styles.module.scss";

const Card = ({id}:IReposicao) => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>{id}</p>
        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")}/>
        </div>
        
    </div>
  )
}

export { Card };