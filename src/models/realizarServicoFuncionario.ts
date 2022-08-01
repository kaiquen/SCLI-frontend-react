import { IServico } from "./servico";
import { IEmpresaTerceirizada } from "./empresaTerceirizada";
import { IFuncionario } from "./funcionario";

export type IOrcamento = {
  id:number;
  dataInicio: Date;
  status: boolean;
  debito: boolean;
  servico: IServico;
  funcionario: IFuncionario;
}