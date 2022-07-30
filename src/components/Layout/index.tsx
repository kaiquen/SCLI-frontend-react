import { FiBox, FiHome, FiPlus, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

type IProps = {
  item1:string;
  item2:string;
  item3:string;
  link1:string;
  link2:string;
  link3:string;
  
  children:any
}
const Layout = ({item1, item2, item3, link1, link2, link3, children}:IProps) => {
  return (
    <div className={styles.container}>
    <Header title="Reposicao"/>

    <main className={styles.main}>
      <nav className={styles.menu}>
        <ul className={styles.nav}>
          <li className={styles.nav__item}>
            <FiHome className={styles.nav__icon}/>
            <Link to={link1}>{item1}</Link>
          </li>
          <li className={styles.nav__item}>
            <FiUser className={styles.nav__icon}/>
            <Link to={link2}>{item2}</Link>
          </li>
          <li className={styles.nav__item}>
            <FiBox className={styles.nav__icon}/>
            <Link to={link3}>{item3}</Link>
          </li>
        </ul>
      </nav>

      {children}
    </main>

    <Footer/>
  </div>
  )
}

export { Layout }