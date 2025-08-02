import React from 'react'

const FaqGradient = () => {
    return (
        <div className="text-black bg-flow-gradient py-12 px-6 md:px-10 rounded-2xl">
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
                <div className='text-start md:text-start md:w-1/2'>

                    <h2 className='text-lg xs:text-xl md:text-2xl font-bold text-white'>In the Service of our people first initiative</h2>

                </div>

                <div>
                    <button className='bg-white text-black font-semibold py-3 px-6 rounded-md'>Sign Up Now</button>
                </div>
            </div>

        </div>
    )
}

export default FaqGradient