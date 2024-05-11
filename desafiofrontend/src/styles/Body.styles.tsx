import styled from "styled-components";

export const StyledCarouselWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 1rem;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-padding: 1rem;
  align-items: center;
`;


export const StyledCarouselSlide = styled.div`
  flex: 0 0 auto;
  width: calc(600px);
  margin-right: 1rem;

  &:first-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    width: calc(50% - 1rem); 
    margin-right: 0.5rem; 
  }

  @media (max-width: 768px) {
    width: calc(100% - 1rem);
  }

  @media (min-width: 1440px) {
    width: calc(33.333% - 1rem); 
    margin-right: 0.8rem;
  }
`;
export const StyledCardContainer = styled.div<{ $isExpanded: boolean }>`
  background: ${(props) =>
    props.$isExpanded
      ? "linear-gradient(to left, rgb(255, 0, 0), rgba(128, 0, 0))"
      : "transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  position: relative;
  scroll-snap-align: start;
`;
export const StyledCardImage = styled.div<{ $imageUrl?: string }>`
  background-image: url(${(props) =>
    props.$imageUrl ? props.$imageUrl : "/images/background.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  height: 65vw;
  width: 80%;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 425px) {
    width: 80%;
    height: 100vw;
  }
  
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 80%;
    height: 80vw;
  }
  @media (min-width: 1440px) {
    width: 80%; 
    height: 40vw;
  }
`;

export const StyledImageTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledImageText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledExpandTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledExpandText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledDetailsText = styled.p`
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledImageDescription = styled.div`
  background: linear-gradient(to right, rgb(255, 0, 0), rgba(128, 0, 0, 30.2%));
  width: 100%;
  height: 50%;
  border-radius: 8px;
  transform: translateY(100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.4em;
  transition: transform 0.3s ease;
`;

export const StyledCardExpand = styled.div`
  width: 60%;
  padding: 1.2rem;
  height: 100%;
  border-radius: 8px;
  color: #ffffff;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

export const StyledExpandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledCloseButton = styled.button`
  border-radius: 50px;
  width: 1.8rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
`;

export const StyledDropdown = styled.select`
  padding: 10px;
  margin: 40px 60px;
  border: 1px solid #6f0000;
  color: #6f0000;
  border-radius: 5px;
  cursor: pointer;
  background-color: #020202;
  font-size: 1.2rem;
  width: 15%;
  box-shadow: 10px 10px 20px -7px rgba(111,0,0,1);
  
  &:hover {
    border-color: #8r0f10;
  }

  &:focus {
    outline: none;
    border-color: #480000;
  }

  @media(max-width: 768px) {
    width: 80%;
    margin-left: 20px;
  }

`;