import { useModals } from "../../../hooks/useModals";
import { Button } from "../../Button";
import { FormGroup } from "../../FormGroup";
import { Input } from "../../Input/intex";
import styles from "./styles.module.scss";

type IProps = {
  id: number;
  url: string;
}

const ModalAdd = ({id, url}:IProps) => {
  const { modalAdd } = useModals();
  
  return (
    <div 
      className={styles.modal}
      style={modalAdd ? {display:"flex"} : {display: "none"}}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Adicionar gerente</h2>
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
      </div>  
    </div>   
  )
}

export { ModalAdd }