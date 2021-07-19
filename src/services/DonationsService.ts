// import {
//   fakeCupons,
//   fakeDoadores,
//   fakeDonations,
//   fakeInstituicoes,
//   fakePagamentos,
// } from "../mockedData/mockedData";
import { Doacao } from "../models/Doacao";
import { Instituicao } from "../models/Instituição";
import api from "./api";

export class DonationsService {
  ifood10 = "60ac36fa1f354d9b256cd5ab";
  ifood15 = "60ac36fa1f354d9b256cd5a8";
  ifood20 = "60ac36fa1f354d9b256cd5aa";
  ifood30 = "60ac36fa1f354d9b256cd5a9";
  uber10 = "60ac36fa1f354d9b256cd5a7";

  public CreateDonation(
    user_id: string,
    instituicao: string,
    donationValue: string
  ) {
    let valor = 10.0;

    let comboCupons = [];

    switch (donationValue) {
      case "10rs":
        valor = 10.0;
        comboCupons.push(this.ifood10);
        break;
      case "15rs":
        valor = 15.0;
        comboCupons.push(this.ifood10);
        comboCupons.push(this.ifood15);
        break;
      case "20rs":
        valor = 20.0;
        comboCupons.push(this.ifood10);
        comboCupons.push(this.ifood15);
        comboCupons.push(this.uber10);
        break;
      default:
        valor = 10.0;
        comboCupons.push(this.ifood10);
        break;
    }

    const newdonate = {
      idDoador: user_id,
      idInstituicao: instituicao,
      pagamento: {
        valor: valor,
        nomeCartao: "JOAO SILVA",
        numeroCartao: "XXXXXXXXXXXX1234",
        codigoSegurancaCartao: "XXX",
        validadeCartao: "XXXXX",
        statusProcessamento: "Pago",
      },
      idCupom: [...comboCupons],
      valor: valor,
    };
    api.post("Doacao/12", newdonate).then((resp) => {
      console.log(resp.data);
    });
  }
}
