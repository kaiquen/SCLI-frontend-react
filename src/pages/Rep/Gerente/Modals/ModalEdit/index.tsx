
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { useModals } from "../../../../../hooks/useModals";
import { IGerente } from "../../../../../models/gerente";
import api from "../../../../../services/api";
import styles from "./styles.module.scss";

type IProps = {
  gerente: IGerente;
  handleModalEdit():void;
  modalEdit: boolean;
}

const ModalEdit = ({gerente, modalEdit, handleModalEdit}:IProps) => {
  const [nome, setNome] = useState<string>(gerente.nome);
  const [cpf,setCpf] = useState<string>(gerente.cpf);
  const [email, setEmail] = useState<string>(gerente.email);
  const [senha, setSenha] = useState<string>(gerente.senha);
  const [uf, setUf] = useState(gerente.uf)
  const [cidade, setCidade] =useState<string>(gerente.cidade);
  const [bairro, setBairro] = useState<string>(gerente.bairro);
  const [rua, setRua] = useState<string>(gerente.rua);

  const [error, setError] = useState<string>("");

  const handeEditGerente = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await api.put("/gerente", {
        id: gerente.id,
        nome,
        cpf,
        email,
        senha,
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

  console.log(gerente);
  
  return (
    <Modal modal={modalEdit} handleModal={handleModalEdit} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Editar gerente</h2>
        </div>
        <form className="form" onSubmit={handeEditGerente}>
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
                placeholder="CPF"
                value={cpf}
                setValue={setCpf}
            />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="email" 
                  labelClassName='--black'
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="password" 
                  labelClassName='--black'
                  placeholder="Senha"
                  value={senha}
                  setValue={setSenha}
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