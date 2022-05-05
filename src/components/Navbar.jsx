import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo Image" style={{ width: "100px" }} />
        </a>
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:flex">
        <ul className="flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Portafolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Acerca de
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portafolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
      {/* Social icons */}

      {/* Desktop */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank'
              href="https://www.linkedin.com/in/ricardomazuera/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank'
              href="https://github.com/ricardomazuera"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300" target='_blank'
              href="mailto:rm@ricardomazuera.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank' href="https://drive.google.com/file/d/1F8pK0fmEayZkV0fQFseHWvCmrQE8P6IG/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex fixed bottom-0 ml-[-16px] ">
        <ul className="w-screen flex justify-center">
          <li className="w-[60px] h-[50px] hover:scale-110 duration-500 flex justify-between items-center bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300" target='_blank'
              href="https://www.linkedin.com/in/ricardomazuera/"
            >
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[60px] h-[50px] hover:scale-110 duration-500 flex justify-between items-center bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank'
              href="https://github.com/ricardomazuera"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[50px] hover:scale-110 duration-500 flex justify-between items-center bg-[#6FC2B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank'
              href="mailto:rm@ricardomazuera.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[50px] hover:scale-110 duration-500 flex justify-between items-center bg-gray-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target='_blank' href="https://drive.google.com/file/d/1F8pK0fmEayZkV0fQFseHWvCmrQE8P6IG/view?usp=sharing"

            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
