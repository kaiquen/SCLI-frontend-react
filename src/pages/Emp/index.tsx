
import { Home } from "../../components/Home";
import { Layout } from "../../components/Layout";
import styles from "./styles.module.scss"

const Emp = () => {
  return (
      <Layout
      item1="Home"
      item2="Empresa Terceirizada"
      item3="Realizar Serviço Empresa"
      link1="/emp"
      link2="/emp/empresaterceirizada"
      link3="/emp/realizarservicoempresa"
      title="SCLI"   
    >
      <Home 
        nome="Victor Ferreira da Silva Reis" 
        photo="./images/victorreis.jpeg"
        manutencaoCadastro="Empresa Terceirizada" 
        regraNegocio1="1. Se a empresa estiver com 3 serviços em aberto, informar ao usuário (será exibida uma mensagem para o usuário)."
        regraNegocio2="2. Caso a empresa preste mais de 3 serviços com feedback negativo ficará impossibilitado de receber mais serviços."/>
    </Layout>
  );
}

export { Emp }
