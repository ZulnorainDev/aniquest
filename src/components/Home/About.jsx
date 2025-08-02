import React from 'react';
import Carousel from '../Carousel';
import GradientCard from '../GradientCard';
import FooterTop from '../FooterTop';


const About = () => {
    const stats = [
        {
            value: "20+",
            description: "AI and Machine Learning Patterns",
        },
        {
            value: "76+",
            description: "Users approve and use regularly AI writing",
        },
        {
            value: ">96%",
            description: "AI and Machine Learning Patterns",
        },
        {
            value: "67",
            description: "Industry leading eNPS score",
        },
    ];

    return (
        <section className=''>

            {/* Introductory Stats Section */}
            <div className='bg-[#EFEBF8]'>

                <div className="flex flex-col justify-between gap-14 container mx-auto px-4 pt-10 pb-30 sm:pb-50 bg-[#EFEBF8] relative">


                    <div className="grid grid-cols-1 md:grid-cols-[60%_10%_28%] lg:grid-cols-[60%_5%_30%] items-center gap-4">
                        <h4 className="text-2xl lg:text-4xl font-semibold">
                            Fantast Stories and Anime Post Specialized AI
                        </h4>
                        <div className="hidden md:block" />
                        <p className="text-[10px] lg:text-sm text-gray-500 md:w-full">
                            Our artificial intelligence can complete, start, continue or make from scratch a good anime and fantasy story, a reddit post or an answer to conversations.
                        </p>
                    </div>

                    {/* Feature Counters */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10">
                        {stats.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-2">
                                <span className="text-[#D42B8B] font-bold text-3xl">{item.value}</span>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>



                </div>
            </div>

            {/* Middle Grid Section */}

            <div className='bg-[#EFEBF8] h-0 flex items-center justify-center'>
                <div className='container mx-auto px-4 z-50'>
                    <GradientCard />
                </div>

            </div>


            <div className="bg-[#2F1444]">


                <div className='container mx-auto px-4 relative pb-15'>
                    <h4 className="w-1/2 md:w-full mx-auto font-bold pt-30 text-xl sm:text-4xl text-white text-center">
                        What they say about us
                    </h4>

                    {/* Testimonials Carousel */}
                    <div className="pb-12 md:pb-36">
                        <Carousel />
                    </div>



                </div>


            </div>

            {/* Footer Color Strip */}
            <div className="bg-center-gradient h-24 md:h-52 flex items-end sm:items-center justify-center">
                <div className='container mx-auto px-4 z-40'>
                    <FooterTop />
                </div>
            </div>

        </section>
    );
};

export default About;