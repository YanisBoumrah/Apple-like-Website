import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from '@react-three/drei';



export const ColorContext = createContext({});


export const ColorContextProvider = ({children}) => {
    const { materials } = useGLTF("/scene.gltf");
    const [currentColor, serCurrentColor] = useState({
        color:"#505F4E",
        text:"Alpine Green",
        rgbColor:"80, 95, 78",
    })

    let changeColorContext = (colorObj) => {

        materials.Body.color.set(colorObj.color);
        materials.Frame.color.set(colorObj.color);
        materials.Frame2.color.set(colorObj.color);
        materials.Logo.color.set(colorObj.color);
        materials.Camera_Frame.color.set(colorObj.color);
        materials.Antenna.color.set(colorObj.color);
        materials["Camera_Frame.001"].color.set(colorObj.color);
        serCurrentColor(colorObj)
      }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )

}