import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IRealizarServicoEmpresa } from "../../../models/realizarServicoEmpresa";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";

const RealizarServicoEmpresa = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [realizarEmpresa, setRealizarEmpresa] = useState<IRealizarServicoEmpresa[]>([]);
  
  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/realizarservicoempresa");
      setRealizarEmpresa(data);
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
          realizarEmpresa.map(item => {
            return (
              <Card 
                key={item.id} 
                realizarEmpresa={{...item}}
                setRealizarEmpresa={setRealizarEmpresa}
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