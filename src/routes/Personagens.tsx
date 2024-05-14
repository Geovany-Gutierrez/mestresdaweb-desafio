// HomePage.tsx
import React from 'react';
import Navbar from "../components/Navbar";
import CarouselCard from '../components/Carousel';

const Personagens: React.FC= ({ }) => {

  return (
    <>
      <Navbar />
      <CarouselCard categoria="personagens" />
    </>
  );
}

export default Personagens;
