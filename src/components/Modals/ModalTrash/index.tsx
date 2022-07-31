import { useModals } from "../../../hooks/useModals";
import styles from "./styles.module.scss";

type IProps = {
  id: number;
  url: string;
}

const ModalTrash = ({id, url}:IProps) => {
  const { modalTrash, handleModalTrash, handleTrash } = useModals();

  return (
    <div 
      className={styles.container}
      style={!modalTrash ? {display: "none"} : {display:"flex"}}>
      <div 
        className={styles.content}>
        
        <h1 className="heading__primary">Deseja exclui ?</h1>
        <div className={styles.content__button}>
          <button className={styles.btn} onClick={handleModalTrash}>
            Cancelar
          </button>
          <button className={[styles.btn, styles["btn--green"]].join(" ")} onClick={async () => handleTrash(id,url)}>
            Excluir
          </button>
        </div>
      </div>  
    </div>   
  )
}

export { ModalTrash }