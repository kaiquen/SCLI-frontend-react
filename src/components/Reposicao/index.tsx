import { FiPlus } from "react-icons/fi";
import { useReposicao } from "../../hooks/useReposicao";
import { Card } from "./Card";
import { Content } from "../Content";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

const Reposicao = () => {
  const { reposicao } = useReposicao();
  return (
    <Layout
      item1="Home"
      item2="Gerente"
      item3="Reposicao"
      link1="/rep"
      link2="/rep/gerente"
      link3="/rep/reposicao"
      title="Reposição"
    >
      <Content title="Regra de negócio" subTitle="Reposição">
        {
          reposicao.map(item => {
            return (
              <Card key={item.id} {...item}/>
            )
          })
        }
      </Content>
    </Layout>
  )
}

export { Reposicao }