import { IFornecedor } from "./fornecedor";
import { IGerente } from "./gerente";
import { IProduto } from "./Produto";

export type IReposicao = {
  id:number;
  quantidade:string;
  gerente: IGerente;
  fornecedor: IFornecedor;
  itens: [
    {
      quantidade:number;
      produto:IProduto;
    }
  ]
}