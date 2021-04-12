export interface SetorAtuacaoVM {
  id: string;
  descricao: string;
}

export interface Instituicao {
  id: string;
  nome: string;
  setorAtuacaoVM: SetorAtuacaoVM;
  cnpj: string;
  foto: string;
  site: string;
  descricao: string;
  pessoaContato: string;
  telefone: string;
  email: string;
  password: string;
  setorAtuacao?: any;
}
