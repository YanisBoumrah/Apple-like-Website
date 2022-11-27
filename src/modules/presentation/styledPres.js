import styled from "styled-components";

export const ModuleContainer  = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    overflow: hidden;
    background-color: var(--dark);  
    `

export const Titre = styled.h1`
position: absolute;
top: 2rem;
left: 2rem;
font-size: var(--fontlg);
font-family: var(--fontL);
color: var(--greyLight);
`
export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(45deg, var(--gradient));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
z-index: 1;

span{
    font-size: var(--fontxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding:2rem;
    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }

}
@media screen and (max-width: 48em) {
    flex-direction: column;
    background-image: linear-gradient(90deg, var(--gradient));
    align-items: flex-start;
    filter: brightness(1.1);
    & > *:last-child {
      align-self: flex-end;
    }
    height: 80vh;
    padding: 0 1rem;
  }
`
export const Video = styled.div`
width: 100%;
min-height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 0;
video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
}
`

