import styled from "styled-components";

export const BatterieContainer = styled.div`
 width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--dark);
`
export const Titre = styled.h1`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  text-transform: none;
  font-size: var(--fontxxxl);
  color: var(--white);
  z-index: 1;
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
    transform: none;
    left: 2rem;
    top: 2rem;
    width: 50%;
  }

`
export const Batterie = styled.ul`
 position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--dark);
  border: 3px solid var(--white);
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;
  li {
    width: 100%;
    height: 5rem;
    background-color: var(--white);
    background-image: linear-gradient(-90deg, var(--gradient));
    opacity: 0;
  }
  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;

  }
  @media screen and (max-width: 48em) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  `