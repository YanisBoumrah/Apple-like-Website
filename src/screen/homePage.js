import React from "react";
import Citation from "../modules/citation/citationModule";
import IphoneModel3D from "../modules/Iphone3D/iphoneModel3D";
import PresentationProduit from "../modules/presentation/presentationProduitModule";
import Design from "../modules/design/designModule";
import { GlobalStyle } from "../style/globalStyle";
import DisplayModule from "../modules/display/displayModule";
import ProcesseurModule from "../modules/processeur/processeurModule";
import BatterieModule from "../modules/batterie/batterieModule";
import ColorChange from "../modules/colorChangeModule/colorChange";
import CameraModule from "../modules/camera/cameraModule";
import PrixModule from "../modules/Prix/prixModule";
import { ColorContextProvider } from "../context/colorContext";

const HomePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Citation />
      <IphoneModel3D />
      <PresentationProduit />
      <Design />
      <DisplayModule />
      <ProcesseurModule />
      <BatterieModule />
      <ColorContextProvider>
        <ColorChange />
        <CameraModule />
        <PrixModule />
      </ColorContextProvider>
    </div>
  );
};

export default HomePage;
