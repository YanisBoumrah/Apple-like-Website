import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;

`;

export const PrixContainer = styled.div`
 width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: "red";

`;

export const Iphone = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: grab;
  @media screen and (max-width: 64em) {
width : 100%;  }

`;

export const Couleurs = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right:100%;

  @media screen and (max-width: 64em) {
  right:83%;
    width: auto;
  }
`;

export const Couleur = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;
  border: 1px solid var(--dark);
`;
export const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 64em) {
    width: 100%;
  }
`;

export const Titre = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

export const SousTitre = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

export const Btn = styled.button`
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
export const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const Degree = styled.div`
  font-size: var(--fontsm);
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: absolute;
  top: 2rem;
`;
export const P = styled.span`
color:red;
`