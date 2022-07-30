import { Card } from "../Card";
import { Content } from "../Content";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

const Gerente = () => {
  return (
    <Layout
      item1="Home"
      item2="Gerente"
      item3="Reposicao"
      link1="/rep"
      link2="/rep/gerente"
      link3="/rep/reposicao"
      title="Gerente"
    >
      <Content title="Manutenção de cadastro" subTitle="Gerente">
          <Card />
          <Card />
      </Content>
    </Layout>
  )
}

export { Gerente }
