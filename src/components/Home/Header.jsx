import React from 'react';
import Navbar from '../Navbar';
import { FaCircleCheck } from 'react-icons/fa6';

import logo1 from '../../assets/logo_white.png'
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const navigate = useNavigate();
    return (

        <header
            className="bg-no-repeat bg-cover bg-bottom text-white"
            style={{ backgroundImage: 'url(/header_img.png)' }}
        >
            <div className="container mx-auto px-4 pb-20">
                <Navbar textColor="text-white" logo={logo1} />
                 {/* <Navbar2 textColor="text-white" logo={logo1} /> */}
                <div className='flex flex-col md:flex-row items-start gap-10'>
                    {/* Left Section - Heading and Buttons */}
                    <div className="flex-1 text-start lg:text-left">
                        <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
                            Fast and Automatic Anime and Fantasy Writing
                        </h1>
                        <p className="mt-4 text-sm xs:text-base md:text-lg text-purple-200">
                            Texts written by artificial intelligence<br />
                            Immediate, easy and with amazing results
                        </p>

                        <div className="mt-6 flex gap-2 md:gap-4 md:flex-start sm:w-3/4 md:w-full">
                            <button onClick={() => { navigate('/login') }} className="w-1/2 md:w-fit text-[10px] xs:text-[12px] lg:text-base bg-[#CA3FD6] text-white font-medium xs:px-4 md:px-10 py-2 xs:py-4 rounded-lg shadow-md cursor-pointer">
                                FREE TRIAL
                            </button>
                            <button onClick={() => { navigate('/login') }} className="w-1/2 md:w-fit text-[10px] xs:text-[12px] lg:text-base bg-[#31A6F4] text-white font-medium xs:px-4 md:px-10 py-2 xs:py-4 rounded-lg shadow-md cursor-pointer">
                                SIGN UP WITH GOOGLE
                            </button>
                        </div>
                    </div>



                    {/* Feature Cards */}
                    <div className="flex flex-col gap-4 w-full md:max-w-[15rem] lg:max-w-sm">
                        <div className="bg_card_gradient flex items-center gap-2 p-4 rounded-lg shadow text-white font-semibold">
                            <FaCircleCheck className='text-[#29c8ef] bg-white rounded-full' />
                            <p className='text-white font-semibold'>Develop Publications</p>
                        </div>
                        <div className="bg_card_gradient flex items-center gap-2 p-4 rounded-lg shadow text-white font-semibold">
                            <FaCircleCheck className='text-[#29c8ef] bg-white rounded-full' />
                            <p className='text-white font-semibold'>Perfect for Fan fiction</p>
                        </div>
                        <div className="bg_card_gradient flex items-center gap-2 p-4 rounded-lg shadow text-white font-semibold">
                            <FaCircleCheck className='text-[#29c8ef] bg-white rounded-full' />
                            <p className='text-white font-semibold'>Review and Fix Text</p>
                        </div>
                    </div>
                </div>


            </div>
        </header>

    );
};

export default Header;
