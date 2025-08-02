import React from 'react'

const GradientCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[40%_5%_50%] lg:grid-cols-[35%_10%_50%] gap-4 md:gap-0 items-center px-8 py-4 sm:py-8 bg-flow-gradient rounded-[10px]">
            <h4 className="sm:text-2xl lg:text-3xl font-semibold text-white">
                With the reach of any time fan Easy to use and effective
            </h4>
            <div className="hidden md:block" />
            <p className="text-[8px] sm:text-[10px] lg:text-sm text-gray-300 md:w-full">
                Our AI will enhance the quality of your fan function or your post, it can create an interesting backstory or it can even advise you on how to continue with your text or conversation.
            </p>
        </div>
    )
}

export default GradientCard