import { FiPlus } from "react-icons/fi";
import { useModals } from "../../hooks/useModals";
import styles from "./styles.module.scss";

type IProps = {
  title: string;
  subTitle: string;
  children?: any;
  modal?: any;
  url?: string;
}

const Content = ({title, subTitle, children, url, modal}:IProps) => {
  const { handleModalAdd } = useModals();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2 className="heading__secondary">{title}</h2>
          <FiPlus className={styles.icon} onClick={handleModalAdd}/>
        </div>
        <h3 className="heading__tertiary">{subTitle}</h3>
      </div>
      <div className={styles.content}>
        {children}
      </div>

      {modal && modal(handleModalAdd)}
    </div>
  )
}

export { Content }