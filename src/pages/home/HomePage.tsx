import React from 'react';
import CarouselCard from '../../components/Carousel';
import Navbar from '../../components/Navbar';

interface HomeSectionProps {
  categoria: string; // propriedade que indica a categoria dos itens a serem exibidos no carrossel
}

// definindo a homesection como uma funcao com props opcional
const HomeSection: React.FC<HomeSectionProps> = ({ categoria }) => {
  return (
    <>
      <Navbar />
      <CarouselCard categoria={categoria} />
    </>
  );
}

export default HomeSection;