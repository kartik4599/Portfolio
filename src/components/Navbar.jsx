import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    console.log(nav);
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-1 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* //icons */}
      <div onClick={navHandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      )}

      <div className="hidden lg:flex  fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-900">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="/">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="/">
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="/">
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="/">
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
