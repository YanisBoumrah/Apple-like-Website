import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import  v1 from '../../assets/video/Scuba Diving - 699.mp4'
import  v2 from '../../assets/video/Skate - 49791.mp4'
import { CameraContainer,Video1,Video2,Contenaire,Titre } from './styledCamera'

const CameraModule = () => {
    const videoModuleRef = useRef(null)
    const video1 = useRef(null)
    const video2 = useRef(null)
    const titre = useRef(null)

    let elements =gsap.utils.selector(titre)

    useLayoutEffect(() => {
        const Elem = videoModuleRef.current
        const videoElem1 = video1.current
        const videoElem2 = video2.current


        gsap.to(Elem, {
            scrollTrigger: {
              trigger: Elem,
              start: "top top",
              end: "bottom+=500 botom",
              scrub: true,
              pin: true,
              pinSpacing: true,

            },
          });
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: Elem,
                start: "top top",
                end: "bottom+=500 botom",
                scrub: true,

                },
        }).to(videoElem1,{scale:0.3},"key1").to(videoElem2,{scale:0.6},"key1")
        
        elements("h1").forEach((elem) => {
            t2.fromTo(
                elem,
                {
                    scrollTrigger: {
                        trigger: Elem,
                        start: "top top",
                        end: "bottom botom",
                        scrub: true,
                        },
                        x:100,
                        opacity:0,
                },
                {
                    x:0,
                    opacity:1,
                }
            )
        })  
        return () => {

        }

    }, [])

  return (
    <CameraContainer ref={videoModuleRef}>
    <Video1 ref={video1} src ={v1} type="video/mp4" autoPlay muted loop />
    <Video2 ref={video2} src ={v2} type="video/mp4" autoPlay muted loop />
    <Contenaire ref={titre}>
        <Titre>Ready</Titre>
        <Titre>Steady</Titre>
        <Titre>Action</Titre>
    </Contenaire>
    </CameraContainer>
  )
}

export default CameraModule
