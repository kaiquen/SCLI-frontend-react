import { Layout } from '../../components/Layout';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout
      item1="Orçamento"
      item2="Pedido"
      item3="Reposição"
      link1="/orc"
      link2="/pedido"
      link3="/rep"
      title="SCLI"
    >
      
    </Layout>
  );
}

export { Home }
