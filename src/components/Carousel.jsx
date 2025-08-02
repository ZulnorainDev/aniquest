import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../assets/data";

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="w-full text-white pb-12 pt-8 flex flex-col items-center">
      <div className="w-full max-w-container mx-auto flex justify-center items-center">
        <div
          className={`grid gap-4 w-full ${itemsPerPage === 1
              ? "grid-cols-1"
              : itemsPerPage === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
        >
          {getVisibleTestimonials().map((t, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-2">
                {"★".repeat(t.rating)}
              </div>
              <h4 className="font-bold mb-2">{t.title}</h4>
              <p className="text-sm text-gray-600">{t.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots only on desktop */}
      <div className="gap-2 mt-6 hidden md:flex">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            className={`cursor-pointer w-5 h-5 rounded-full border-white focus:outline-none focus:border-pink-400 border-4 transition-all duration-300 ${startIndex === idx ? "bg-white" : "bg-gray-500"
              }`}
          ></button>
        ))}
      </div>

      {/* Arrows only on mobile at bottom center */}
      <div className="flex md:hidden mt-6">
        <button
          onClick={prevSlide}
          className="text-2xl cursor-pointer w-14 h-10 bg-[#EEE] text-black flex items-center justify-center rounded-l"
        >
          {'<'}
          {/* <FaArrowLeft /> */}
        </button>
        <button
          onClick={nextSlide}
          className="text-2xl cursor-pointer w-14 h-10 bg-[#FF229D] text-white flex items-center justify-center rounded-r"
        >
          {/* <FaArrowRight /> */}
          {'>'}
        </button>
      </div>
    </div>
  );
}