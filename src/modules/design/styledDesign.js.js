import styled from "styled-components";

export const ModuleContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
`;
export const Text1 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 50vh;
  z-index: 1;
  color: var(--white);
  span{
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 500;
    text-transform: capitalize;
  }
  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
  `
export const Text2 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 50vh;
  z-index: 1;
  color: var(--white);
  span{
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 500;
    text-transform: capitalize;
  }
  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
  `
