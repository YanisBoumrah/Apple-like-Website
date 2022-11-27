import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Model3 } from "../../components/Scene3";
import { ColorContext } from "../../context/colorContext";


const PrixModule = () => {

  const { materials } = useGLTF("/scene.gltf");

  const priceRef = useRef(null);
  
  const { currentColor, changeColorContext } = useContext(ColorContext);
  
  useEffect(() => {
    priceRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;
  }, [currentColor]);

  
  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };
    changeColorContext(colorObj);
  };

  return (
    <Container>
    <PrixContainer ref={priceRef}>
      <textIndicator> 360&deg; &#x27F2;  </textIndicator>
      <Iphone>
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>

          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <Couleurs>
          <Couleur color="#9BB5CE" onClick={() => updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")} />
          <Couleur color="#F9E5C9" onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")} />
          <Couleur color="#505F4E" onClick={() => updateColor("#505F4E", "Alpine Green", "80, 95, 78")} />
          <Couleur color="#574f6f" onClick={() => updateColor("#574f6f", "Deep Purple", "87, 79, 111")} />
          <Couleur color="#A50011" onClick={() => updateColor("#A50011", "Red", "165, 0, 17")} />
          <Couleur color="#215E7C" onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")} />
        </Couleurs>
      </Iphone>
      <Details>
          <SousTitre>iPhone</SousTitre>
          <Titre>14 Pro Max</Titre>
          <SousTitre>From $1099*</SousTitre>
          <BtnContainer>
            <Btn>Buy</Btn>
            <BtnLink href="#">Learn More &#x2192;</BtnLink>
          </BtnContainer>
        </Details>
    </PrixContainer>
    </Container>
  );
};

export default PrixModule;

const Container = styled.div`
 width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;

`;
const PrixContainer = styled.div`
 width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: "#9BB5CE";
`;

const Iphone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: grab;
`;
const Couleurs = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;
const Couleur = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;
  border: 1px solid var(--dark);
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titre = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SousTitre = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const textIndicator = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;