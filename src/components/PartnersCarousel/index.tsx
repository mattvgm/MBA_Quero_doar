import React from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { Container,DetailsBox,InstBox,PicBox } from './styles';
import { Button } from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fakeEmpresas } from '../../mockedData/mockedData';
import { Link, useHistory } from 'react-router-dom';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';

const PartnersCarousel: React.FC = () => {
  const history = useHistory();

  
  return(
    <Container>

      <Carousel autoPlay={true}  infiniteLoop showThumbs={false} showIndicators={true} showStatus={false}>
        {fakeEmpresas.map(empresa =>{
          return(
            <InstBox>
              <PicBox>
                <img src={empresa.foto} alt={empresa.nome}/>
              </PicBox>
              {/* <p className="legend">{empresa.nome}</p> */}
          </InstBox>
          )
        })}

      </Carousel>


    </Container>
  );
}

export default PartnersCarousel;