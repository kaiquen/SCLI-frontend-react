import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type IProps = {
  title?:string;
}

const Header = ({title}:IProps) => {
  return (
    <div className={styles.header}>
        <Link to="/"><FiChevronLeft className={styles.header__icon}/></Link>
        
        <h1>{title}</h1>
    </div>
  )
}

export { Header }