import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox,Menubox, LeftBox, PageBody,DonationSelect,PaymentBox,CCSelect } from './styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import { AppBar, Button, ButtonGroup, FormControlLabel, FormLabel, Radio, RadioGroup, Tab, Tabs, TextField } from '@material-ui/core';

import DonationTable from '../../components/DonationTable';
import TopBarComponent from '../../components/TopBarComponent';
import CreditCardForm from '../../components/CreditCardForm';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import InstitutionsCarousel from '../../components/InstitutionsCarousel';
import LoggedMenu from '../../components/LoggedMenu';
import { useHistory } from 'react-router-dom';

const Institutions: React.FC = () => {

    const [donationValue, setdonationValue] = useState('10rs');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setdonationValue((event.target as HTMLInputElement).value);
      };
      


      

  return(
    <Container>
        <TopBarComponent></TopBarComponent>

        <PageBody>
            <Menubox>
                <LoggedMenu/>
            </Menubox>

            <InfoBox>
                <FormBox>
                    <h2>Conheça as nossas campanhas atuais</h2>
                    <InstitutionsCarousel/>
                </FormBox>
            </InfoBox>
        </PageBody>
    </Container>  
    )
}

export default Institutions;