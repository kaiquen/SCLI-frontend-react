import { ICliente } from "./cliente";

export type IOrcamento = {
  id:number;
  quantidade:string;
  cliente: ICliente;
}