import { Doacao } from "../models/Doacao";
import { Doador } from "../models/Doador";
import { Cupom } from "../models/Cupom";
import { EmpresaParceira } from "../models/EmpresaParceira";
import { Instituicao } from "../models/Instituição";
import { Pagamento } from "../models/Pagamento";

export const fakeInstituicoes: Instituicao[] = [
  {
    nome: "BRASIL SEM FOME",
    cnpj: "1231231",
    email: "brasil@semfome.com",
    id: "231232",
    password: "32137289371",
    pessoaContato: "Brandão",
    setorAtuacaoVM: { id: "1", descricao: "Comida" },
    site: "brasilsemfome.com.br",
    telefone: "123",
  },
  {
    nome: "LEOES DA NOITE",
    cnpj: "1231231",
    email: "leos@danoite.com",
    id: "231232",
    password: "32137289371",
    pessoaContato: "Brandão",
    setorAtuacaoVM: { id: "1", descricao: "Comida" },
    site: "LeoesDanoite.com.br",
    telefone: "123",
  },
];

export const fakeEmpresas: EmpresaParceira[] = [
  {
    id: "23123121",
    nome: "Ifood",
    cnpj: "1231231312",
    email: "ifood@ifood.com",
    password: "23442",
    pessoaContato: "Sonia",
    site: "ifood.com",
    telefone: "1231231",
  },
];

export const fakeCupons: Cupom[] = [
  {
    _id: "231231",
    Ativo: true,
    DataValidade: new Date(),
    Descricao: "Cupom de 10% no Ifood",
    Nivel: 1,
    Nome: "Ifood 10%",
    Valor: 10,
    EmpresaParceria: fakeEmpresas[0],
  },
];

export const fakeDoadores: Doador[] = [
  {
    id: "23123132123",
    nome: "Ana Lucia",
    cpf: "12345678",
    dataNascimento: new Date(),
    email: "ana.lucia@querodoar.com",
    password: "teste",
    telefone: "12345678",
  },
];

export const fakePagamentos: Pagamento[] = [
  {
    _id: "1",
    CodigoSegurancaCartao: "123",
    NomeCartao: "Claudio",
    NumeroCartao: "XXXXXXXXXXXX1234",
    ValidadeCartao: "01/2021",
    Valor: 150.0,
  },
];

export const fakeDonations: Doacao[] = [
  {
    _id: "123456",
    Cupom: fakeCupons[0],
    DataDoacao: new Date(),
    Doador: fakeDoadores[0],
    Instituicao: fakeInstituicoes[0],
    Pagamento: fakePagamentos[0],
    ValorInstituicao: 150.0,
  },
  {
    _id: "1234567",
    Cupom: fakeCupons[0],
    DataDoacao: new Date(),
    Doador: fakeDoadores[0],
    Instituicao: fakeInstituicoes[1],
    Pagamento: fakePagamentos[0],
    ValorInstituicao: 50.0,
  },
];
