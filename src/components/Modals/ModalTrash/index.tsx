
import { useModals } from "../../../hooks/useModals";
import { Button } from "../../Button";
import styles from "./styles.module.scss";
import { Modal } from "../index"
import api from "../../../services/api";

type IProps = {
  id: number;
  url: string;
  modalTrash: boolean;
  handleModalTrash():void;
}

const ModalTrash = ({id, url, modalTrash, handleModalTrash}:IProps) => {
  const handleTrash = async(id:number, url:string) => {
    try {
      await api.delete(`${url}/${id}`);
      handleModalTrash();
    } catch (error) {
      alert(error);
    } 
  }

  return (
    <Modal 
      modal={modalTrash}
      handleModal={handleModalTrash}
    >
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
    </Modal>   
  )
}

export { ModalTrash }