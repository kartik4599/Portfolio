import { HiArrowNarrowRight } from "react-icons/hi";

import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hii, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kartik Mendu
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#8892b0]  max-w-[700px] py-3">
          Hi, I'm Kartik Mendu, and I graduated from the Savitribai Phule Pune
          University in 2022 with a degree in Computer Science. My interests are
          in Front End Engineering, and I love to create beautiful and
          performant products with delightful user experiences.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500">
          View Work
            <span className="group-hover:rotate-180 duration-500">
               <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
