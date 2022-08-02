import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import { ICliente } from "../../../models/cliente";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";


const Cliente = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [cliente, setCliente] = useState<ICliente[]>([]);

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/cliente");
      setCliente(data);
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
      title="Cliente"
    >
      <Content
        title="Manutenção de cadastro"
        subTitle="Cliente"
        handleModalAdd={handleModalAdd}>
        {
          cliente.map(item => {
            return (
              <Card
                key={item.id}
                cliente={{ ...item }}
                setCliente={setCliente}
              />
            )
          })
        }

        <ModalAdd modalAdd={modalAdd} handleModalAdd={handleModalAdd} />
      </Content>
    </Layout>
  )
}

export { Cliente }
