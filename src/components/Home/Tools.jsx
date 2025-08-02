import React from 'react';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';
import icon9 from '../../assets/icon9.png';
import icon10 from '../../assets/icon10.png';
import icon11 from '../../assets/icon11.png';
import icon12 from '../../assets/icon12.png';
import icon13 from '../../assets/icon13.png';
import preview from '../../assets/preview.png';

const Tools = () => {
  const icons = [
    icon10, icon13, icon2, icon7, icon5, icon4, icon1,
    icon11, icon12, icon9, icon3, icon8, icon6
  ];

  return (
    <div className='container mx-auto px-4'>
      {/* Section Header */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 xs:gap-5 justify-center">
          <div className="w-[15%] sm:w-[20%] bg-gray-500 h-[1px]"></div>
          <h4 className="text-sm xs:text-xl sm:text-3xl font-bold">The best tool for</h4>
          <div className="w-[15%] sm:w-[20%] bg-gray-500 h-[1px]"></div>
        </div>

        {/* Icons Row */}
        <div className="flex flex-wrap gap-3 xs:gap-5 py-4">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`icon-${index}`}
              className="h-1.5 xs:h-3 sm:h-5 md:h-6 lg:h-8"
            />
          ))}
        </div>

        <p className="cursor-pointer text-[10px] sm:text-sm md:text-base text-center font-semibold">
          And Many More
        </p>
      </div>

      {/* Preview Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl">
            Anime Text in ablink Automatic and Immediate
          </h3>
          <p className="pt-4 text-[10px] sm:text-sm sm:w-[70%] text-gray-500">
            The Technology of our Ai ensures great writing without waiting, without creative block—just instant content.
          </p>
        </div>
        <img src={preview} alt="AI preview" className="md:w-1/2"/>
      </section>
    </div>
  );
};

export default Tools;
