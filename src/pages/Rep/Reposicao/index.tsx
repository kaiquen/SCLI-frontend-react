import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IReposicao } from "../../../models/reposicao";
import api from "../../../services/api";
import { Card } from "./Card";

import styles from "./styles.module.scss";

const Reposicao = () => {
  const [reposicao, setReposicao] = useState<IReposicao[]>([]);
  
  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [])

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