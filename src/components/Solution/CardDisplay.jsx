import React from 'react';
import FloatingActions from './FloatingActions';

/**
 * Component that renders a dynamic list of expandable cards with options.
 */
const CardDisplay = ({ cards, toggleCard, toggleOption, optionsList, optionContentMap }) => {
    return (
        <div className="pt-6 relative">
            <div className="w-full h-[40rem] pb-10 border border-[#9638C5] rounded-xl overflow-y-scroll scrollbar-hide">
                <div className="flex flex-wrap gap-10 w-full pb-10 rounded-2xl outline-none">
                    {cards.map((card, index) => (
                        <div key={index} className='shadow-2xl w-full h-fit md:w-[20rem] lg:w-[28rem] xl:w-[36rem]'>
                            <div
                                className='bg-[#CA3FD6] text-white p-3 sm:p-4 text-sm sm:text-base md:text-xl rounded-lg font-medium sm:font-semibold cursor-pointer'
                                onClick={() => toggleCard(index)}
                            >
                                {card.text}
                            </div>

                            {card.expand && (
                                <div className='text-xs sm:text-sm text-gray-700 space-y-2'>
                                    {optionsList.map((option, optIndex) => (
                                        <div key={optIndex}>
                                            <div
                                                className={`font-semibold px-4 py-4 cursor-pointer flex justify-between ${card.options[option] ? "border-b-0" : "border-b border-gray-300"}`}
                                                onClick={() => toggleOption(index, option)}
                                            >
                                                {option}
                                                {card.options[option] ?
                                                    <span className="rotate-90 inline-block text-gray-500">{'>'}</span>
                                                    : <span className="inline-block text-gray-500">{'>'}</span>
                                                }
                                            </div>

                                            {card.options[option] && (
                                                <div className="pl-4 text-gray-600 text-xs sm:text-sm">
                                                    {optionContentMap[option] || "No Content available for this option."}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* floating Action buttons */}
            <FloatingActions />
        </div>
    );
};

export default CardDisplay;
