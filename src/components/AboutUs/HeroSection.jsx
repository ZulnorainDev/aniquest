import React from 'react';
import Navbar from '../../components/Navbar';
import logo1 from '../../assets/logo_white.png';
import frame1 from '../../assets/Frame_1.png';



const HeroSection = () => {
  return (
    <section className="w-full h-[500px] sm:h-[600px] md:h-[700px] bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: 'url(/Rectangle_1.png)' }}>
      <div className="container mx-auto px-4 relative">
        <Navbar textColor="text-white" logo={logo1} />


        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h4 className="text-sm font-semibold text-gray-300 mb-2 sm:mb-4 md:mb-6 lg:mb-8">About Us</h4>
          <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:leading-[60px] xl:leading-[70px]">
            Our mission at Aniuqest is to help users create their own anime stories
          </h1>
          <p className="text-[12px] md:text-lg text-gray-300 max-w-3xl xl:max-w-5xl mx-auto">
            Aniuqest is a user-friendly tool that helps users create their own anime stories.
            It provides various templates and resources that users can use to create their own unique stories.
            Whether you're a fan of anime or just looking for a new creative outlet, Aniuqest is the perfect place for you!
          </p>
        </div>
        <div className="bg-white shadow-2xs mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] py-[1rem] sm:py-[2rem] flex items-center justify-center rounded-2xl md:rounded-3xl px-4 sm:px-8 md:px-12">
          <img src={frame1} alt="Hero Illustration" className="w-[70%] md:w-[70%] lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


