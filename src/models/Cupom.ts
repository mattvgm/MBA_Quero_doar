import { EmpresaParceira } from "./EmpresaParceira";

export interface Cupom {
  _id: string;
  Nome: string;
  Valor: number;
  EmpresaParceria: EmpresaParceira;
  Nivel: number;
  Descricao: string;
  DataValidade: Date;
  Ativo: boolean;
}
