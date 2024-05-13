// HomePage.tsx
import React from 'react';
import Navbar from "../../components/Navbar";
import CarouselCard from '../../components/Body';

interface HomePageProps {
  categoria: string;
}

const HomePage: React.FC<HomePageProps> = ({ }) => {

  return (
    <>
      <Navbar />
      <CarouselCard />
    </>
  );
}

export default HomePage;
