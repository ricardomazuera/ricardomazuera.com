import React from "react";
import cns from "../assets/cns-web.png";
import ricardoMazuera from "../assets/ricardo_mazuera_web.png";
import appMarvel from "../assets/app-marvel.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-[90px]">
        <div className="pb-">
          <p className="text-4xl font-bold inline border-b-4 border-[#19CFF7]">
            Portafolio
          </p>
          <p className="py-4">Revisa algunos de mis trabajos recientes.</p>
        </div>

        {/* card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
          {/* card */}

          <div
            style={{ backgroundImage: `url(${ricardoMazuera})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
              <Link to="home" smooth={true} duration={500}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
              </Link>
                <a
                  target="_blank"
                  href="https://github.com/ricardomazuera/ricardomazuera.com"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${appMarvel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://marvel-api-mu.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ricardomazuera/Marvel-APP"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cns})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WordPress Application
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://globalcns.org">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
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

export default Work;
