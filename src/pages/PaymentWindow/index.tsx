import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox,Menubox, LeftBox, PageBody,DonationSelect,PaymentBox,CCSelect } from './styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import { AppBar, Button, ButtonGroup, FormControlLabel, FormLabel, Radio, RadioGroup, Tab, Tabs, TextField } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import DonationTable from '../../components/DonationTable';
import TopBarComponent from '../../components/TopBarComponent';
import CreditCardForm from '../../components/CreditCardForm';
import LoggedMenu from '../../components/LoggedMenu';


const PaymentWindow: React.FC = () => {

    const [donationValue, setdonationValue] = useState('10rs');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(instituicao);
        setdonationValue((event.target as HTMLInputElement).value);
      };

      const {state : instituicao} = useLocation();

      

  return(
    <Container>
        <TopBarComponent></TopBarComponent>

        <PageBody>
            <Menubox>
                <LoggedMenu/>
            </Menubox>

            <InfoBox>
                <FormBox>

                    <PaymentBox>

                        <DonationSelect>
                            <h1>Instituição 4 patas</h1>
                            <img src={'https://cdn.pixabay.com/photo/2019/05/15/23/34/welcome-4206177_960_720.jpg'} width={400} alt=""/>
                            <h3>Escolha o valor da doação</h3>
                        
                        <RadioGroup aria-label="gender" name="gender1" value={donationValue} onChange={handleChange}>
                            <FormControlLabel value="10rs" control={<Radio />} label="R$10,00 e ganhe 1 Cupom Ifood R$10,00" />
                            <FormControlLabel value="15rs" control={<Radio />} label="R$15,00 e ganhe 2 Cupons Ifood R$10,00" />
                            <FormControlLabel value="20rs" control={<Radio />} label="R$20,00 e ganhe 1 Cupom Uber de R$10,00" />
                        </RadioGroup>

                        </DonationSelect>
                        <CCSelect>
                        <CreditCardForm/>
                        <form action="https://alo" method="post">
                            <Button  variant="contained" color="primary" component={Link} to="/donations" >Realizar o pagameno</Button>
                        </form>
                        </CCSelect>
                    </PaymentBox>
                </FormBox>
            </InfoBox>
        </PageBody>
    </Container>  
    )
}

export default PaymentWindow;