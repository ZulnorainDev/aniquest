import React from 'react';
import { FaShare, FaCopy } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <div className="absolute bottom-4 lg:bottom-14 right-2 lg:right-8 flex gap-3 z-50">
      <button className="bg-white shadow p-4 rounded-full text-purple-600 cursor-pointer">
        <FaShare className='text-xl' />
      </button>

      <button className="bg-[#D238E0] text-white p-4 rounded-full cursor-pointer">
        <FaCopy className='text-xl' />
      </button>
    </div>
  );
};

export default FloatingActions;
