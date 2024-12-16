import { React, useState } from "react";
import Title from "../Title";
import { assets } from "../../assets/assets";
import { education } from "../../assets/assets";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  return (
    <div className="mt-32 lg:mt-0" id="about">
      <Title title="A propos" />
      <div>
        <h3 className="text-2xl font-bold text-[#0BD8B6]">Ma bio.</h3>
        <div
          className="flex flex-col items-center lg:flex-row lg:gap-20
      "
        >
          <p className="max-w-[700px] mt-5 lg:mt-0 text-base">
            <span className="text-[#0BD8B6] text-lg">
              Bienvenue sur mon portfolio !
            </span>{" "}
            Je m'appelle{" "}
            <u className="text-[#0BD8B6] font-bold text-lg">Lorenzo SOBZE</u>,
            développeur web frontend passionné par la création d'expériences
            numériques captivantes. Avec une expertise en développement
            d'applications web interactives et réactives grace au framework
            javaScript <u className="text-lg">ReactJS</u> couplé à une maitrise
            des deux principaux frameworks CSS{" "}
            <u className="text-lg">Tailwind CSS</u> et{" "}
            <u className="text-lg">BootStrap</u>.
            <br /> Par ailleurs j'ai aussi une expérience en tant que
            développeur de solutions <u className="text-lg">
              PowerApps
            </u> et <u className="text-lg">Power Automate</u>, ce qui traduit ma
            polyvalence dans le monde du développement. Sans oublier bien-sur,
            le <u className="text-lg">design UI/UX</u>.
            <i
              className={`text-[#084843] cursor-pointer  ${
                visible ? "hidden" : ""
              }`}
              onClick={() => setVisible(!visible)}
            >
              Voir plus...
            </i>
            {visible ? (
              <p>
                En visitant la section{" "}
                <span className="text-[#0BD8B6] cursor-pointer" id="service">
                  Mes services
                </span>{" "}
                , vous en saurez plus sur les les différents services de
                développement que je propose.
                <br />
                Mon objectif est de continuer à apprendre et à évoluer dans ce
                domaine en constante évolution. Je suis toujours à la recherche
                de nouveaux défis et d'opportunités pour collaborer et créer des
                solutions innovantes. <br />
                Merci de visiter mon portfolio, ou encore de{" "}
                <a href="#" className="text-[#0BD8B6]">
                  <u>télécharger mon CV</u>
                </a>{" "}
                complet à jour. N'hésitez pas à me contacter si vous avez des
                questions ou si vous souhaitez discuter d'une collaboration !
              </p>
            ) : (
              ""
            )}
          </p>

          <img
            src={assets.profil_portfolio}
            alt=""
            className="rounded-full hidden my-5 w-[300px] lg:block"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#0bd8b6] mt-5">
          Parcours éducatif et expérience
        </h3>
        <p className="max-w-[900px] my-5 lg:mt-0 text-base">
          Après avoir obtenu mon baccalauréat Scientifique, j'ai décidé de me
          plonger dans le monde fascinant de l'informatique et du développement
          web. Mon parcours a été enrichi par des projets divers, allant de la
          création de sites web pour des entreprises locales à des applications
          complexes pour des clients de plus en plus intéressants. Cette section
          présente mon parcours éducatif et mes différentes certifications.
        </p>
        <div className="grid md:grid-cols-2 md:gap-10">
          {education.map((course, index) => (
            <div
              key={index}
              className="mt-5 md:mt-0 border px-2 py-4 bg-gradient-to-r from-[#0D2D2A] to-[#111C1B] rounded-md cursor-pointer hover:scale-x-105 duration-300 cart-box"
            >
              <h4 className="bg-transparent text-xl lg:text-2xl">
                {course.institut}
              </h4>
              <p className="bg-transparent text-lg lg:text-xl">
                {course.diplome}
              </p>
              <div className="bg-transparent flex justify-between">
                <p className="bg-transparent text-base text-green-600">
                  {course.duration}
                </p>
                <p className="bg-transparent text-sm text-green-700">
                  {course.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
