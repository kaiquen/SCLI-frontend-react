import { IFornecedor } from "./fornecedor";
import { IGerente } from "./gerente";

export type IReposicao = {
  id:number;
  quantidade:string;
  gerente: IGerente;
  fornecedor: IFornecedor;
}