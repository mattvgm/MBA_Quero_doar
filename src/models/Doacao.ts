import { Cupom } from "./Cupom";
import { Doador } from "./Doador";
import { Instituicao } from "./Instituição";
import { Pagamento } from "./Pagamento";

export interface Doacao {
  _id: string;
  Doador: Doador;
  Instituicao: Instituicao;
  Cupom: Cupom[];
  DataDoacao: Date;
  Pagamento: Pagamento;
  ValorInstituicao: number;
}
