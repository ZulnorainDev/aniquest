import React from 'react';
import { FaFlag } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";

const Values = () => {
    const values = [
        { icon: <HiLightBulb />, title: 'Team work', description: 'Our company takes ownership of our products and is proud to provide industry-leading software that our customers can rely on.' },
        { icon: <FaFlag />, title: 'Take ownership', description: 'Our company takes ownership of our products and is proud to provide industry-leading software that our customers can rely on.' },
        { icon: <MdPeopleAlt />, title: 'Move fast', description: 'Our company takes ownership of our products and is proud to provide industry-leading software that our customers can rely on.' },
        { icon: <AiFillThunderbolt />, title: 'Be innovative', description: 'Our company takes ownership of our products and is proud to provide industry-leading software that our customers can rely on.' },
    ];

    return (
        <section className="pb-16 relative">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm text-[#CA3FD6] font-semibold">Our Values</p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#0D0C54] mt-2">
                    A company is only as strong <br /> as its values.
                </h2>
                <div className="bg-[#EDE5F5] rounded-xl sm:px-8 py-6 mt-6 text-[#40406A] text-[12px] sm:text-base md:max-w-2xl lg:max-w-3xl mx-auto relative pb-96">
                    <p className="container mx-auto px-4">
                        At our software company, we pride ourselves on having a set of strong values that bring great people together. Our values include excellence,
                        teamwork, innovation, and respect. By adhering to these values, we create a positive and supportive environment where our team can thrive.
                    </p>
                </div>
                <div className="container px-4 absolute left-1/2 transform -translate-x-1/2 top-[50%] mt-[-60px] w-[90%]">
                    <div className="grid gap-6 md:grid-cols-2">
                        {values.map((item, idx) => (
                            <article key={idx} className="flex items-start p-4 sm:p-6 bg-white rounded-2xl shadow-lg text-left space-x-4">
                                <div className="flex text-[#CA3FD6] items-center justify-center w-32 sm:w-24 md:w-38 lg:w-24 xl:w-20 h-10 sm:h-12 bg-[#EBDCF4] text-2xl rounded-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-black">{item.title}</h4>
                                    <p className="text-[10px] xs:text-[12px] md:text-sm text-gray-700 mt-1">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;