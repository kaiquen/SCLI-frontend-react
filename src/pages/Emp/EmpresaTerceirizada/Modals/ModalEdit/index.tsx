
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { useModals } from "../../../../../hooks/useModals";
import { IEmpresaTerceirizada } from "../../../../../models/empresaTerceirizada";
import api from "../../../../../services/api";
import styles from "./styles.module.scss";

type IProps = {
  empresa: IEmpresaTerceirizada;
  handleModalEdit():void;
  modalEdit: boolean;
}

const ModalEdit = ({empresa, modalEdit, handleModalEdit}:IProps) => {
  const [nome, setNome] = useState<string>(empresa.nome);
  const [cnpj, setCnpj] = useState<string>(empresa.cnpj);
  const [uf, setUf] = useState(empresa.uf)
  const [cidade, setCidade] =useState<string>(empresa.cidade);
  const [bairro, setBairro] = useState<string>(empresa.bairro);
  const [rua, setRua] = useState<string>(empresa.rua);

  const [error, setError] = useState<string>("");

  const handeEditEmpresa = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await api.put("/empresaterceirizada", {
        id: empresa.id,
        nome,
        cnpj,
        uf,
        cidade,
        bairro,
        rua
      });

    
      data && handleModalEdit();
      
    } catch (error:any) {
      setError(error.response.data.message)
    }
  } 

  console.log(empresa);
  
  return (
    <Modal modal={modalEdit} handleModal={handleModalEdit} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Editar empresa</h2>
        </div>
        <form className="form" onSubmit={handeEditEmpresa}>
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text"               
                labelClassName='--black'
                placeholder="Nome"
                value={nome}
                setValue={setNome}
            />
          </FormGroup>
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text" 
                labelClassName='--black'
                placeholder="CNPJ"
                value={cnpj}
                setValue={setCnpj}
            />
          </FormGroup> 
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text" 
                  labelClassName='--black'
                  placeholder="UF"  
                  value={uf}
                  setValue={setUf} 
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text"  
                  labelClassName='--black'
                  placeholder="Cidade"
                  value={cidade}
                  setValue={setCidade}
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text" 
                  labelClassName='--black'
                  placeholder="Bairro"
                  value={bairro}
                  setValue={setBairro}
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text" 
                  labelClassName='--black'
                  placeholder="Rua" 
                  value={rua}
                  setValue={setRua}                
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
                title="Confirmar"
              />
          </FormGroup>
        </form>
      </div>
    </Modal>
  )
}

export { ModalEdit }