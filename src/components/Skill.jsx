import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";

const Skill = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
          <p className="py-4">There are the Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10">
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={Html}/>
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={Css}/>
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={JavaScript}/>
                <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={ReactImg}/>
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={FireBase}/>
                <p className="my-4">firebase</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img  alt="work"className="w-20 mx-auto" src={GitHub}/>
                <p className="my-4">Github</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img alt="work" className="w-20 mx-auto" src={Tailwind}/>
                <p className="my-4">Tailwind</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;