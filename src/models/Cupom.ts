import { EmpresaParceira } from "./EmpresaParceira";

export interface Cupom {
  _id: string;
  nome: string;
  Valor: number;
  empresaParceria: EmpresaParceira;
  Nivel: number;
  descricao: string;
  dataValidade: Date;
  Ativo: boolean;
}
