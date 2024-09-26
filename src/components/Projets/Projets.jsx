import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Assurez-vous d'importer les styles Swiper
import Title from "../Title";
import SliderButons from "./SliderButons";

const ProjetsPortfolio = [
  {
    num: "01",
    category: "Projet frontend",
    title: "React-School",
    description:
      "Ce projet tiré d'une formation certifiante sur GreatStack.com m'a permis de faire mes débuts avec reactJs. C'est avec nostalgie qu'il fait partie des projets proposés sur mon portfolio.",
    stack: [{ name: "ReactJs" }, { name: "CSS 3" }],
    image: assets.react_school,
    source: "https://lrnzgit2004.github.io/brise-services/",
  },
  {
    num: "02",
    category: "Portfolio",
    title: "Brise-Services",
    description:
      "Le client 'Brise-Service' était tout content de recevoir un email contenant l'adresse de son portfolio professionnel en ligne. Cette application lui permettra maintenant d'être plus visible sur internet. Elle est à l'image de son directeur car, c'est lui même qui a fourni la maquette.",
    stack: [{ name: "ReactJs" }, { name: "Tailwind CSS" }],
    image: assets.brise_services,
    source: "https://github.com/LrnzGit2004/react-school-version-true",
  },
  {
    num: "03",
    category: "Application Power-Apps",
    title: "Assets Management App",
    description:
      "La centrale à gaz de Kribi jouit aujourd'hui d'une application faite maison qui leur permet de gérer efficacement les stocks du département IT. 'AMA' est une solution full cloud que nous leur avons proposé en combinant les différents outils de la Microsoft Power Platform et le langage Power FX.",
    stack: [
      { name: "Power apps" },
      { name: "Power automate" },
      { name: "Power FX" },
    ],
    image: assets.asset_management_app,
    source: "",
  },
];

const Projets = () => {
  const [project, setProject] = useState(ProjetsPortfolio[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(ProjetsPortfolio[currentIndex]);
  };

  return (
    <div
      className="mt-40 min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
      id="project"
    >
      <Title title="Projets"></Title>
      <div className="flex flex-col mt-14 md:flex-row md:gap-[30px]">
        <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
          <div className="flex flex-col gap-[10px]">
            <div className="text-8xl">{project.num}</div>
            <h2 className="text-[42px] font-bold">{project.category}</h2>
            <p>{project.description}</p>
            <ul className="flex gap-3 text-[#0EB39E] border-b-2 pb-2">
              {project.stack.map((item, index) => (
                <li className="underline cursor-pointer" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="w-[157px]">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-5 gap-2 hover:text-[#0EB39E]"
              >
                En savoir plus...
                <FaGithub className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-[#0EB39E]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1} // Assurez-vous que cela est défini pour 1
            className="md:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {ProjetsPortfolio.map((project, index) => (
              <SwiperSlide key={index}>
                {/* <div className="absolute  w-full h-full bg-black/10 z-10"></div> */}
                <img
                  src={project.image}
                  width={500}
                  alt={project.title}
                  className="aspect-[4/3]"
                />
              </SwiperSlide>
            ))}
            {/* Buttons */}
            <SliderButons
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] md:bottom-[80px] md:right-[140px] z-20 w-full justify-between md:w-max md:justify-none bg-transparent opacity-50 hover:opacity-100"
              btnStyles="bg-[#207E73] hover:bg-[#1C6961] text-[22px] w-[44px] h-[50px] flex justify-center items-center transition-all"
              iconStyles="bg-[#207E73] hover:bg-[#1C6961] transition-all"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projets;
