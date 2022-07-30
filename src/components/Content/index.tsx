import { FiPlus } from "react-icons/fi";
import { Card } from "../Card";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

type IProps = {
  title: string;
  subTitle: string;
  children?: any;
}

const Content = ({title, subTitle,children}:IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2 className="heading__secondary">{title}</h2>
          <FiPlus className={styles.icon}/>
        </div>
        <h3 className="heading__tertiary">{subTitle}</h3>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export { Content }