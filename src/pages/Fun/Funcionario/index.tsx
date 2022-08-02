import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IFuncionario } from "../../../models/funcionario";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";

const Funcionario = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [funcionario, setfuncionario] = useState<IFuncionario[]>([]);

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/funcionario");
      setfuncionario(data);
    })()
  }, [modalAdd]);

  return (
    <Layout
      item1="Home"
      item2="Funcionario"
      item3="Servico Funcionario"
      link1="/fun"
      link2="/fun/funcionario"
      link3="/fun/servico"
      title="Funcionario"
    >
      <Content 
        title="Manutenção de cadastro" 
        subTitle="Funcionario"
        >
          {
            funcionario.map(item => {
              return (
                <Card key={item.id} {...item}/>
              )
            })
          }
      </Content>
    </Layout>
  )
}

export { Funcionario }
