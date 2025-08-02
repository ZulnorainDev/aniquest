import React from 'react';
import Footer from '../components/Footer';
import FooterTop from '../components/FooterTop';
import HeroSection from '../components/AboutUs/HeroSection';
import TeamStorySection from '../components/AboutUs/TeamStory';
import ValuesSection from '../components/AboutUs/Values';
import WhatWeDoSection from '../components/AboutUs/WhatWeDo';
import LocationsSection from '../components/AboutUs/Locations';
import MapSection from '../components/AboutUs/Maps';

const AboutUs = () => {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <TeamStorySection />
            <ValuesSection />
            <WhatWeDoSection />
            <LocationsSection />
            <MapSection />

            <div className='w-full'>
                <div className="bg-[#2F1444] h-24 md:h-52"></div>
                <div className="bg-center-gradient h-28 md:h-52 flex items-end sm:items-center justify-center">

                    <div className='container mx-auto px-4 z-40'>
                        <FooterTop />
                    </div>
                </div>
            </div>

            <Footer padding="sm:pt-40 md:pt-60" />
        </main>
    );
};

export default AboutUs;