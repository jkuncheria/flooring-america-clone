import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import Visualizer from '../components/Visualizer';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Difference />
      <Visualizer />
      <Inspiration />
      <Testimonials />
    </>
  );
};

export default Home;

