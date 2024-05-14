// HomePage.tsx
import React from 'react';
import Navbar from "../components/Navbar";
import CarouselCard from '../components/Carousel';

const Hqs: React.FC= ({ }) => {

  return (
    <>
      <Navbar />
      <CarouselCard categoria="hqs" />
    </>
  );
}

export default Hqs;
