import React from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../../components/Scene";
import { Suspense } from "react";
import{Contenaire} from './styledIphone3D'

const IphoneModel3D = () => {
  return (
    <Contenaire id="Ip-model">
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Environment preset="sunset" />
        <Suspense>
          <Model />
        </Suspense>
        <AdaptiveDpr pixelated  />
      </Canvas>
    </Contenaire>
  );
};

export default IphoneModel3D;
