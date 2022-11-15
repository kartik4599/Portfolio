import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 borde">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Kartik, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>I'm interested in the Front End Engineer because I like working in
              this ridesharing space and creating products to improve the lives
              of users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
