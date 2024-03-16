import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  const headers = [
    {
      title: "Home",
      url: "home",
    },
    {
      title: "About",
      url: "about",
    },
    {
      title: "Skills",
      url: "skills",
    },
    {
      title: "Projects",
      url: "work",
    },
    {
      title: "Contact",
      url: "contact",
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-1 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* desktop menu */} 
      <ul className="hidden md:flex">
        {headers.map((header) => (
          <li key={header.title}>
            <Link to={header.url} smooth={true} duration={500}>
              {header.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* //icons */}
      <div onClick={navHandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          {headers.map((header) => (
            <li className="py-6 text-4xl">
              <Link
                onClick={navHandler}
                to={header.url}
                smooth={true}
                duration={500}>
                {header.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="hidden lg:flex  fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-900">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="https://www.linkedin.com/in/kartik-mendu-6a7496245"
              target="_blank"
              rel="noreferrer">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="https://github.com/kartik4599"
              target="_blank"
              rel="noreferrer">
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer">
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="https://drive.google.com/file/d/1rIR2sIsGlg0aVhoDCtLHi39kC8n7hiws/view?usp=share_link"
              target="_blank"
              rel="noreferrer">
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
