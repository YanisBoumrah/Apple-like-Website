import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import React, { Suspense, useContext, useEffect } from "react";
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Model2 } from "../../components/Scene2";
import { ColorContext } from "../../context/colorContext";
import { ColorContainer,Gauche,Centre,Droite } from "./styledColorChange";
const ColorChange = () => {
  const moduleRef = useRef(null);
  const texteRef = useRef(null);
  const droitetRef = useRef(null);
  const gaucheRef = useRef(null);

  const { materials } = useGLTF("/scene.gltf");

  const { currentColor, changeColorContext } = useContext(ColorContext);


  useEffect(() => {
    let elemGauche = gaucheRef.current;
    let elemDroite = droitetRef.current;
    let elemTexte = texteRef.current;

    elemTexte.innerText = currentColor.text;
    elemTexte.style.color = currentColor.color;

    elemDroite.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    elemGauche.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    let Elem = moduleRef.current;
    
    let updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
          // markers: true,

        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <ColorContainer ref={moduleRef}>
      <Gauche ref={gaucheRef} />
      <Centre ref={texteRef} />
      <Droite ref={droitetRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense>
            <Model2 />
          </Suspense>

          <Environment preset="sunset" />
          {/* <OrbitControls /> */}
        </Canvas>
      </Droite>
    </ColorContainer>
  );
};

export default ColorChange;

