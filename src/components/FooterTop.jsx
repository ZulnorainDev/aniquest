import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
    return (
        <div className="px-6 flex flex-col gap-3 sm:gap-8 md:gap-10 md:pl-12 py-6 sm:py-8 md:py-24 bg-footer-gradient bg-flow-gradient rounded-[10px]">
            <h3 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold sm:font-semibold text-black">
                Try it for free right now!
            </h3>
            <p className="text-[10px] xs-text-[12px] sm:text-sm lg:text-base text-gray-500 md:w-1/2 pb-4 sm:pb-0 md:pb-8">
                Test the quality of our program and let yourself be convinced by the effective of our AI, start now to generate quality content!
            </p>
            <div className="flex items-center gap-3">
                <Link to='/login' className="cursor-pointer text-center font-semibold w-1/2 sm:w-fit text-[8px] xs:text-[10px] md:text-sm lg:text-base border xs:px-4 sm:px-8 lg:px-10 py-2 sm:py-4 rounded-[10px] text-black">
                    SIGN UP WITH EMAIL
                </Link>
                <Link to='/login' className="cursor-pointer text-center font-semibold w-1/2 sm:w-fit text-[8px] xs:text-[10px] md:text-sm lg:text-base border xs:px-4 sm:px-8 lg:px-10 py-2 sm:py-4 rounded-[10px] sm:bg-[#31A6F4] text-black sm:text-white">
                    SIGN UP WITH GOOGLE
                </Link>
            </div>
        </div>
    )
}

export default FooterTop