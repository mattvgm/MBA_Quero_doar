import { Cupom } from "./Cupom";
import { Doador } from "./Doador";
import { Instituicao } from "./Instituição";
import { Pagamento } from "./Pagamento";

export interface Doacao {
  _id: string;
  // Doador: Doador;
  instituicao: Instituicao;
  cupom: Cupom[];
  dataDoacao: Date;
  pagamento: Pagamento;
  valorDoado: number;
}
