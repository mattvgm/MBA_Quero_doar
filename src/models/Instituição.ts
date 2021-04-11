export interface SetorAtuacaoVM {
  id: string;
  descricao: string;
}

export interface Instituicao {
  id: string;
  nome: string;
  setorAtuacaoVM: SetorAtuacaoVM;
  cnpj: string;
  site: string;
  pessoaContato: string;
  telefone: string;
  email: string;
  password: string;
  setorAtuacao?: any;
}
