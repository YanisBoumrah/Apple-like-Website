import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Model3 } from "../../components/Scene3";
import { ColorContext } from "../../context/colorContext";
import { Container,PrixContainer,Iphone,Couleurs,Couleur,Details,Titre,SousTitre,BtnContainer,Btn,BtnLink,Degree,P } from "./styledPrix";

const PrixModule = () => {

  const { materials } = useGLTF("/scene.gltf");

  const priceRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const { currentColor, changeColorContext } = useContext(ColorContext);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  
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
    <Degree> 360&deg; &#x27F2;</Degree>
      <Iphone>
      <Couleurs>
          <Couleur color="#505F4E" onClick={() => updateColor("#505F4E", "Alpine Green", "80, 95, 78")} />
          <Couleur color="#F9E5C9" onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")} />
          <Couleur color="#574f6f" onClick={() => updateColor("#574f6f", "Deep Purple", "87, 79, 111")} />
          <Couleur color="#A50011" onClick={() => updateColor("#A50011", "Red", "165, 0, 17")} />
          <Couleur color="#215E7C" onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")} />
        </Couleurs>

        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>

          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
        </Canvas>
        
      </Iphone>
      <Details >
          <SousTitre>iPhone</SousTitre>
          <Titre>13 Pro Max</Titre>
          <SousTitre>For <P>1 Da</P> Only</SousTitre>
          <BtnContainer>
            <Btn onClick={()=>handleShowForm()}>Buy</Btn>
            <BtnLink href="#">Learn More &#x2192;</BtnLink>
          </BtnContainer>
        </Details>
    </PrixContainer>
    {/* {showForm ? 
    <div>
      <span>Hello world</span>
    </div>:null}
    <Button onClick={()=>handleShowForm()}>Zebbi</Button> */}
    </Container>
  );
};

export default PrixModule;

