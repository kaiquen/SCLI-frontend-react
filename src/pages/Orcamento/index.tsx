import styles from './styles.module.scss';
import React, { useState } from 'react';

const Orcamento = () => {
    const [term, setTerm] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something 
        alert(term);
    }
    return (
        <div className={styles.main}>
            <h1>ORÇAMENTO</h1><br />
            
            <form onSubmit={submitForm}>
                <label>Nome </label>
                <select value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Selecione um cliente" className="input" /><br />
                <label>Serviço </label>
                <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Serviço" className="input" /><br />
                <label>Descrição </label>
                <textarea value={term} onChange={(e) => setTerm(e.target.value)}  placeholder="Descrição do serviço" className="input" /><br />
                <label>Data de Início </label>
                <input value={term} onChange={(e) => setTerm(e.target.value)} type="date" placeholder="Data de início" className="input" /><br />
                <label>Data de entrega </label>
                <input value={term} onChange={(e) => setTerm(e.target.value)} type="date" placeholder="Data de entrega" className="input" /><br />
                <label>Valor </label>
                <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Valor" className="input" /><br /><br />
                <button type="submit" className="btn">Cancelar</button>
                <button type="submit" className="btn">Confirmar</button>
                </form>
        </div>
    );
}

export { Orcamento }
