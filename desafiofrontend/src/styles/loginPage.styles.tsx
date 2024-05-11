import styled, { keyframes as kf } from "styled-components";

const slideAnimation = kf`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(-25%) translateY(-20%);
  }
`;

const fadeInAnimation = kf`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled.div`
  animation: ${fadeInAnimation} 0.4s ease-in-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 50%;
  background-image: linear-gradient(
      to right,
      #000000,
      rgba(0, 0, 0, 0.1)
    ),
    url("/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        #000000,
        rgba(0, 0, 0, 0.1)
      ),
      url("/images/background.jpg");
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${({ showOverlay }) => (showOverlay ? 1 : 0)};
  transition: opacity 0.4s linear;
  
  @media (min-width: 1440px) {
    animation: 0.5s ease-in-out, ${slideAnimation} 2s ease-in-out 0.5s;
  }
`;