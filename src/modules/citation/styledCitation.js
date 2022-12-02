import styled,{ keyframes } from "styled-components";

export const ModuleContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
`;
export const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`;
export const appear = keyframes`
0%{
    opacity: 0;
}
10%{
    opacity: 0.1;
}
20%{
    opacity: 0.2;
}
30%{
    opacity: 0.3;
}
40%{
    opacity: 0.4;
}
50%{
    opacity: 0.5;
}
60%{
    opacity: 0.6;
}
70%{
    opacity: 0.7;
}
80%{
    opacity: 0.8;
}
90%{
    opacity: 0.9;
}
100%{
    opacity: 1;
}

`;

export const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 1s;
    animation-timing-function: ease 1s;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
    font-family: var(--fontR);
  }
  @media screen and (max-width: 70em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    height: var(--fontsm);
  }
  @media screen and (max-width: 40em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontlg);
    padding-top: 1rem; 
  }
`;
export const Image = styled.img`
width: 200px;
height: 200px;
position: absolute;
bottom: 2rem;
animation-name: ${appear};
    animation-duration: 1s;
    animation-timing-function: ease 1s;
    animation-fill-mode: forwards;

`



