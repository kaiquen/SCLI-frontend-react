import { FiBox, FiHome, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

type IProps = {
  item1?:string;
  item2?:string;
  item3?:string;
  item4?:string;
  item5?:string;

  link1?:string;
  link2?:string;
  link3?:string;
  link4?:string;
  link5?:string;
  
  title?:string;
  children:any
}
const Layout = ({item1, item2, item3,item4, item5, link1, link2, link3, link4, link5, title, children}:IProps) => {
  return (
    <div className={styles.container}>
    <Header title={title}/>

    <main className={styles.main}>
      <nav className={styles.menu}>
        <ul className={styles.nav}>
          {
            item1 && link1 && (
              <li className={styles.nav__item}>
                <FiHome className={styles.nav__icon}/>
                <Link to={link1}>{item1}</Link>
              </li>
            )
          }
          
          {
            item2 && link2 && (
              <li className={styles.nav__item}>
                <FiUser className={styles.nav__icon}/>
                <Link to={link2}>{item2}</Link>
              </li>
            )
          }

          {
            link3 && link3 && (
              <li className={styles.nav__item}>
                <FiBox className={styles.nav__icon}/>
                <Link to={link3}>{item3}</Link>
              </li>
            )
          }
          
          {
            item4 && link4 && (
              <li className={styles.nav__item}>
                <FiBox className={styles.nav__icon}/>
                <Link to={link4}>{item4}</Link>
              </li>
            )
          }

{
          item5 && link5 && (
              <li className={styles.nav__item}>
                <FiBox className={styles.nav__icon}/>
                <Link to={link5}>{item5}</Link>
              </li>
            )
          }

        </ul>
      </nav>

      {children}
    </main>

    <Footer/>
  </div>
  )
}

export { Layout }