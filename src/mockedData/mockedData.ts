import { Doacao } from "../models/Doacao";
import { Doador } from "../models/Doador";
import { Cupom } from "../models/Cupom";
import { EmpresaParceira } from "../models/EmpresaParceira";
import { Instituicao } from "../models/Instituição";
import { Pagamento } from "../models/Pagamento";

export const fakeInstituicoes: Instituicao[] = [
  {
    nome: "4 PATAS",
    cnpj: "1231231",
    email: "4PATAS@semfome.com",
    id: "231232",
    password: "32137289371",
    pessoaContato: "Brandão",
    setorAtuacaoVM: { id: "1", descricao: "Animais de Rua" },
    descricao:
      "Uma instituição focada em ajudar os animais de rua a serem adotados",
    site: "4patas.com.br",
    telefone: "123",
    foto:
      "https://cdn.pixabay.com/photo/2019/05/15/23/34/welcome-4206177_960_720.jpg",
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
    descricao: "Uma instituição focada em ajudar todos a poderem se alimentar",
    foto:
      "https://cdn.pixabay.com/photo/2020/06/21/15/58/the-rice-and-beans-5325625_960_720.jpg",
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
    foto:
      "https://cdn.freelogovectors.net/wp-content/uploads/2020/10/ifood-logo.png",
    telefone: "1231231",
  },
  {
    id: "6456456456",
    nome: "Uber",
    cnpj: "1231231312",
    email: "Uber@ifood.com",
    password: "23442",
    pessoaContato: "Marcia",
    site: "Uber.com",
    foto: "https://pngimg.com/uploads/uber/uber_PNG24.png",
    telefone: "1231231",
  },
];

export const fakeCupons: Cupom[] = [
  {
    _id: "231231",
    Ativo: true,
    DataValidade: new Date(),
    Descricao: "10% no Ifood",
    Nivel: 1,
    Nome: "IF10",
    Valor: 10,
    EmpresaParceria: fakeEmpresas[0],
  },
  {
    _id: "4654",
    Ativo: false,
    DataValidade: new Date(),
    Descricao: "20% no Ifood",
    Nivel: 2,
    Nome: "IF20",
    Valor: 20,
    EmpresaParceria: fakeEmpresas[0],
  },
  {
    _id: "323232",
    Ativo: true,
    DataValidade: new Date(),
    Descricao: "30% no Ifood",
    Nivel: 3,
    Nome: "IF30",
    Valor: 30,
    EmpresaParceria: fakeEmpresas[0],
  },
  {
    _id: "65456",
    Ativo: true,
    DataValidade: new Date(),
    Descricao: "15% no Ifood",
    Nivel: 2,
    Nome: "IF15",
    Valor: 15,
    EmpresaParceria: fakeEmpresas[0],
  },
  {
    _id: "654645",
    Ativo: true,
    DataValidade: new Date(),
    Descricao: "25% no Ifood",
    Nivel: 3,
    Nome: "IF25",
    Valor: 25,
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
    Cupom: [fakeCupons[0], fakeCupons[1], fakeCupons[2]],
    DataDoacao: new Date(),
    Doador: fakeDoadores[0],
    Instituicao: fakeInstituicoes[0],
    Pagamento: fakePagamentos[0],
    ValorInstituicao: 35.0,
  },
  {
    _id: "1234567",
    Cupom: [fakeCupons[3], fakeCupons[4]],
    DataDoacao: new Date(),
    Doador: fakeDoadores[0],
    Instituicao: fakeInstituicoes[1],
    Pagamento: fakePagamentos[0],
    ValorInstituicao: 15.0,
  },
];
