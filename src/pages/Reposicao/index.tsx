import { FiBox, FiChevronLeft, FiHome, FiPlus, FiUser, FiUserMinus } from "react-icons/fi"
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss"

const Reposicao = () => {
  return (
    <div className={styles.container}>
      <Header title="Reposicao"/>

      <main className={styles.main}>
        <nav className={styles.menu}>
          <ul className={styles.nav}>
            <li className={styles.nav__item}>
              <FiHome className={styles.nav__icon}/>
              <a href="#">Home</a>
            </li>
            <li className={styles.nav__item}>
              <FiUser className={styles.nav__icon}/>
              <a href="#">Gerente</a>
            </li>
            <li className={styles.nav__item}>
              <FiBox className={styles.nav__icon}/>
              <a href="#">Reposição</a>
            </li>
          </ul>
        </nav>

        <div className={styles.content}>
          <div className={styles.content__header}>
            <div className={styles.content__title}>
              <h2 className="heading__secondary">Manutenção de cadastro</h2>
              <FiPlus className={styles.content__icon}/>
            </div>
            <h3 className="heading__tertiary">Gerente</h3>
          </div>
          <div className={styles.box}>
            <Card />
            <Card />
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export { Reposicao }
