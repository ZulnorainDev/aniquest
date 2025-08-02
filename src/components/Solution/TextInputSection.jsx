import React from 'react';

/**
 * Component for text input, subject dropdown, and range slider.
 * Handles user input and max length adjustment.
 */
const TextInputSection = ({ inputValue, setInputValue, handleSubmit, sliderValue, setSliderValue }) => {
  return (
    <section className="">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">

        {/* Left Side: Input and Dropdown */}
        <div className='flex gap-2 sm:gap-4 lg:w-[65%] lg:self-end'>
          {/* Static Dropdown - Placeholder */}
          <div className="bg-white shadow-2xl flex items-center gap-2 px-4 sm:px-6 rounded-xl text-gray-500 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl">
            All <span className='inline-block rotate-90'>{'>'}</span>
          </div>

          {/* Input Box and Submit */}
          <div className='flex w-full py-2 gap-0.5 sm:gap-2 rounded-lg bg-white shadow-2xl'>
            <input
              type="text"
              placeholder="Enter What You Need"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxLength={sliderValue}
              className="w-full px-4 md:pl-10 py-0.5 sm:py-2 rounded-md outline-none text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#D238E0] text-white rounded-sm sm:rounded-lg hover:bg-[#b228c4] transition text-[10px] xs:text-xs sm:text-sm md:text-base px-3 xs:px-6 sm:px-8 mr-2"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right Side: Slider */}
        <div className="sm:mt-6 bg-white py-2 px-4 sm:p-4 rounded-xl shadow-md w-1/2 lg:w-80 xl:w-96 ml-auto relative">
          <p className="font-bold text-black mb-2 sm:mb-4 text-[10px] xs:text-sm sm:text-lg">Max. length ({sliderValue})</p>

          {/* Slider Component */}
          <div className="relative w-full h-5 flex items-center">
            <div className="absolute left-0 right-0 h-[2px] bg-purple-500" />
            <div className="w-2 h-2 bg-purple-500 rounded-full absolute left-0" />
            <div className="w-2 h-2 bg-purple-500 rounded-full absolute right-0" />
            <input
              type="range"
              min={256}
              max={1500}
              step={1}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full appearance-none bg-transparent z-10"
            />
          </div>

          {/* Slider Labels */}
          <div className="flex justify-between text-[6px] xs:text[8px] sm:text-sm mt-2 sm:mt-4">
            <div className="text-center">
              <p className="font-bold text-black">256</p>
              <p className="text-gray-500">Standard</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-black">512</p>
              <p className="text-gray-500">Medium</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-black">1500</p>
              <p className="text-gray-500">Large</p>
            </div>
          </div>

          {/* slider styling */}
          <style>{`
        input[type='range'] {
          -webkit-appearance: none;
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          background-color: #a020f0;
          border-radius: 9999px;
          cursor: pointer;
          margin-top: -7px;
          position: relative;
          z-index: 10;
        }

        input[type='range']::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background-color: #a020f0;
          border-radius: 9999px;
          cursor: pointer;
        }

        input[type='range']::-webkit-slider-runnable-track {
          height: 2px;
          background: transparent;
        }

        input[type='range']::-moz-range-track {
          height: 2px;
          background: transparent;
        }
      `}</style>



        </div>
      </div>
    </section>
  );
};

export default TextInputSection;
