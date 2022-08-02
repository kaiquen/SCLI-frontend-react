
import { Home } from "../../components/Home";
import { Layout } from "../../components/Layout";
import styles from "./styles.module.scss"

const Fun = () => {
    return (
        <Layout
            item1="Home"
            item2="Funcionario"
            item3="Servico Funcionario"
            link1="/fun"
            link2="/fun/"
            link3="/fun/Servico Funcionario"
            title="SCLI"
        >
            <Home
                nome="Rickison Entringer Loose"
                photo="./images/Rickison.jpeg"
                manutencaoCadastro="Funcionario"
                regraNegocio1="1. Se o funcionario estiver com 3 serviços em aberto, informar ao usuário;"
                regraNegocio2="2. Caso o funcionario preste mais de 3 serviços com feedback negativo ficará impossibilitado de receber mais serviços;

                " />
        </Layout>
    );
}

export { Fun }
