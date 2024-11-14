import React from "react";
import Button from "../Button";
import { FaDownload } from "react-icons/fa6";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-between flex-col mb-10 lg:flex-row pt-10 lg:pt-8 lg:pb-12"
      id="hero"
    >
      {/* bio */}

      <div className="text-center leading-10 lg:text-left">
        <p className="text-2xl md:text-4xl">Salut, je suis</p>
        <h1 className="text-4xl md:mt-2 md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#0BD8B6] to-[#01392f]">
          Lorenzo SOBZE
        </h1>
        <p className="leading-7 mt-5 mb-9 max-w-[500px]">
          Je suis un jeune{" "}
          <span className="text-[#0EB39E] border-b border-[#0EB39E]">
            développeur frontend React
          </span>{" "}
          passioné de nouvelles technologies, avec un sens aigue du design et de
          l'observation. Je serais ravi de travailler avec vous pour créer de
          nouvelles choses. Alors, contactez-moi !
        </p>

        {/* Dowload CV et icones réseaux sociaux */}
        <div className="flex flex-col items-center md:flex-row gap-8">
          <a
            className="flex bg-[#084843] text-white py-2 px-2 lg:px-6 rounded-lg hover:bg-[#1C6961] duration-200 gap-2 items-center w-auto"
            
            href="https://drive.google.com/uc?export=download&id=1f3Uf7xNWItAibNoBmQcObm4-iBwLSMLf"
            download=""
          >
            Téléchargez mon CV
            <FaDownload className="bg-transparent" />
          </a>
          <div className="socials mb-8 md:mb-0">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-[#1C6961] rounded-full flex items-center justify-center text-[#0EB39E] bg-transparent hover:bg-[#0BD8B6]  hover:transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 ">
        {/* Avatar */}
        <div className="w-full h-full box">
          {/* <img src={assets.profil} className='rounded-full object-contain' alt=""/> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
