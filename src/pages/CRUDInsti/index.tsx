import React, { useCallback, useState,useEffect } from 'react';

import { Container,FormBox, InfoBox,Menubox, LeftBox, PageBody } from './styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import { Button, TextField } from '@material-ui/core';

import DonationTable from '../../components/DonationTable';
import TopBarComponent from '../../components/TopBarComponent';


import LoggedMenu from '../../components/LoggedMenu';
import api from '../../services/api';
import { Doacao } from '../../models/Doacao';
import InstitutionsTables from '../../components/InstitutionsTable';
import { Instituicao } from '../../models/Instituição';


const CRUDInstitution: React.FC = () => {

const [donations, setDonations] = useState<Instituicao[]>([])

useEffect(() => {
    const donations = api.get<Instituicao[]>("/Instituicao").then((res)=>{
        setDonations(res.data);
    })
}, [])

  return(
    <Container>
        <TopBarComponent></TopBarComponent>

        <PageBody>
            <Menubox>
                <LoggedMenu/>
            </Menubox>
            <InfoBox>
                <FormBox>
                    <h1><HiHeart/>Instituições Amparadas</h1>

                    <InstitutionsTables instituicoes={donations}/>

                </FormBox>
            </InfoBox>
        </PageBody>
    </Container>  
    )
}

export default CRUDInstitution;