import { IServico } from "./servico";
import { IEmpresaTerceirizada } from "./empresaTerceirizada";

export type IOrcamento = {
  id:number;
  dataInicio: Date;
  status: boolean;
  feedback: boolean;
  debito: boolean;
  servico: IServico;
  empresaTerceirizada: IEmpresaTerceirizada;
}