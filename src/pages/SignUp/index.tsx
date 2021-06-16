import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox, LeftBox, PageBody } from './styles';
import {HiOutlineUserCircle,HiHeart} from "react-icons/hi";
import { Button, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import donationBanner from '../../assets/doacao_banner.png'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TopBarComponent from '../../components/TopBarComponent';
import { Doador } from '../../models/Doador';
import api from '../../services/api';

 
const SignIn: React.FC = () => {

    const [selectedBirthDay, setSelectedBirthDay] = useState(new Date());
    const [Snome, setSNome] = useState("");
    const [Scpf, setScpf] = useState("");
    const [Semail, setSemail] = useState("");
    const [Ssenha, setSsenha] = useState("");
    const [Stelefone, setStelefone] = useState("");

    const updateDate = useCallback(
        (date:any) => {
            if(date){
                    setSelectedBirthDay(date)
            }
        },[],)

        const submitForm = useCallback(()=>{

            console.log("oi");
            const newDoador = {
                nome : Snome,
                cpf:Scpf,
                email:Semail,
                dataNascimento:selectedBirthDay.toISOString(),
                password:Ssenha,
                telefone:Stelefone,
            } ;
            console.log(newDoador);
            api.post('/doador',newDoador);
        },[Scpf, Semail, Snome, Ssenha, selectedBirthDay]);


        const cadastrar = useCallback(
            () => {
                console.log("oi");
            },
            [],
        )

  return(
    <Container>

    <TopBarComponent></TopBarComponent>

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
            <p><TextField id="filled-1" label="Nome" variant="outlined" fullWidth  onChange={evt => setSNome(evt.target.value)}/></p>
            <p>
            <TextField id="filled-2" label="CPF" variant="outlined" onChange={event => setScpf(event.target.value)} />
            <TextField id="filled-3" label="Telefone" variant="outlined" onChange={event => setStelefone(event.target.value)}/>
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
            <p><TextField id="filled-23"  label="E-mail" variant="outlined" fullWidth type="E-mail" onChange={event => setSemail(event.target.value)}/></p>
            <p><TextField id="filled-4" label="Senha" variant="outlined"fullWidth type="password" onChange={event => setSsenha(event.target.value)}/></p>
            <p><TextField id="filled-5" label="Confirmar a senha" variant="outlined"fullWidth type="password"/></p>
            <Button variant="contained" color="primary" onClick={submitForm} >Cadastrar</Button>
        </form>
                </FormBox>
            </InfoBox>
        </PageBody>
        <header></header>
    </Container>  
    )
}

export default SignIn;