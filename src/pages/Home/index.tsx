import { Layout } from '../../components/Layout';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout
      item1="Orçamento"
      item2="Pedido"
      item3="Reposição"
      item4="Servico Funcionario"
      item5="Empresa Terceirizada"
      link1="/orc"
      link2="/pedido"
      link3="/rep"
      link4="/fun"
      link5="/emp"
      title="SCLI"
>
      <div className={styles.content}>
        <img src="./images/logo.png" alt="" className={styles.content__logo}/>
      </div>
    </Layout>
  );
}

export { Home }
