import { useGerente } from "../../../hooks/useGerente";
import { Card } from "./Card";
import { Content } from "../../Content";
import { Layout } from "../../Layout";

const Gerente = () => {
  const { gerente } = useGerente();
  
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
          {
            gerente.map(item => {
              return (
                <Card key={item.id} {...item}/>
              )
            })
          }
      </Content>
    </Layout>
  )
}

export { Gerente }
