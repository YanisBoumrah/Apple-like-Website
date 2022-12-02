import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { ModuleContainer, MainTitle, RightTextContainer, LeftTextContainer, TextContainer, Title, Texte, MovingText } from "./styledDisplay";





const DisplayModule = () => {
  const container =useRef(null)
  const textOne =useRef(null)
  const textTwo =useRef(null)

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "-20%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "20%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, [])
  return (
    <ModuleContainer>
      <MainTitle>Immerssive <br/> Display</MainTitle>
      <RightTextContainer>
        <Title>
          Super Retina XDR display
        </Title>
        <Texte>
        The Super Retina and Super Retina XDR displays also feature HDR (extended dynamic range) technology, which provides a wide range of dark and bright areas in photos and videos. It displays deep blacks and pure whites while rendering the beautiful shades in between. Your photos look sharper and anything you watch in Dolby Vision, HDR10 or HLG has never looked better.        </Texte>
      </RightTextContainer>
      <LeftTextContainer ref ={container}>
        <Title>
          Big is Better
        </Title>
        <Texte>
        Again, it won't surprise you to learn that the iPhone 14 Pro Max's screen is larger than the iPhone 14 Pro's. Apple often talks about 6.1 inches and 6.7 inches, but in reality it's a bit more subtle. Indeed, the iPhone 14 Pro offers a diagonal of 6.12 inches (without taking into account the rounded corners). In the same way, we reach only 6.69 inches with the iPhone 14 Pro Max.        </Texte>
      </LeftTextContainer>
      <TextContainer>
        <MovingText ref={textOne} >Tougher then ever!</MovingText>
        <MovingText ref={textTwo}>Every touch matters.</MovingText>

      </TextContainer>
    </ModuleContainer>
  );
};

export default DisplayModule;

