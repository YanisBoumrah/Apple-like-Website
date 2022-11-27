import React from 'react'
import backgroundvideo from '../../assets/video/video1.mp4'
import {
  ModuleContainer,
  Video,
  Titre,
  Container,
} from './styledPres'


const PresentationProduit = () => {
  return (
    <ModuleContainer>
      <Video><video src ={backgroundvideo} type="video/mp4" autoPlay muted loop /></Video>
        <Titre>Iphone 13 Pro Max</Titre>
        <Container>
          <span>So.Cold.</span>
          <span>So.Bold.</span>
        </Container>
    </ModuleContainer>
  )
}

export default PresentationProduit


