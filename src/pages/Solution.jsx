import React, { useState } from 'react';
import logo2 from '../assets/logo_gradient.png';

// Component imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import TextInputSection from '../components/Solution/TextInputSection';
import CardDisplay from '../components/Solution/CardDisplay';
import FloatingActions from '../components/Solution/FloatingActions';

const Solution = () => {
  // State for controlling card creation and input UI
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(200);

  // Handle submission of user input to create a new card
  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      setCards([...cards, { text: inputValue, expand: false, options: {} }]);
      setInputValue('');
    }
  };

  // Toggles expansion of a card (show/hide details)
  const toggleCard = (index) => {
    setCards(cards.map((card, i) =>
      i === index ? { ...card, expand: !card.expand } : card
    ));
  };

  // Toggles an individual option within a card
  const toggleOption = (cardIndex, option) => {
    setCards(cards.map((card, i) => {
      if (i !== cardIndex) return card;
      return {
        ...card,
        options: {
          ...card.options,
          [option]: !card.options[option]
        }
      };
    }));
  };

  // Static data for the options within each card
  const optionsList = ["Question", "Bulgarian", "Chinese", "Czech"];
  const optionContentMap = {
    Question: "This is the dynamic content for the question.",
    Bulgarian: "Content related to the Bulgarian translation.",
    Chinese: "Content related to the Chinese translation.",
    Czech: "Content related to the Czech translation.",
  };

  return (
    <main>
      <div className='container mx-auto px-4'>

        {/* Navigation Bar */}
        <Navbar textColor="text-black" logo={logo2} />

        {/* Top Input Section (Dropdown, Search, Slider) */}
        <TextInputSection
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />

        {/* Cards Display Section */}
        <CardDisplay
          cards={cards}
          toggleCard={toggleCard}
          toggleOption={toggleOption}
          optionsList={optionsList}
          optionContentMap={optionContentMap}
        />

      </div>

      {/* Testimonials Carousel Section */}
      <section className="bg-[#2F1444] mb-10 mt-20">
        <div className='container mx-auto px-4 relative pb-10'>
          <h4 className="font-bold pt-16 sm:pt-32 pb-10 text-4xl text-white text-center">
            What they say about us
          </h4>
          <div className="pb:10 sm:pb-28">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer padding="sm:pt-20" />
    </main>
  );
};

export default Solution;
