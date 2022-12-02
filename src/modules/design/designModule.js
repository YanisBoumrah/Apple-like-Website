import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { ModuleContainer,Text1,Text2 } from './styledDesign.js'


const Design = () => {
  const container =useRef(null)
  const textOne =useRef(null)
  const textTwo =useRef(null)
  const testref =useRef(null)


  
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
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".text",
          scrub: 1,
          start: "top center",
          end: "bottom center",
        }
      }).to(".text p", {
        backgroundPositionX: "0%",
        stagger: 1,
        
      });
    
    return () => {
      if (t1) t1.kill();
      if (t2) t2.kill();
    };
  }, [])

 
  return (
    <>
    <ModuleContainer ref={container}>
      <Text1 ref={textOne}>
      <span>Flowless Design with strong durability</span> 
      </Text1>
      <Text2 ref ={textTwo}>
      <span>Flowless Design with strong durability </span>
      </Text2>
      </ModuleContainer>
      </>

  )
}

export default Design


const Div = styled.div`
background-color: black;

display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 200vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #161616;
  .container .text {
  font-size: 200px;
  font-family: "Ogg";
}
.text > p {
  background: linear-gradient(
    to right,
    rgb(255, 255, 255) 50%,
    rgb(37, 37, 37) 50%
  );
  font-size: 2rem;
  background-size: 200% 100%;
  background-position-x: 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: -250px;
  margin-left: 50px;
}
`

