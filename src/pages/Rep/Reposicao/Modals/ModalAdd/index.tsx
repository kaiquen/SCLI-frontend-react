
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { useModals } from "../../../../../hooks/useModals";
import styles from "./styles.module.scss";

type IProps = {
  url?: string;
}

const ModalAdd = ({url}:IProps) => {
  const { modalAdd, handleModalAdd } = useModals();
  
  return (
    <Modal modal={modalAdd} handleModal={handleModalAdd} >
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Adicionar Reposicao</h2>
        </div>
        <form action="" className="form">
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text" 
                label='Nome' 
                labelClassName='--black'
            />
          </FormGroup>
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text" 
                label='Cpf' 
                labelClassName='--black'
            />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text" 
                  label='Email' 
                  labelClassName='--black'
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="password" 
                  label='Senha' 
                  labelClassName='--black'
              />
          </FormGroup>   
          <div className={styles.group}>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    label='Uf' 
                    labelClassName='--black'
                    
                />
            </FormGroup>
            <div className={styles['group--split']}></div>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    label='Cidade' 
                    labelClassName='--black'
                    
                />
            </FormGroup>
          </div>
          <div className={styles.group}>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    label='Bairro' 
                    labelClassName='--black'
                    
                />
            </FormGroup>
            <div className={styles['group--split']}></div>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    label='Rua' 
                    labelClassName='--black'
                    
                />
            </FormGroup>
          </div>
            <br/>
            <br/>
          <FormGroup>
              <Button
              type="button"
              className="green"
              title="Cadastrar"
              onClick={{}}
              />
          </FormGroup>
        </form>
    </Modal>
  )
}

export { ModalAdd }