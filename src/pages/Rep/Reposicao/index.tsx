import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IReposicao } from "../../../models/reposicao";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";

const Reposicao = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalTrash, setModalTrash] = useState<boolean>(false);

  const [reposicao, setReposicao] = useState<IReposicao[]>([]);
  
  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [modalAdd || modalEdit || modalTrash]);

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
      <Content 
        title="Regra de negócio" 
        subTitle="Reposição"
        handleModalAdd={handleModalAdd}>
        {
          reposicao.map(item => {
            return (
              <Card 
                key={item.id} 
                reposicao={{...item}}
                modalEdit={modalEdit}
                modalTrash={modalTrash}
                handleModalEdit={handleModalEdit}
                handleModalTrash={handleModalTrash}
              />
            )
          })
        }
        <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd}/>
      </Content>
    </Layout>
  )
}

export { Reposicao }