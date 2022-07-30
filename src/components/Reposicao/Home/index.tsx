import styles from "./styles.module.scss";

type IProps = {
  nome:string;
  photo: string;  
  manutencaoCadastro: string;
  regraNegocio1: string;
  regraNegocio2: string;
}

const Home = ({nome, photo, manutencaoCadastro, regraNegocio1, regraNegocio2}:IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profile__photo}>
          <img src={photo} alt="Kaique"/>
        </div>
        <div className={styles.profile__info}>
          <h2 className="heading__primary">{nome}</h2>
          <h3 className="heading__tertiary">Desenvolvedor</h3> 
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.section}>
          <h3 className="heading__secondary" style={{fontSize:"1.8rem"}}>Manutenção de cadastro</h3>
          <p>{manutencaoCadastro}</p>
        </section>
        
        <section className={styles.section}>
          <h3 className="heading__secondary" style={{fontSize:"1.8rem"}}>Regra de negócio</h3>
          <ul>
            <li className={styles.item}>
              <p>1. Gerente terá limite de 1.000,00 semanal.</p>
            </li>
            <li className={styles.item}>
              <p>2. Gerete poderá comprar 10 produtos por Fornecedor semanal.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export { Home }