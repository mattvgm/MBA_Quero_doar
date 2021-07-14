import { EmpresaParceira } from "./EmpresaParceira";

export interface Cupom {
  id: string;
  nome: string;
  valor: number;
  empresaParceria: EmpresaParceira;
  descricao: string;
  dataValidade: Date;
}
