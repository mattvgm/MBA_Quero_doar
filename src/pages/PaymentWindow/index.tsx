import React, { useCallback, useContext, useState } from "react";

import {
  Container,
  FormBox,
  InfoBox,
  Menubox,
  LeftBox,
  PageBody,
  DonationSelect,
  PaymentBox,
  CCSelect,
} from "./styles";
import {
  HiOutlineUserCircle,
  HiHeart,
  HiHome,
  HiIdentification,
  HiGift,
} from "react-icons/hi";
import {
  AppBar,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import DonationTable from "../../components/DonationTable";
import TopBarComponent from "../../components/TopBarComponent";
import CreditCardForm from "../../components/CreditCardForm";
import LoggedMenu from "../../components/LoggedMenu";
import { Instituicao } from "../../models/Instituição";
import { Pagamento } from "../../models/Pagamento";
import { DonationsService } from "../../services/DonationsService";
import AuthContext from "../../context/AuthenticationContext";

const PaymentWindow: React.FC = () => {
  const [donationValue, setdonationValue] = useState("10rs");
  const { state }: { state: any } = useLocation();
  let history = useHistory();

  const auth = useContext(AuthContext);
  const user_id = auth.loggedUser?.id;
  let newCCInfo: Pagamento = {} as Pagamento;

  const [ccInfo, setCcInfo] = useState<Pagamento>({} as Pagamento);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdonationValue((event.target as HTMLInputElement).value);
  };

  const getCCInfo = useCallback(
    (dados: any) => {
      //
      // newCCInfo.
      // setCcInfo;
      newCCInfo.numeroCartao = dados.number;
      newCCInfo.NomeCartao = dados.name;
      newCCInfo.CodigoSegurancaCartao = dados.cvc;
      newCCInfo.ValidadeCartao = dados.expiry;
      setCcInfo(newCCInfo);
      console.log("state", ccInfo);
      console.log("var", newCCInfo);
    },
    [ccInfo, newCCInfo]
  );

  const CreateDonation = useCallback(() => {
    setCcInfo(newCCInfo);
    const donationService = new DonationsService();
    if (user_id) {
      const createdDonation = donationService.CreateDonation(
        user_id,
        state.instituicao.id,
        donationValue,
        ccInfo
      );
    }
    history.push({ pathname: "/Institutions", state: {} });
  }, [
    ccInfo,
    donationValue,
    history,
    newCCInfo,
    state.instituicao.id,
    user_id,
  ]);

  return (
    <Container>
      <TopBarComponent></TopBarComponent>

      <PageBody>
        <Menubox>
          <LoggedMenu />
        </Menubox>

        <InfoBox>
          <FormBox>
            <PaymentBox>
              <DonationSelect>
                <h1>{state.instituicao.nome}</h1>
                <img src={state.instituicao.foto} width={400} alt="" />
                <h3>Escolha o valor da doação</h3>

                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={donationValue}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="10rs"
                    control={<Radio />}
                    label="R$10,00 e ganhe 1 Cupom Ifood de R$10,00"
                  />
                  <FormControlLabel
                    value="15rs"
                    control={<Radio />}
                    label="R$15,00 e ganhe + 1 Cupom Ifood de R$15,00"
                  />
                  <FormControlLabel
                    value="20rs"
                    control={<Radio />}
                    label="R$20,00 e ganhe + 1 Cupom Uber de de R$10,00"
                  />
                </RadioGroup>
              </DonationSelect>
              <CCSelect>
                <CreditCardForm FatherFunction={getCCInfo} />
                <form action="https://alo" method="post">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={CreateDonation}
                  >
                    Realizar o pagamento
                  </Button>
                </form>
              </CCSelect>
            </PaymentBox>
          </FormBox>
        </InfoBox>
      </PageBody>
    </Container>
  );
};

export default PaymentWindow;
