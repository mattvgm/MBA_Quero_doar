import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox,Menubox, LeftBox, PageBody } from './styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import { Button, TextField } from '@material-ui/core';

import DonationTable from '../../components/DonationTable';
import TopBarComponent from '../../components/TopBarComponent';


const Donations: React.FC = () => {

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
                    <DonationTable/>

                </FormBox>
            </InfoBox>
        </PageBody>
    </Container>  
    )
}

export default Donations;