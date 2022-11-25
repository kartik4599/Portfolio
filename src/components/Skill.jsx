import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Mui from "../assets/Mui.png";

const Skill = () => {
  const skillArr = [
    {
      src: Html,
      name: "HTML",
    },
    {
      src: Css,
      name: "CSS",
    },
    {
      src: JavaScript,
      name: "JavaScript",
    },
    {
      src: ReactImg,
      name: "React",
    },
    {
      src: FireBase,
      name: "FireBase",
    },
    {
      src: GitHub,
      name: "GitHub",
    },
    {
      src: Tailwind,
      name: "Tailwind",
    },
    {
      src: Mui,
      name: "Material UI",
    },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillArr.map((ele) => (
            <div
              key={ele.name}
              className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
              <img alt="work" className="w-20 mx-auto" src={ele.src} />
              <p className="my-4">{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
