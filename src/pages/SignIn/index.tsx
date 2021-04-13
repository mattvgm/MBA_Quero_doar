import React, { useCallback, useState } from 'react';

import { Container,FormBox, InfoBox, LeftBox, PageBody,FormLinks ,PartnersBox} from './styles';
import {HiOutlineUserCircle,HiHeart,HiUsers} from "react-icons/hi";
import { Button,  Paper, TextField } from '@material-ui/core';

import TopBarComponent from '../../components/TopBarComponent';
import Carousel from 'react-material-ui-carousel';
import PartnersCarousel from '../../components/PartnersCarousel';
import { Link } from 'react-router-dom';

 

function Item(props:any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
const SignUp: React.FC = () => {

    const [selectedBirthDay, setSelectedBirthDay] = useState(new Date());

    const updateDate = useCallback(
        (date:any) => {
            if(date){
                    setSelectedBirthDay(date)
            }
        },[],)

        const submitForm = useCallback(()=>{

            console.log("oi");
        },[]);

        var items = [
            {
                name: "Random Name #1",
                description: "Probably the most random thing you have ever seen!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }
        ]


  return(
    <Container>

    <TopBarComponent></TopBarComponent>

        <PageBody>
            <InfoBox>
                <LeftBox>
                    <h2><b>Acreditamos que juntos podemos mudar o mundo</b></h2>
                    <p><b>Faça sua doação para uma instituição escolhendo entre um dos valores</b></p>
                    <p><b>Contribua para ganhar cupons e vantagens exclusivas!</b></p>
                    <PartnersBox>
                        <h3><b>Empresas parceiras</b></h3>
                    <PartnersCarousel/>
                    </PartnersBox>
                </LeftBox>
            </InfoBox>

            <InfoBox>
                <FormBox>
                    <h2><HiUsers size={20}/> Entre com seu email e senha</h2>

                    <form action="/action_page.php">
                        <p><TextField id="filled-6" label="E-mail" variant="outlined"fullWidth type="E-mail" /></p>
                        <p><TextField id="filled-4" label="Senha" variant="outlined"fullWidth type="password" /></p>
                        <p>
                            <FormLinks>
                                <a href="https://teste">Esqueci minha senha</a>
                                <Link to="/signup">Quero me cadastrar</Link>
                            </FormLinks>
                        </p>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>

                        <Button  variant="contained" color="primary" onClick={submitForm} component={Link} to="/institutions" >Entrar</Button>
                        </div>
                    </form>
                </FormBox>
            </InfoBox>
        </PageBody>
        <header></header>
    </Container>  
    )
}

export default SignUp;