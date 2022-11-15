import React from "react";
import ecom from "../assets/projects/ecom.jpg";
import restaurant from "../assets/projects/restaurant.png";
import mail from "../assets/projects/mailbox.png";
import expense from "../assets/projects/expenseTracker.webp";
const Project = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300 ">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* project */}
          <div
            style={{ backgroundImage: `url(${mail})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Client Side Mail-Box
              </span>
              <div className="pt-8 text-center">
                <a href="https://my-email-box.web.app/" target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kartik4599/Mail-Box"
                  target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project */}
          <div
            style={{ backgroundImage: `url(${expense})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Expense-Tracker Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://expense-tracker-3cb01.web.app/"
                  target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kartik4599/React-Expence-tracker"
                  target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project */}
          <div
            style={{ backgroundImage: `url(${ecom})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Commerce Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://e-commerce-f0242.web.app/" target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kartik4599/E-Commerce"
                  target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project */}
          <div
            style={{ backgroundImage: `url(${restaurant})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Restaurant Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://restaurant-app-3b395.web.app/" target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kartik4599/React-Meals" target="_blank">
                  <button className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
