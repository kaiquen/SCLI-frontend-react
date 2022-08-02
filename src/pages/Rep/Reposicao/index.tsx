import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Content } from "../../../components/Content";
import { FormGroup } from "../../../components/FormGroup";
import { Input } from "../../../components/Input/intex";
import { Layout } from "../../../components/Layout";
import { IReposicao } from "../../../models/reposicao";
import api from "../../../services/api";
import { Card } from "./Card";
import { ModalAdd } from "./Modals/ModalAdd";
import styles from "./styles.module.scss";

const Reposicao = () => {
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const [reposicao, setReposicao] = useState<IReposicao[]>([]);

  const [end, setEnd] = useState<string>();
  const [beginning, setBeginning] = useState<string>();

  const [filter, setFilter] = useState<any>([]);
  
  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  }


  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [modalAdd]);

  const handleFilter = async (event:any) => {
    event.preventDefault();
    try {
      const {data} = await api.get(`/reposicao/byPeriod/${beginning}/${end}`)
      setFilter(data);
    } catch (error) {
      alert(error);
    }
  }

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

        <form action="" onSubmit={handleFilter}>
        <p style={{marginBottom: "1rem"}}>Tá listando porém não deu tempo de colocar estilo e concertar os bugs relacionado a essa listagem!!!</p>
        <div className={styles.group}>
          <FormGroup>
            <Input 
                inputClassName=''
                type="date" 
                labelClassName='--black'
                label="Data de Inicio"
                value={beginning}
                setValue={setBeginning}
            />
          </FormGroup> 
          <div className={styles['group--split']}></div>
          <FormGroup>
            <Input 
                inputClassName=''
                type="date" 
                labelClassName='--black'
                label="Data de termino"
                value={end}
                setValue={setEnd}
            />
          </FormGroup> 
          </div>
          <br/>
          <br/>
          <FormGroup>
            <Button
              type="submit"
              className="green"
              title="filtrar"
            />
          </FormGroup>
        </form>

        <div className={styles.tab}>
          <small>Gerente</small>
          <small>Qtd</small>
          <small>Produto</small>
          <small>Fornecedor</small>
        </div>

        {
          filter.length > 0 ? filter.map((item:any) => {
            return (
              <div className={styles.card}>
                  {item}
              </div>
            )
          })
          :
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

export { Reposicao }