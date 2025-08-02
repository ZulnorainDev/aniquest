import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import card_icon_1 from '../../assets/card_icon.png';
import card_icon_2 from '../../assets/card_icon_1.png';
import card_icon_3 from '../../assets/card_icon_2.png';

const Locations = () => {
    const locations = [
        { title: 'Philadelphie', addressLine1: '1800 JFK Blvd .Suite 300', addressLine2: '19103', email: 'sanfrancisco@tech.com', icon: card_icon_1 },
        { title: 'Miami Floride', addressLine1: '66 W Flagler Street #900', addressLine2: '33130', email: 'newyork@tech.com', icon: card_icon_2 },
        { title: 'Liverpool', addressLine1: '20 Chapel Street,', addressLine2: 'L3 9A', email: 'london@tech.com', icon: card_icon_3 },
    ];

    return (
        <section className="bg-[#F8F7FC] mb-10 sm:mb-16 pt-8 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-[12px] sm:text-base text-[#CA3FD6] font-semibold mb-2">Our Values</p>
                <h2 className="text-lg sm:text-3xl md:text-4xl w-[95%] md:w-[60%] mx-auto font-extrabold text-[#1E1B4B]">
                    Or company is all around the world, come and visit us
                </h2>
                <p className="text-[12px] sm:text-sm md:text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet cons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 sm:mt-12">
                    {locations.map((loc, idx) => (
                        <article key={idx} className="space-y-4 text-left">
                            <div className="w-18 sm:w-14 h-18 sm:h-14 bg-[#CA3FD6] text-white flex items-center justify-center rounded-xl text-2xl">
                                <img src={loc.icon} alt={`${loc.title} Icon`} className="w-1/2" />
                            </div>
                            <h4 className="text-2xl font-extrabold text-black">{loc.title}</h4>
                            <div className="space-y-1 text-sm text-gray-700">
                                <div className="flex items-start gap-2">
                                    <SlLocationPin className="text-[#CA3FD6] text-xl" />
                                    <span className="text-lg md:text-sm lg:text-lg">
                                        {loc.addressLine1} <br />
                                        {loc.addressLine2}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <MdOutlineMail className="text-[#CA3FD6] text-xl" />
                                <span className="text-lg md:text-sm lg:text-lg">{loc.email}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;