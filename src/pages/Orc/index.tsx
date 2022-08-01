
import { Home } from "../../components/Home";
import { Layout } from "../../components/Layout";
import styles from "./styles.module.scss"

const Orc = () => {
    return (
        <Layout
            item1="Home"
            item2="Cliente"
            item3="Orçamento"
            link1="/orc"
            link2="/orc/cliente"
            link3="/orc/orcamento"
            title="SCLI"
        >
            <Home
                nome="Jonatan Bento Bandeira"
                photo="./images/jonathan.jpg"
                manutencaoCadastro="Cliente"
                regraNegocio1="1. Não pode fazer o orçamento se o cliente estiver em débito;"
                regraNegocio2="2. Cada cliente só poderá realizar no máximo 3 orçamentos por dia;" />
        </Layout>
    );
}

export { Orc }
