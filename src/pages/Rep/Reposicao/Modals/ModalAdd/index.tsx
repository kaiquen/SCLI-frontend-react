
import { appendFile } from "fs";
import { useEffect, useState } from "react";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { IFornecedor } from "../../../../../models/fornecedor";
import { IGerente } from "../../../../../models/gerente";
import { IProduto } from "../../../../../models/Produto";
import api from "../../../../../services/api";
import styles from "./styles.module.scss";

type IProps = {
  handleModalAdd():void;
  modalAdd: boolean;
}

const ModalAdd = ({handleModalAdd, modalAdd}:IProps) => {
  const [fornecedor, setFornecedor]  = useState<IFornecedor[]>([]);
  const [produto, setProduto] = useState<IProduto[]>([]);
  const [gerente, setGerente] = useState<IGerente[]>([]);

  const [gerenteSelecionado, setGerenteSelecionado] = useState<any>();
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState<any>();
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>();

  const [quantidade, setQuantidade] = useState<number>(1);
  
  const [error, setError] = useState<string>("");

  const handleSelecionarFornecedor = (event:any) => {
    setFornecedorSelecionado(event.target.value)
  }

  const handleSelecionarProduto = (event:any) => {
    setProdutoSelecionado(event.target.value)  
  }

  const handleSelecionarGerente = (event:any) => {
    setGerenteSelecionado(event.target.value)
  }

  const handleAddReposicao = async (event:any) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/reposicao", {
        quantidade,
        gerente:JSON.parse(gerenteSelecionado),
        fornecedor:JSON.parse(fornecedorSelecionado),
        itens: [{
            quantidade,
            produto:JSON.parse(produtoSelecionado)
        }]
      })
      
      data && handleModalAdd();
      
    } catch (error:any) {
      setError(error.response.data.message)
    }
  }
  
  useEffect(() => {
    (async() => {
      try {
        const {data} = await api.get('/fornecedor');
        setFornecedor(data);
      } catch (error) {
        alert(error);
      }
    })()  
  },[])

  useEffect(() => {
    (async() => {
      try {
        const {data} = await api.get('/gerente');
        setGerente(data);
      } catch (error) {
        alert(error);
      }
    })()  
  },[])

  useEffect(() => {
    const getProduto = async () => {
      try {
        const {data} = await api.get(`/produto/${JSON.parse(fornecedorSelecionado).id}`)
        setProduto(data);
      } catch (error) {
        alert(error);
      }
    }

    fornecedorSelecionado && getProduto()
  }, [fornecedorSelecionado])

  return (
    <Modal modal={modalAdd} handleModal={handleModalAdd} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Adicionar Reposicao</h2>
        </div>
        <form action="" className="form"  onSubmit={handleAddReposicao}>
          <FormGroup>
            <select  value={gerenteSelecionado?.id} onChange={handleSelecionarGerente} className={styles.select}>
              <option value="">Selecione o gerente</option>
              {
                gerente.map(item => {
                  return (
                    <option key={item.id} value={JSON.stringify(item)}>{item.nome}</option>
                  );
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <select  value={fornecedorSelecionado?.id} onChange={handleSelecionarFornecedor} className={styles.select}>
              <option value="">Selecione o fornecedor</option>
              {
                fornecedor.map(item => {
                  return (
                    <option  key={item.id} value={JSON.stringify(item)}>{item.nome}</option>
                  );
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            {
              produto.length > 0 && (
                <select value={produtoSelecionado?.id} onChange={handleSelecionarProduto} className={styles.select}>
                <option value="">Selecione o produto</option>

                  {
                    produto.map(item => {
                      return (
                        <option key={item.id} value={JSON.stringify(item)}>{item.nome}</option>
                      );
                    })
                  }
                </select>
              )
            }
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="number" 
                  labelClassName='--black'
                  placeholder="Quantidade"
                  value={quantidade}
                  setValue={setQuantidade}
              />
          </FormGroup> 
            <br/>
            <br/>
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
        </form>
      </div>
    </Modal>
  )
}

export { ModalAdd }