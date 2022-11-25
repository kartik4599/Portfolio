import React from "react";
import ecom from "../assets/projects/ecom.jpg";
import restaurant from "../assets/projects/restaurant.png";
import mail from "../assets/projects/mailbox.png";
import expense from "../assets/projects/expenseTracker.webp";
import social from "../assets/projects/social.jpg";

const Project = () => {
  const projectArr = [
    {
      src: mail,
      name: "Client Side Mail-Box",
      demo: "https://my-email-box.web.app",
      code: "https://github.com/kartik4599/Mail-Box",
    },
    {
      src: expense,
      name: "Expense-Tracker Website",
      demo: "https://expense-tracker-3cb01.web.app",
      code: "https://github.com/kartik4599/React-Expence-tracker",
    },
    {
      src: ecom,
      name: "E-Commerce Website",
      demo: "https://e-commerce-f0242.web.app/",
      code: "https://github.com/kartik4599/E-Commerce",
    },
    {
      src: restaurant,
      name: "Restaurant Website",
      demo: "https://react-http-75eb7.web.app/",
      code: "https://github.com/kartik4599/React-Meals",
    },
    {
      src: social,
      name: "Social Media Website",
      demo: "https://typo-graph.web.app/",
      code: "https://github.com/kartik4599/Material-UI",
    },
  ];

  return (
    <div name="work" className=" w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300 ">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* project */}
          {projectArr.map((e) => (
            <div
              key={e.name}
              style={{ backgroundImage: `url(${e.src})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {e.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={e.demo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={e.code} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
