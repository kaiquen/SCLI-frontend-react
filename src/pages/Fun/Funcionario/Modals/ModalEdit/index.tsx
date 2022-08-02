
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { useModals } from "../../../../../hooks/useModals";
import { IFuncionario } from "../../../../../models/funcionario";
import api from "../../../../../services/api";
import styles from "./styles.module.scss";

const ModalEdit = (props:IFuncionario) => {
  const { modalEdit, handleModalEdit } = useModals();
  
  const [nome, setNome] = useState<string>(props.nome);
  const [cpf,setCpf] = useState<string>(props.cpf);
  const [email, setEmail] = useState<string>(props.email);
  const [senha, setSenha] = useState<string>(props.senha);
  const [uf, setUf] = useState(props.uf)
  const [cidade, setCidade] =useState<string>(props.cidade);
  const [bairro, setBairro] = useState<string>(props.bairro);
  const [rua, setRua] = useState<string>(props.rua);

  const [error, setError] = useState<string>("");

  const handeEditCliente = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await api.put("/cliente", {
        id: props.id,
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

  return (
    <Modal modal={modalEdit} handleModal={handleModalEdit} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Editar cliente</h2>
        </div>
        <form className="form" onSubmit={handeEditCliente}>
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