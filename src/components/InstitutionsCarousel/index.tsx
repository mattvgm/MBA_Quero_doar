import React from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { Container,DetailsBox,InstBox,PicBox } from './styles';
import { Button } from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fakeInstituicoes } from '../../mockedData/mockedData';
import { Link, useHistory } from 'react-router-dom';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';

const InstitutionsCarousel: React.FC = () => {
  const history = useHistory();

  
  return(
    <Container>

      <Carousel autoPlay={true} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
        {fakeInstituicoes.map(instituicao =>{
          return(
            <InstBox>
              <PicBox>
                <img  src={instituicao.foto} alt={instituicao.nome}/>
              <LinearProgress  variant="determinate" value={80} style={{height:20,width:'100%'}} />
              </PicBox>

              <DetailsBox>

                <h3>Instituição {instituicao.nome}</h3>
                <p>{instituicao.descricao}</p>
                <Button  variant="contained" color="primary"  component={Link} to="/payment">Doar</Button>
              </DetailsBox>
              {/* <p className="legend">{instituicao.nome}</p> */}
          </InstBox>
          )
        })}

      </Carousel>


    </Container>
  );
}

export default InstitutionsCarousel;