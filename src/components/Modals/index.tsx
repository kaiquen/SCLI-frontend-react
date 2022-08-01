import styles from "./styles.module.scss";

type IProps = {
  modal?: boolean;
  handleModal():void;
  children?: any;
}

const Modal = ({children, modal, handleModal}:IProps) => {
  return (
    <div 
      className={styles.modal}
      style={modal ? {display:"flex"} : {display: "none"}}>
        {children}
      <div className={styles.modal__overlay} onClick={handleModal}></div>
    </div>   
  )
}

export { Modal }