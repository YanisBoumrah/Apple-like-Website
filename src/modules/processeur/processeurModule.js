import React from 'react'
import a15 from '../../assets/Images/A15-Bionic.jpg'
import {ProcesseurContainer, Titre, ImageContainer, Texte} from './styledProcesseur'


const ProcesseurModule = () => {
  return (
    <ProcesseurContainer>
      <Titre>
      Fastest processor
      </Titre>
      <ImageContainer>
      <img src={a15} alt="A15 processeur" />
      </ImageContainer>
      <Texte>
        <span>
        The A15 Bionic chip is the fastest chip ever in a smartphone. It’s up to 50% faster than the A14 Bionic for CPU performance, and up to 40% faster for GPU performance. So everything you do is fast and fluid.
        </span>
        <span>
        The A15 Bionic chip is even faster than the A14 Bionic chip in the iPhone 12 Pro. And it’s up to 50% faster than the A13 Bionic chip in the iPhone 11 Pro.
        </span>
      </Texte>
    </ProcesseurContainer>
  )
}

export default ProcesseurModule

