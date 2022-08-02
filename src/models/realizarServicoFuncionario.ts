import { IServico } from "./servico";
import { IFuncionario } from "./funcionario";

export type IRealizarServicoFuncionaio = {
  id:number;
  dataInicio: Date;
  status: boolean;
  debito: boolean;
  servico: IServico;
  funcionario: IFuncionario;
}