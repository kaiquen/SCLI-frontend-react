import styles from './styles.module.scss';
import React, { useState } from 'react';

const Cliente = () => {
    const [term, setTerm] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something 
        alert(term);
    }
    return (
        <div className={styles.main}>
            <h1>CADASTRO CLIENTE</h1><br />

            <form onSubmit={submitForm}>
                <label>Nome</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira o nome"
                    className="input"
                /><br />
                <label>CPF</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira o CPF"
                    className="input"
                /><br />
                <label>UF</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira a UF"
                    className="input"
                /><br />
                <label>Cidade </label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira a cidade"
                    className="input"
                /><br />
                <label>Bairro</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira o bairro"
                    className="input"
                /><br />
                <label>Rua</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira a rua"
                    className="input"
                /><br />
                <label>Email</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira o email"
                    className="input"
                /><br />
                <label>Senha</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Insira a senha"
                    className="input"
                /><br /><br />
                <button type="submit" className="btn">Cancelar</button>
                <button type="submit" className="btn">Cadastrar</button>
            </form>
        </div>
    );
}

export { Cliente }
