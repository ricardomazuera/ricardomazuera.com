import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="mx-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#19CFF7]">
              Acerca de
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hola. Soy Ricardo, mucho gusto. Conóceme un poco.</p>
          </div>
          <div>
            <p>
              Me apasiona construir software de calidad que mejore la vida de las personas. Me enfoco en entender al usuario para llevarle así la mejor solución a sus requerimientos. ¿En qué piensas que puedo ayudarte?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
