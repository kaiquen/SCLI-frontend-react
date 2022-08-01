import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IGerente } from "../../../models/gerente";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";


const Gerente = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [gerente, setGerente] = useState<IGerente[]>([]);

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect (() => {
    (async () => {
      const {data} = await api.get("/gerente");
      setGerente(data);
    })()
  }, [modalAdd]);

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
      <Content 
        title="Manutenção de cadastro" 
        subTitle="Gerente"
        handleModalAdd={handleModalAdd}>
          {
            gerente.map(item => {
              return (
                <Card 
                  key={item.id} 
                  gerente={{...item}}
                  setGerente={setGerente}                
                />
              )
            })
          }

          <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd}/>
      </Content>
    </Layout>
  )
}

export { Gerente }
