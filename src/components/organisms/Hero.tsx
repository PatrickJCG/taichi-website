import React from 'react';
import { HeroCarousel } from '../molecules';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <HeroCarousel />
    </section>
  );
};
