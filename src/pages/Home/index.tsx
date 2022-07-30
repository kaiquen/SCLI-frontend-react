import { Layout } from '../../components/Layout';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout
      item1="Orçamento"
      item2="Pedido"
      item3="Reposicao"
      link1="/orcamento"
      link2="/pedido"
      link3="/rep"
      title="SCLI"
    >
      
    </Layout>
  );
}

export { Home }
