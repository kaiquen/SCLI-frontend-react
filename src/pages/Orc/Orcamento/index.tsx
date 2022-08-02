import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { IOrcamento } from "../../../models/orcamento";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";

const Orcamento = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [orcamento, setOrcamento] = useState<IOrcamento[]>([]);

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/orcamento");
      setOrcamento(data);
    })()
  }, [modalAdd]);

  return (
    <Layout
      item1="Home"
      item2="Cliente"
      item3="Orçamento"
      link1="/orc"
      link2="/orc/cliente"
      link3="/orc/orcamento"
      title="Orçamento"
    >
      <Content
        title="Regra de negócio"
        subTitle="Orçamento"
        handleModalAdd={handleModalAdd}>
        {
          orcamento.map(item => {
            return (
              <Card
                key={item.id}
                orcamento={{ ...item }}
                setOrcamento={setOrcamento}
              />
            )
          })
        }

        <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd} />
      </Content>
    </Layout>
  )
}

export { Orcamento }