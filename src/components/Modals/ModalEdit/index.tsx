import { useModals } from "../../../hooks/useModals";
import styles from "./styles.module.scss";

type IProps = {
  id: number;
  url: string;
}

const ModalEdit = ({id, url}:IProps) => {
  const { modalEdit } = useModals();

  return (
    <div 
      className={styles.container}
      style={modalEdit ? {display:"flex"} : {display: "none"}}>
      <div className={styles.content}>
      
      </div>  
    </div>   
  )
}

export { ModalEdit }