import React, { useCallback, useState, useEffect } from "react";

import {
  Container,
  FormBox,
  InfoBox,
  Menubox,
  LeftBox,
  PageBody,
} from "./styles";
import {
  HiOutlineUserCircle,
  HiHeart,
  HiHome,
  HiIdentification,
  HiGift,
} from "react-icons/hi";
import { Button, TextField } from "@material-ui/core";

import DonationTable from "../../components/DonationTable";
import TopBarComponent from "../../components/TopBarComponent";

import LoggedMenu from "../../components/LoggedMenu";
import api from "../../services/api";
import { Doacao } from "../../models/Doacao";

const Donations: React.FC = () => {
  const [donations, setDonations] = useState<Doacao[]>([]);

  useEffect(() => {
    const donations = api
      .get<Doacao[]>("/MinhasDoacoes/60ac36fa1f354d9b256cd5a6")
      .then((res) => {
        setDonations(res.data);
      });
  }, []);

  return (
    <Container>
      <TopBarComponent></TopBarComponent>

      <PageBody>
        <Menubox>
          <LoggedMenu />
        </Menubox>
        <InfoBox>
          <FormBox>
            <h1>
              <HiHeart />
              Doações realizadas
            </h1>
            <DonationTable Doacoes={donations} />
          </FormBox>
        </InfoBox>
      </PageBody>
    </Container>
  );
};

export default Donations;
