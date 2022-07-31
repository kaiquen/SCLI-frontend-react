import { useModals } from "../../../hooks/useModals";
import { Button } from "../../Button";
import styles from "./styles.module.scss";

type IProps = {
  id: number;
  url: string;
}

const ModalTrash = ({id, url}:IProps) => {
  const { modalTrash, handleModalTrash, handleTrash } = useModals();

  return (
    <div 
      className={styles.modal}
      style={!modalTrash ? {display: "none"} : {display:"flex"}}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h1 className="heading__primary">Deseja exclui ?</h1>
        </div>

        <div className={styles.modal__btnBox}>
          <Button title="Cancelar" className="transparent" onClick={handleModalTrash}/>
          <Button title="Excluir" onClick={() => handleTrash(id, url)}/>
        </div>
      </div>  
      <div className={styles.modal__overlay} onClick={handleModalTrash}></div>
    </div>   
  )
}

export { ModalTrash }