import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IEmpresaTerceirizada } from "../../../models/empresaTerceirizada";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";


const EmpresaTerceirizada = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [empresa, setEmpresa] = useState<IEmpresaTerceirizada[]>([]);

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect (() => {
    (async () => {
      const {data} = await api.get("/empresaterceirizada");
      setEmpresa(data);
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
      title="Empresa Terceirizada" 
    >
      <Content 
        title="Manutenção de cadastro" 
        subTitle="Empresa Terceirizada"
        handleModalAdd={handleModalAdd}>
          {
            empresa.map(item => {
              return (
                <Card 
                  key={item.id} 
                  empresa={{...item}}
                  setEmpresa={setEmpresa}                
                />
              )
            })
          }

          <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd}/>
      </Content>
    </Layout>
  )
}

export { EmpresaTerceirizada }
