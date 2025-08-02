import React from 'react';
import frame2 from '../../assets/Frame_2.png';
import frame3 from '../../assets/Frame_3.png';

const TeamStory = () => {
  return (
    <section className="bg-[#EFEBF8] px-6 py-12 lg:py-40 mt-16 xs:mt-24 sm:mt-32 md:mt-52 xl:mt-60 2xl:mt-80 mb-15 sm:mb-20 md:mx-5 rounded-2xl pb-[15rem] xs:pb-[20rem] sm:pb-[30rem] md:[36rem]">
      <div className="container mx-auto relative px-4">
        <article className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black lg:leading-[60px]">
            A great story starts with a great team
          </h2>
          <p className="text-[0.75rem] sm:text-lg md:text-xl text-gray-600">
            If you want to create a great story, you need to start with a great team. By putting together a group of talented and passionate people,
            you can set the foundation for an incredible journey. As with any team, there will be challenges and bumps along the way, but if
            everyone is committed to the story, the end result will be worth it. So if you want to write a masterpiece, assemble the dream team and
            let the adventure begin
          </p>
          <p className="text-[0.75rem] sm:text-[1.25rem] font-semibold text-black">
            Sarah Kraft, CEO & Co-Funder
          </p>
        </article>
        <img
          src={frame2}
          alt="Team Illustration"
          className="hidden lg:block w-[40%] max-w-sm absolute right-0 bottom-[-25%]"
        />
        <img
          src={frame3}
          alt="Illustration 1"
          className="lg:hidden w-[40%] xs:w-[35%] absolute top-[110%] xs:top-[110%] left-0"
        />
        <img
          src={frame2}
          alt="Illustration 2"
          className="lg:hidden w-[40%] xs:w-[40%] absolute top-[120%] xs:top-[150%] right-0"
        />
      </div>
    </section>
  );
};

export default TeamStory;