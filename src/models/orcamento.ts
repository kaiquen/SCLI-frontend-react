import { ICliente } from "./cliente";
import { IFuncionario } from "./funcionario";

export type IOrcamento = {
  id:number;
  dataInicio: Date;
  dataTermino: Date;
  descricao: String;
  valor: DoubleRange;
  cliente: ICliente;
  funcionario: IFuncionario;
}