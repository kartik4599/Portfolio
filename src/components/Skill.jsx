import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Mui from "../assets/Mui.png";
import Next from "../assets/next.png";
import Mono from "../assets/mongo.png";
import Type from "../assets/type.png";
import MySql from "../assets/mysql2.png";
import Sequ from "../assets/sequ.png";
import Chakra from "../assets/chakra.png";
import Postgresql from "../assets/postgresql.png";
import Redux from "../assets/Redux.png";
import NestJS from "../assets/nest.webp";
import Swagger from "../assets/swagger.png";
import Prisma from "../assets/prisma.png";
import Stripe from "../assets/stripe.png";

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
    {
      src: Redux,
      name: "Redux",
    },
    {
      src: Next,
      name: "Next JS",
    },
    {
      src: Type,
      name: "TypeScript",
    },
    {
      src: Mono,
      name: "Mongo DB ",
    },
    {
      src: MySql,
      name: "My SQL",
    },
    {
      src: Stripe,
      name: "Stripe",
    },
    {
      src: Postgresql,
      name: "Postgresql",
    },
    {
      src: Sequ,
      name: "Sequilize",
    },
    {
      src: Chakra,
      name: "Chakra UI",
    },
    {
      src: NestJS,
      name: "Nest JS",
    },
    {
      src: Swagger,
      name: "Swagger",
    },
    {
      src: Prisma,
      name: "Prisma",
    },
  ];

  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-5 text-center py-10">
          {skillArr.map((ele) => (
            <div
              key={ele.name}
              className="shadow-md shadow-[#040c16] flex flex-col justify-between">
              <img
                alt="work"
                className="w-14 mx-auto hover:scale-125 duration-500"
                src={ele.src}
              />
              <p className="my-4">{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
