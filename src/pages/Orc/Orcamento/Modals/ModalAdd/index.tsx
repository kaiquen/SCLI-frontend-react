
import { appendFile } from "fs";
import { useEffect, useState } from "react";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { IServico } from "../../../../../models/servico";
import { ICliente } from "../../../../../models/cliente";
import api from "../../../../../services/api";
import styles from "./styles.module.scss";

type IProps = {
  handleModalAdd(): void;
  modalAdd: boolean;
}

const ModalAdd = ({ handleModalAdd, modalAdd }: IProps) => {
  const [servico, setServico] = useState<IServico[]>([]);
  const [cliente, setCliente] = useState<ICliente[]>([]);


  const [clienteSelecionado, setClienteSelecionado] = useState<any>();
  const [servicoSelecionado, setServicoSelecionado] = useState<any>();

  const [quantidade, setQuantidade] = useState<number>(1);

  const [error, setError] = useState<string>("");

  const handleSelecionarServico = (event: any) => {
    setServicoSelecionado(event.target.value)
  }

  const handleSelecionarCliente = (event: any) => {
    setClienteSelecionado(event.target.value)
  }

  const handleAddOrcamento = async (event: any) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/orcamento", {
        quantidade,
        cliente: JSON.parse(clienteSelecionado),
        servico: JSON.parse(servicoSelecionado),
      })

      data && handleModalAdd();

    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/servico');
        setServico(data);
      } catch (error) {
        alert(error);
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/cliente');
        setCliente(data);
      } catch (error) {
        alert(error);
      }
    })()
  }, [])

  return (
    <Modal modal={modalAdd} handleModal={handleModalAdd} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2 className="heading__secondary">Adicionar Orçamento</h2>
        </div>
        <form action="" className="form" onSubmit={handleAddOrcamento}>
          <FormGroup>
            <h3>Nome</h3>
            <select value={clienteSelecionado?.id} onChange={handleSelecionarCliente} className={styles.select}>

              <option value="">Selecione o cliente</option>
              {
                cliente.map(item => {
                  return (
                    <option key={item.id} value={JSON.stringify(item)}>{item.nome}</option>
                  );
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <h3>Serviço</h3>
            <select value={servicoSelecionado?.id} onChange={handleSelecionarServico} className={styles.select}>
              <option value="">Selecione o serviço</option>
              {
                servico.map(item => {
                  return (
                    <option key={item.id} value={JSON.stringify(item)}>{item.id}</option>
                  );
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <h3>Descrição</h3>
            <input type="text" value=""></input>
          </FormGroup>
          <FormGroup>
            <h3>Data início</h3>
            <input type="date" value=""></input>
          </FormGroup>
          <FormGroup>
            <h3>Data Entrega</h3>
            <input type="date" value=""></input>
          </FormGroup>
          <FormGroup>
            <h3>Valor</h3>
            <input type="text" value=""></input>
          </FormGroup>
          <br />
          <br />
          {error && (
            <FormGroup>
              <span className={styles.span}>{error}</span>
            </FormGroup>
          )}
          <FormGroup>
            <Button
              type="submit"
              className="green"
              title="Cadastrar"
            />
          </FormGroup>
          <FormGroup>
            <h3>Listar cliente</h3>
            <h3>Por UF</h3>
            <select>
              <option value="">UF</option>
            </select>
            <h3>Total de clientes</h3>
          </FormGroup>
        </form>
      </div>
    </Modal>
  )
}

export { ModalAdd }