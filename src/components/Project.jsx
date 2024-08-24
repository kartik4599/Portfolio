import React from "react";
import social from "../assets/projects/social.jpg";

const Project = () => {
  const projectArr = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgGCM5B1_3lMke5O32Wmp8ysnae5s9XCWuKhbrn9mPHQceV83vXgfNkU86YdQt84pVsg",
      name: "Form Builder",
      demo: "https://form-builder-olive-two.vercel.app/",
      code: "https://github.com/kartik4599/form-builder",
    },
    {
      src: "https://cdn.dribbble.com/users/1192538/screenshots/16507884/media/27aa37c97cf336391a72dc8bf24b140e.png?compress=1&resize=1000x750&vertical=top",
      name: "FullStack Chating App",
      demo: "https://chat-box-interchange.onrender.com",
      code: "https://github.com/kartik4599/Chat-Box-Backend",
    },
    {
      src: social,
      name: "UI Sample Website",
      demo: "https://typo-graph.web.app/",
      code: "https://github.com/kartik4599/Material-UI",
    },
  ];

  return (
    <div name="work" className=" w-full h-screen text-gray-300 bg-[#0a192f]">
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
              <div className="opacity-0 group-hover:opacity-100 ">
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
