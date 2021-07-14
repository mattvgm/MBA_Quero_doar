import React, { useCallback, useState, useEffect } from "react";

import { Container, FormBox, InfoBox, Menubox, PageBody } from "./styles";

import TopBarComponent from "../../components/TopBarComponent";

import LoggedMenu from "../../components/LoggedMenu";
import api from "../../services/api";
import { Cupom } from "../../models/Cupom";
import CuponsTable from "../../components/CuponsTable";
import { HiHeart } from "react-icons/hi";

const MyCupons: React.FC = () => {
  const [cupons, setCupons] = useState<Cupom[]>([]);

  useEffect(() => {
    api.get<Cupom[]>("/MeusCupons/60ac36fa1f354d9b256cd5a6").then((res) => {
      let listaCupons: Cupom[] = [];

      res.data.forEach((cupom: Cupom) => {
        listaCupons.push(cupom);
      });

      console.log("==========", listaCupons);
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
