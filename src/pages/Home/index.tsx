import { Layout } from '../../components/Layout';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout
      item1="Orçamento"
      item2="Pedido"
      item3="Reposição"
      item4="nome 1"
      item5="nom 2"
      link1="/orc"
      link2="/pedido"
      link3="/rep"
      link4=""
      link5=""
      title="SCLI"
    >
      
    </Layout>
  );
}

export { Home }
