import React, { useState } from 'react'
import check1 from '../../assets/check1.png'


const PriceCard = () => {

    const [selectedCard, setselectedCard] = useState(null);

    // data
    const pricingPlans = [
        {
            title: 'Growth',
            price: 123,
            isBestSeller: false,
            isHighlighted: false,
            hasSlider: false,
            guarentee: "5-day 100% money back guarantee",
            features: [
                'Quia rem est sed impedit magnam',
                'Dolorem vero ratione voluptates',
                'Qui sed ab doloribus voluptatem dolore',
                'Laborum commodi molestiae id et fugiat',
                'Nam ut ipsa nesciunt culpa modi dolor',
            ],
        },
        {
            title: 'Growth',
            price: 123,
            isBestSeller: true,
            isHighlighted: false,
            hasSlider: false,
            guarentee: "5-day 100% money back guarantee",
            features: [
                'Quia rem est sed impedit magnam',
                'Dolorem vero ratione voluptates',
                'Qui sed ab doloribus voluptatem dolore',
                'Laborum commodi molestiae id et fugiat',
                'Nam ut ipsa nesciunt culpa modi dolor',
            ],
        },
        {
            title: 'Growth',
            price: 123,
            isHighlighted: false,
            isBestSeller: false,
            hasSlider: false,
            guarentee: "5-day 100% money back guarantee",
            features: [
                'Quia rem est sed impedit magnam',
                'Dolorem vero ratione voluptates',
                'Qui sed ab doloribus voluptatem dolore',
                'Laborum commodi molestiae id et fugiat',
                'Nam ut ipsa nesciunt culpa modi dolor',
            ],
        },
        {
            title: 'Growth',
            price: 123,
            isHighlighted: false,
            isBestSeller: false,
            hasSlider: true,
            guarentee: "5-day 100% money back guarantee",
            features: [
                'Quia rem est sed impedit magnam',
                'Dolorem vero ratione voluptates',
                'Qui sed ab doloribus voluptatem dolore',
                'Laborum commodi molestiae id et fugiat',
                'Nam ut ipsa nesciunt culpa modi dolor',

            ],
        },
    ];

    const handleCardSelection = (index) => {
        setselectedCard(index === selectedCard ? null : index)
    }

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative cursor-pointer rounded-xl shadow-sm flex flex-col justify-between bg-[#F9FAFB] ${selectedCard === index ? "border-2 border-[#CA3FD6] shadow-lg" : "border border-transparent"}`}
                    >
                        {plan.isBestSeller && (

                            <span className="absolute top-0 right-[10%] -translate-y-1/2 bg-purple-100 text-purple-800 text-xs font-medium px-5 py-2 rounded-sm">
                                Best Seller
                            </span>
                        )}

                        <div className="flex flex-col items-center text-center bg-white px-6 py-8 rounded-t-xl border-b-4 border-[#F7F8F9]">
                            <h3 className="text-lg font-semibold">{plan.title}</h3>
                            <div className='flex items-center gap-2'>
                                <span className='text-2xl xs:text-3xl font-bold'>$</span>
                                <p className="text-5xl xs:text-6xl font-bold mt-2">
                                    {plan.price}
                                </p>
                                <span className="text-lg xs:text-xl text-gray-600 font-normal">/month</span>
                            </div>

                        </div>

                        {plan.hasSlider && (
                            <div className="mt-4 px-6">

                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>50K</span>
                                    <span>700K</span>
                                </div>
                                <input
                                    type="range"
                                    min="50000"
                                    max="700000"
                                    defaultValue="375000"
                                    className="w-full accent-[#CA3FD6]"
                                />
                            </div>
                        )}

                        <p className='px-6 text-sm text-gray-600 py-10 lg:py-0 '>{plan.guarentee}</p>

                        <ul className="text-sm text-gray-700 space-y-3 px-6">
                            {plan.features.map((feature, i) => (

                                <div key={i} className='flex gap-2 items-start'>
                                    <img src={check1} alt="" className='h-5' />
                                    <li key={i} className='text-sm xs:text-base'> {feature}</li>
                                </div>



                            ))}
                        </ul>

                        <button
                            onClick={() => handleCardSelection(index)}
                            className="cursor-pointer m-6 bg-[#CA3FD6] hover:bg-[#d227e1] text-white font-semibold py-2 rounded-lg transition">
                            Upgrade Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PriceCard