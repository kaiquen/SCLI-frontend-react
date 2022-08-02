import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IReposicao } from "../../../../models/reposicao";
import api from "../../../../services/api";
import { ModalEdit } from "../Modals/ModalEdit";

import styles from "./styles.module.scss";

const baseUrlReposicao = "http://localhost:8080/reposicao";

type IProps = {
  reposicao:IReposicao  
  setReposicao:React.Dispatch<React.SetStateAction<IReposicao[]>>
}

const Card = ({reposicao, setReposicao}:IProps) => {
  const [modalTrash, setModalTrash] = useState<boolean>(false);

  console.log(reposicao)
  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [modalTrash]);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__item}>
            <p className={styles.text}>{reposicao.gerente.nome}</p>
          </div>
          <div className={styles.content__item}>
            <p className={styles.text}>{reposicao.quantidade}</p>
          </div>
          <div className={styles.content__item}>
            <p className={styles.text}>{reposicao.itens[0].produto.nome}</p>
          </div>
          <div className={styles.content__item}>
            <p className={styles.text}>{reposicao.fornecedor.nome}</p>
          </div>

        </div>
        <div className={styles.tools}>
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
        </div>

        <ModalTrash id={reposicao.id} url={baseUrlReposicao} modalTrash={modalTrash} handleModalTrash={handleModalTrash}/>
    </div>
  )
}

export { Card };