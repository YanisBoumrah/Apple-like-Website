import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import img from "../../assets/Images/about-steve-jobs.jpg"
import { useRef } from "react";
import { useLayoutEffect } from "react";
import {ModuleContainer,Container,Text,Image} from "./styledCitation.js";

const Citation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ModuleContainerRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = ModuleContainerRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

 
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <ModuleContainer ref={ModuleContainerRef}>
      <Container>
        <Text delay="0s">
          {" "}
          <span>&#8220; You can't connect the dots looking forward;</span>{" "}
        </Text>
        <Text delay="0.4s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;you can only connect them looking backward.
          </span>{" "}
        </Text>
        <Text delay="0.8s">
          {" "}
          <span>&nbsp;&nbsp;&nbsp;so you have to trust that the dots</span>{" "}
        </Text>
        <Text delay="1.2s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;
          </span>{" "}
        </Text>
        <Text delay="1.6s">
          {" "}
          <span className="author">&#x23AF; Steve Jobs</span>{" "}
        </Text>
      </Container>
      <Image src={img} />
    </ModuleContainer>
  );
};


export default Citation;