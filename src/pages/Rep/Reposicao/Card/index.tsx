import { useEffect, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { ModalTrash } from "../../../../components/Modals/ModalTrash";
import { IReposicao } from "../../../../models/reposicao";
import api from "../../../../services/api";

import styles from "./styles.module.scss";

const baseUrlReposicao = "http://localhost:8080/reposicao";

type IProps = {
  reposicao:IReposicao  
  setReposicao:React.Dispatch<React.SetStateAction<IReposicao[]>>
}

const Card = ({reposicao, setReposicao}:IProps) => {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalTrash, setModalTrash] = useState<boolean>(false);

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleModalTrash = () => {
    setModalTrash(!modalTrash);
  }

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/reposicao");
      setReposicao(data);
    })()
  }, [modalEdit || modalTrash]);

  return (
    <div className={styles.container}>
        <p className={styles.text}>{reposicao.id}</p>
        <div className={styles.tools}>
          <FiEdit3 className={[styles.icon, styles["icon--edit"]].join(" ")}  onClick={handleModalEdit} />
          <FiTrash2 className={[styles.icon, styles["icon--trash"]].join(" ")} onClick={handleModalTrash} />
        </div>

        <ModalTrash id={reposicao.id} url={baseUrlReposicao} modalTrash={modalTrash} handleModalTrash={handleModalTrash}/>
    </div>
  )
}

export { Card };