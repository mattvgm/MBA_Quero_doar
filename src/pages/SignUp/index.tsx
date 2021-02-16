import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox, LeftBox, Linkable,LinksBox,PageBody,TopBar } from './styles';
import {HiOutlineUserCircle,HiHeart} from "react-icons/hi";
import { Button, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import donationBanner from '../../assets/doacao_banner.png'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

 
const SignUp: React.FC = () => {

    const [selectedBirthDay, setSelectedBirthDay] = useState(new Date());

    const updateDate = useCallback(
        (date:any) => {
            if(date){

                setSelectedBirthDay(date)
            }
        },
        [],
    )

  return(
    <Container>

        <TopBar>
            <LinksBox className='left'>
                <div style={{display:'flex',alignItems:'center',justifyContent:'start'}}>

                <HiHeart size={32}/>
                Quero Doar
            </div>
            </LinksBox>
            <LinksBox className='mid'>
            <div style={{display:'flex',alignItems:'center',justifyContent:'end',float:'right'}}>
                <Linkable href='#1'>Quem somos</Linkable>
                <Linkable href='#2'>Quero doar</Linkable>
                <Linkable href='#3'>Instituições</Linkable>
                <Linkable href='#4'>Empresas parceiras</Linkable>
            </div>

            </LinksBox >
            <LinksBox className='right'>
            <div style={{display:'flex',alignItems:'center',float:'right'}}>
                <Linkable href='' style={{marginRight:5}}>
                    <HiOutlineUserCircle size={32}/>
                </Linkable>
                <Linkable href='' style={{marginRight:5}}>
                    Olá Ana Luiza
                </Linkable>
            </div>
            </LinksBox>
        </TopBar>

        <PageBody>
            <InfoBox>
                <LeftBox>
                    <h2><b>Seja um doador</b></h2>
                    <p><b>Ajude quem precisa!</b></p>
                    <p><b>Doar é um gesto de amor!</b></p>
                    <p><b>Contribua e ganhe e vantagens exclusivas!</b></p>
                    <img src={donationBanner} width={600} alt="donationBanner"/>
                </LeftBox>
            </InfoBox>
            <InfoBox>
                <FormBox>
        <h2>Cadastre-se</h2>

        <form action="/action_page.php">
            <p><TextField id="filled-1" label="Nome" variant="outlined" fullWidth/></p>
            <p>
            <TextField id="filled-2" label="CPF" variant="outlined" />
            <TextField id="filled-3" label="Telefone" variant="outlined"/>
            {/* <TextField id="filled-basic" helperText="Data de nascimento" variant="outlined" type="date" defaultValue={Date.now()}/> */}

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Data de aniversário"
                format="dd/MM/yyyy"
                value={selectedBirthDay}
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) => {updateDate(date)}}
            />
            </MuiPickersUtilsProvider>
            </p>
            <p><TextField id="filled-6" label="email" variant="outlined"fullWidth type="E-mail" /></p>
            <p><TextField id="filled-4" label="Senha" variant="outlined"fullWidth type="password" /></p>
            <p><TextField id="filled-5" label="Confirmar a senha" variant="outlined"fullWidth type="password"/></p>
            <Button variant="contained" color="primary">Cadastrar</Button>
        </form>
                </FormBox>
            </InfoBox>
        </PageBody>
        <header></header>
    </Container>  
    )
}

export default SignUp;