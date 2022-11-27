import styled from "styled-components";


export const CameraContainer = styled.section`
width: 100vw;
height: 100vh;
position: relative;
z-index: 1;
background-color: var(--white);
overflow: hidden;
`;

export const Video1 = styled.video`
top: 0;
left: 0;
width: 100%;
height: 100vh;
position: absolute;
object-fit: cover;
object-position: bottom;
z-index: 2;
`
export const Video2 = styled.video`
top: 0;
right: 40%;
width: 60%;
height: 1 auto;
position: absolute;
z-index: 1;
@media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`
export const Contenaire = styled.div`
width: 50%;          
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: absolute;
top: 0;
right: 0;
&>*:nth-child(2){
    margin-left: 6rem;
}&>*:nth-child(3){
    margin-left: 12rem;
}
@media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`
export const Titre = styled.h1`
font-size: var(--fontBig);
z-index: 5;
text-transform: capitalize;
@media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }

`