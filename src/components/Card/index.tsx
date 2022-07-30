import { FiEdit3, FiTrash, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>Kaique Nascente Januário</p>
        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")}/>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")}/>
        </div>
        
    </div>
  )
}

export { Card };