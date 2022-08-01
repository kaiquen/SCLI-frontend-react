
import { useEffect, useState } from "react";
import { Button } from "../../../../../components/Button";
import { FormGroup } from "../../../../../components/FormGroup";
import { Input } from "../../../../../components/Input/intex";
import { Modal } from "../../../../../components/Modals";
import { useModals } from "../../../../../hooks/useModals";
import { IFornecedor } from "../../../../../models/fornecedor";
import styles from "./styles.module.scss";

type IProps = {
  handleModalAdd():void;
  modalAdd: boolean;
}

const ModalAdd = ({handleModalAdd, modalAdd}:IProps) => {
  const [fornecedor, setFornecedor]  = useState<IFornecedor[]>([]);
  
  useEffect(() => {
    (async() => {

    })()
  })
  
  return (
    <Modal modal={modalAdd} handleModal={handleModalAdd} >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h2 className="heading__secondary">Adicionar Reposicao</h2>
        </div>
        <form action="" className="form">
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text" 
                labelClassName='--black'
            />
          </FormGroup>
          <FormGroup>
            <Input 
                inputClassName='--border'
                type="text" 
                labelClassName='--black'
            />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="text" 
                  labelClassName='--black'
              />
          </FormGroup>
          <FormGroup>
              <Input 
                  inputClassName='--border'
                  type="password" 
                  labelClassName='--black'
              />
          </FormGroup>   
          <div className={styles.group}>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    labelClassName='--black'
                    
                />
            </FormGroup>
            <div className={styles['group--split']}></div>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    labelClassName='--black'
                    
                />
            </FormGroup>
          </div>
          <div className={styles.group}>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
                    labelClassName='--black'
                    
                />
            </FormGroup>
            <div className={styles['group--split']}></div>
            <FormGroup>
                <Input 
                    inputClassName='--border'
                    type="text" 
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
    </Modal>
  )
}

export { ModalAdd }