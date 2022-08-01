import { useState } from "react";
import styles from "./styles.module.scss";

type IProps = {
  id: number;
  url: string;
}

const ModalEdit = ({id, url}:IProps) => {
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  const handleModalEdit = () => {

  }
  
  return (
    <div 
      className={styles.modal}
      style={modalEdit ? {display:"flex"} : {display: "none"}}>
      <div className={styles.modal__content}>
      
      </div>  
      <div className={styles.modal__overlay} onClick={handleModalEdit}></div>
    </div>   
  )
}

export { ModalEdit }