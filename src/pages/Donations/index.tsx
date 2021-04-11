import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox,Menubox, LeftBox, PageBody } from './styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import { Button, TextField } from '@material-ui/core';

import DonationTable from '../../components/DonationTable';
import TopBarComponent from '../../components/TopBarComponent';
import { Doacao } from '../../models/Doacao';
import { Doador } from '../../models/Doador';
import { Cupom } from '../../models/Cupom';
import { EmpresaParceira } from '../../models/EmpresaParceira';
import { Instituicao } from '../../models/Instituição';
import { Pagamento } from '../../models/Pagamento';

import {fakeDonations} from "../../mockedData/mockedData"


const Donations: React.FC = () => {

const mockedDonations = fakeDonations;

  return(
    <Container>
        <TopBarComponent></TopBarComponent>

        <PageBody>
            <Menubox>
                <LeftBox>
                    <b>Minha Conta</b>
                    <ul>
                        
                        <li><a href="https://"><HiHeart size={32}/> Doações Realizadas</a></li>
                        <li><a href="https://"><HiGift size={32}/> Cupons</a></li>
                        <li><a href="https://"><HiHome size={32}/> Instituições Amparadas</a></li>
                        <li><a href="https://"><HiIdentification size={32}/> Meu Cadastro</a></li>
                    </ul>
                </LeftBox>
            </Menubox>
            <InfoBox>
                <FormBox>
                    <h1><HiHeart/>Doações realizadas</h1>
                    <DonationTable Doacoes={mockedDonations}/>

                </FormBox>
            </InfoBox>
        </PageBody>
    </Container>  
    )
}

export default Donations;