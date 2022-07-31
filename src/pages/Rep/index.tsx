
import { Home } from "../../components/Home";
import { Layout } from "../../components/Layout";
import styles from "./styles.module.scss"

const Rep = () => {
  return (
      <Layout
      item1="Home"
      item2="Gerente"
      item3="Reposicao"
      link1="/rep"
      link2="/rep/gerente"
      link3="/rep/reposicao"
      title="SCLI"   
    >
      <Home 
        nome="Kaique Nascente Januário" 
        photo="./images/kaique.jpeg"
        manutencaoCadastro="Gerente" 
        regraNegocio1="1. Gerente terá limite de 1.000,00 semanal."
        regraNegocio2="2. Gerete poderá comprar 10 produtos por Fornecedor semanal."/>
    </Layout>
  );
}

export { Rep }
