import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IReposicao } from "../../../models/reposicao";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";

const RealizarServicoEmpresa = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [reposicao, setReposicao] = useState<IReposicao[]>([]);
  
  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/realizarservicoempresa");
      setReposicao(data);
    })()
  }, [modalAdd]);

  return (
    <Layout
      item1="Home"
      item2="Empresa Terceirizada"
      item3="Realizar Serviço Empresa"
      link1="/emp"
      link2="/emp/empresaterceirizada"
      link3="/emp/realizarservicoempresa"
      title="Realização Serviço Empresa" 
    >
      <Content 
        title="Regra de negócio" 
        subTitle="Realizar Serviço Empresa"
        handleModalAdd={handleModalAdd}>
        {
          reposicao.map(item => {
            return (
              <Card 
                key={item.id} 
                reposicao={{...item}}
                setReposicao={setReposicao}
              />
            )
          })
        }
        
        <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd}/>
      </Content>
    </Layout>
  )
}

export { RealizarServicoEmpresa }