import React from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { Container,DetailsBox,InstBox,PicBox, Picture } from './styles';
import { AppBar, Box, Button, ButtonGroup, makeStyles, Tab, Tabs, Theme, Typography } from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useHistory } from 'react-router-dom';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { Instituicao } from '../../models/Instituição';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface InstProps {
  Instituicoes:Instituicao[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const InstitutionsCarousel: React.FC<InstProps> =({children,
  Instituicoes,
...rest}) => {

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);

  
  return(
    <Container>

      <Carousel autoPlay={true} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false} onChange={()=>{setValue(0)}}>
        {Instituicoes.map(instituicao =>{
          return(
            <InstBox key={instituicao.id}>
              <PicBox>
              <h2>{instituicao.nome}</h2>
                <Picture>

                  <img width={50} src={instituicao.foto} alt={instituicao.nome}/>
                </Picture>
                  
                  <p>{instituicao.descricao}</p>
                {/* <p className="legend">{instituicao.nome}</p> */}
              <LinearProgress variant="determinate" value={80} style={{height:20,width:'100%'}} />

              <AppBar position="static" color={'transparent'}>
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="R$10,00"  />
                    <Tab label="R$15,00" />
                    <Tab label="R$20,00" />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  Ganhe 1 Cupom Ifood de R$10,00
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Ganhe os itens do tier anterior e +1 Cupom Ifood de R$15,00
                </TabPanel>
                <TabPanel value={value} index={2}>
                Ganhe os itens do tier anterior +1 Cupom Uber de R$10,00
                </TabPanel>
              </PicBox>

              <DetailsBox>
{/* 
                <h3>Instituição {instituicao.nome}</h3>
                <p>{instituicao.descricao}</p> */}
  
 

                <Button  variant="contained" color="primary"  component={Link} to={{pathname:"/payment",state:{instituicao}}}>Doar</Button>
              </DetailsBox>
          </InstBox>
          )
        })}

      </Carousel>


    </Container>
  );
}

export default InstitutionsCarousel;