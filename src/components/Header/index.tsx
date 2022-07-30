import { FiChevronLeft } from "react-icons/fi";
import styles from "./styles.module.scss";

type IProps = {
  title:string;
}

const Header = ({title}:IProps) => {
  return (
    <div className={styles.header}>
        <FiChevronLeft className={styles.header__icon}/>
        <h1>{title}</h1>
    </div>
  )
}

export { Header }