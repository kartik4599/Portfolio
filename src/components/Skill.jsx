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
import Postgresql from "../assets/postgresql.png";
import Redux from "../assets/Redux.png";
import NestJS from "../assets/nest.webp";
import Swagger from "../assets/swagger.png";
import Prisma from "../assets/prisma.png";
import Stripe from "../assets/stripe.png";
import Angular from "../assets/angular.png";
import Express from "../assets/express.png";
import Lite from "../assets/lite.png";
import Bit from "../assets/bit.png";
import Gitlab from "../assets/gitlab.webp";
import Jira from "../assets/jira.png";

const Skill = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 text-primary-foreground">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description:
        "Proficient in modern frontend technologies such as React, Next and Angular. Experienced in building responsive, accessible, and performant user interfaces.",
      icons: [Html, Css, ReactImg, Next, Angular, Mui, Tailwind, Redux],
    },
    {
      name: "Backend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 text-primary-foreground">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" x2="6.01" y1="6" y2="6"></line>
          <line x1="6" x2="6.01" y1="18" y2="18"></line>
        </svg>
      ),
      description:
        "Experienced in building scalable and secure backend systems using Node.js, Express, Nest and other server-side technologies. Proficient in RESTful API design and implementation.",
      icons: [Express, NestJS, Swagger, Prisma, Sequ, Stripe],
    },
    {
      name: "Database Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 h-5 text-muted-foreground">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
      ),
      description:
        "Skilled in designing and implementing efficient database solutions using both relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases.",
      icons: [Mono, Postgresql, MySql, Lite, FireBase],
    },
    {
      name: "Additional Capabilities",
      icon: (
        <svg
          data-id="45"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6">
          <circle cx="5" cy="6" r="3"></circle>
          <path d="M5 9v6"></path>
          <circle cx="5" cy="18" r="3"></circle>
          <path d="M12 3v18"></path>
          <circle cx="19" cy="6" r="3"></circle>
          <path d="M16 15.7A9 9 0 0 0 19 9"></path>
        </svg>
      ),
      description:
        "Experienced in managing codebase versions and collaboration using Git. Skilled in leveraging project management tools such as Jira to streamline workflows and enhance productivity.",
      icons: [GitHub, Bit, Gitlab, Jira],
    },
  ];

  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 md:h-full">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          {skills.map((data) => (
            <div
              key={data.name}
              class="rounded-lg border-2 p-6 space-y-4 hover:border-pink-500"
              data-v0-t="card">
              <div class="flex items-center gap-4">
                <div class="bg-pink-500 rounded-md p-3 flex items-center justify-center">
                  {data.icon}
                </div>
                <h3 class="text-xl font-semibold border-b-2 border-pink-500">{data.name}</h3>
              </div>
              <div className="text-gray-400">{data.description}</div>
              <div class="flex gap-2">
                {data.icons.map((src) => (
                  <img key={src} src={src} alt={src} className="h-6" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
