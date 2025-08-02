import React from 'react';
import { IoBook } from 'react-icons/io5';
import { FaCircleCheck, FaThumbsUp } from 'react-icons/fa6';
import { IoIosPaperPlane } from 'react-icons/io';
import anime from '../../assets/anime_img.jpeg';

const Details = () => {
    // Array of card data with dynamic icon components
    const cards = [
        {
            title: 'Full Stories',
            description: 'Interesting and complex stories, with a good development and ending.',
            icon: <IoBook color="white" />,
        },
        {
            title: 'Posting',
            description: 'For reddit or Quora, continue your conversation or post in your blog',
            icon: <IoIosPaperPlane color="white" />,
        },
        {
            title: 'Feedback',
            description: 'In addition to writing, Ai can review text & give tips to improve them',
            icon: <FaThumbsUp color="white" />,
        },
    ];

    const features = [
        "Powered by GPT-3 OpenAI",
        "Different genres and tones",
        "To Publish on network",
    ];


    return (
        <div className="container mx-auto px-4">

            {/* Section: Quality Content Header */}
            <section className="flex sm:items-center flex-col sm:flex-row justify-between gap-3 sm:gap-40 lg:gap-46 py-10 lg:py-16">
                <h3 className="w-full sm:w-[40%] text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Quality Content in just One Click
                </h3>
                <p className="w-full sm:w-[60%] text-[10px] lg:text-sm text-gray-400">
                    Whether you need it urgently or just don't like to wait, our AI takes just seconds to deliver a complete work. No more waiting in commission queues.
                </p>
            </section>

            {/* Section: Content Cards - using map */}

            <section className="flex flex-col md:flex-row items-stretch justify-between gap-5">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col justify-between h-full bg-custom-gradient px-6 lg:px-4 py-8 xl:pb-12 rounded-[10px]"
                    >
                        {/* Icon */}
                        <div className="w-[3rem] h-[3rem] bg-[#2F1444] rounded-full flex items-center justify-center mb-4">
                            {card.icon}
                        </div>

                        {/* Title */}
                        <h4 className="font-bold text-lg xl:text-2xl mb-2">{card.title}</h4>

                        {/* Description (grows and aligns evenly) */}
                        <p className="text-sm md:text-[10px] lg:text-sm xl:text-base text-gray-500 flex-grow">
                            {card.description}
                        </p>
                    </div>
                ))}
            </section>



            {/* Section: AI Feature Explanation */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">

                {/* Image Section */}
                <img
                    src={anime}
                    alt="Anime Illustration"
                    className="md:w-[50%] rounded-2xl"
                />

                {/* Text and Features */}
                <div className="flex flex-col gap-3 lg:gap-10">
                    <h3 className="font-bold text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl">
                        Anime Text in ablink Automatic and Immediate
                    </h3>
                    <p className="md:w-[70%] text-gray-500 text-sm md:text-[10px] lg:text-sm">
                        The technology of our AI ensures great writing, without waiting, without creative blocks. Instant content only.
                    </p>

                    {/* Feature List */}
                    <div className="flex flex-col items-start gap-3 md:gap-0">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <FaCircleCheck className="text-sm text-[#3d90fc] md:text-[10px] lg:text-base" />
                                <p className="text-sm md:text-[10px] lg:text-base font-semibold">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <p className="text-[#B0109F] text-sm lg:text-base">Read More</p>
                        <span className="hidden text-[#B0109F] md:block font-extrabold">→</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;
