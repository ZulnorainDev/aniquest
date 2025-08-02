import React from 'react';
import Navbar from '../components/Navbar';
import logo2 from '../assets/logo_gradient.png'
import FAQ from '../components/Price/FAQ';
import PriceCard from '../components/Price/PriceCard';
import Footer from '../components/Footer';
import FaqGradient from '../components/Price/FaqGradient';

const Price = () => {


    return (
        <main>
            <div className='container mx-auto px-4'>
                <Navbar textColor="text-black" logo={logo2} />
   
                {/* ************* Price Page Header text ********** */}

                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-5xl font-bold lg:w-[50%] mx-auto sm:leading-[60px]">
                        Start writing with 10x faster with AI
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-4xl md:w-full mx-auto text-xs sm:text-sm md:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                    </p>
                </div>

                <PriceCard />
                <FAQ />
                <section className='mb-10'>
                    <FaqGradient />
                </section>
            </div>
            <Footer padding="sm:pt-20" />

        </main>
    );
};

export default Price;
