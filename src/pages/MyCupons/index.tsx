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

import TopBarComponent from "../../components/TopBarComponent";

import LoggedMenu from "../../components/LoggedMenu";
import api from "../../services/api";
import { Cupom } from "../../models/Cupom";
import CuponsTable from "../../components/CuponsTable";

const MyCupons: React.FC = () => {
  const [cupons, setCupons] = useState<Cupom[]>([]);

  useEffect(() => {
    const cupons = api
      .get<Cupom[]>("/MeusCupons/60ac36fa1f354d9b256cd5a6")
      .then((res) => {
        console.log("==========", res.data[0]);
        setCupons(res.data);
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
              Meus Cupons
            </h1>
            <CuponsTable Cupons={cupons} />
          </FormBox>
        </InfoBox>
      </PageBody>
    </Container>
  );
};

export default MyCupons;
