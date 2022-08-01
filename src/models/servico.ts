import { IOrcamento } from "./orcamento";
export type IServico = {
  id:number;
  status: boolean;
  orcamento: IOrcamento;
}