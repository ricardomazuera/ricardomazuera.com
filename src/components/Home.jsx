import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen flex justify-center bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] px-4 flex flex-col justify-center h-full">
        <p className="text-[#19CFF7]">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Ricardo Mazuera
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b8]">
          Frontend Developer
        </h2>
        <p className=" py-4 max-w-[700px]">
          Desarrollador frontend, creador de páginas web y productos digitales
          enfocados en la experiencia de usuario y accesibilidad.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#19CFF7] hover:border-[#19CFF7] hover:text-gray-800">
              Ver portafolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
