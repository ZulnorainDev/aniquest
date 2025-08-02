import React from 'react';
import map from '../../assets/Frame.png';

const MapSection = () => {
  return (
    <section className="container mx-auto px-4 mb-10 sm:mb-20">
      <img src={map} alt="World Map" className="w-full" />
    </section>
  );
};

export default MapSection;