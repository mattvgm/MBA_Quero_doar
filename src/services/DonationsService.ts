import {
  fakeCupons,
  fakeDoadores,
  fakeDonations,
  fakeInstituicoes,
  fakePagamentos,
} from "../mockedData/mockedData";
import { Doacao } from "../models/Doacao";

export class DonationsService {
  /**
   * execute
   */
  public CreateDonation() {
    const NovaDoacao: Doacao = {
      _id: "32142342",
      Cupom: [fakeCupons[0]],
      DataDoacao: new Date(),
      Doador: fakeDoadores[0],
      Instituicao: fakeInstituicoes[0],
      Pagamento: fakePagamentos[0],
      ValorInstituicao: 10,
    };

    fakeDonations.push(NovaDoacao);
  }
}
