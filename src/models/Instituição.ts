export interface SetorAtuacao {
  id: string;
  descricao: string;
}

export interface Instituicao {
  id: string;
  nome: string;
  setorAtuacao: SetorAtuacao;
  cnpj: string;
  foto: string;
  site: string;
  descricao: string;
  pessoaContato: string;
  telefone: string;
  email: string;
  password: string;
}
