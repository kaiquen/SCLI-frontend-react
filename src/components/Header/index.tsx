import { FiChevronLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

type IProps = {
  title?:string;
}

const Header = ({title}:IProps) => {
  const {pathname} = useLocation();

  return (
    <div className={styles.header}>
        {
          pathname !== '/' && <Link to="/"><FiChevronLeft className={styles.header__icon}/></Link>
        }
        <h1>{title}</h1>
    </div>
  )
}

export { Header }