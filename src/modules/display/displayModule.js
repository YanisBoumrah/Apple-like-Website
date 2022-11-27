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
        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
        </Texte>
      </RightTextContainer>
      <LeftTextContainer ref ={container}>
        <Title>
          Big is Better
        </Title>
        <Texte>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
        </Texte>
      </LeftTextContainer>
      <TextContainer>
        <MovingText ref={textOne} >Tougher then ever!</MovingText>
        <MovingText ref={textTwo}>Every touch matters.</MovingText>

      </TextContainer>
    </ModuleContainer>
  );
};

export default DisplayModule;

