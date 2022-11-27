import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { BatterieContainer, Titre, Batterie } from './styledBatterie'
const BatterieModule = () => {
  const batterie = useRef(null);
  let elements = gsap.utils.selector(batterie);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({});

    elements("li").forEach((el) => {
      t1.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
        opacity: 1,
      });
    });

    return () => {};
  }, []);

  return (
    <BatterieContainer id="batterie">
      <Titre>
      Longest battery life ever in an iPhone.
      </Titre>
      <Batterie ref={batterie}>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
      </Batterie>

    </BatterieContainer>
  )
}

export default BatterieModule


