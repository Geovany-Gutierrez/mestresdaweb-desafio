// HomePage.tsx
import React from 'react';
import Navbar from "../components/Navbar";
import CarouselCard from '../components/Carousel';

const Filmes: React.FC= ({ }) => {

  return (
    <>
      <Navbar />
      <CarouselCard categoria="filmes" />
    </>
  );
}

export default Filmes;
