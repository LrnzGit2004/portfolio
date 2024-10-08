import React from "react";
import Title from "../Title";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaGraduationCap,
  FaBootstrap ,
} from "react-icons/fa";
import { SiTailwindcss, SiPowerfx } from "react-icons/si";

//a propos de moi :
const about = {
  title: "A propos de moi",
  description:
    "Bienvenue sur mon portfolio ! Je m'appelle Lorenzo SOBZE, développeur web frontend passionné par la création d'expériences numériques captivantes. Avec une expertise en ReactJS, CSS, et Tailwind CSS, je me spécialise dans le développement d'applications web interactives et réactives. Mon objectif est de continuer à apprendre et à évoluer dans ce domaine en constante évolution. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour collaborer et créer des solutions innovantes. Merci de visiter mon portfolio. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter d'une collaboration ! ",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Lorenzo SOBZE",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+237 653 83 23 94)",
    },
    {
      fieldName: "Email",
      fieldValue: "lorenzoeric2004@gmail.com",
    },
    {
      fieldName: "Github",
      fieldValue: "https://github.com/LrnzGit2004/",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Camerounais",
    },
    {
      fieldName: "langages",
      fieldValue: "Français, Anglais",
    },
  ],
};

//Education :
const education = {
  title: "Mon parcours éducatif",
  description:
    "Après avoir obtenu mon baccalauréat Scientifique, j'ai décidé de me plonger dans le monde fascinant de l'informatique et du développement web. Mon parcours a été enrichi par des projets divers, allant de la création de sites web pour des entreprises locales à des applications complexes pour des clients de plus en plus intéressants.",
  items: [
    {
      institut: "Online Course GreatStack",
      diplome: "Frontend skills",
      duration: "juin 2024 - octobre 2024",
    },
    {
      institut: "IUT Ngaoundéré",
      diplome: "Génie logiciel",
      duration: "2022-2024",
    },
    {
      institut: "Online Sololearn",
      diplome: "HTML, CSS, Js",
      duration: "2022",
    },
    {
      institut: "Lycée Bilingue de Dombè",
      diplome: "Baccalauréat Scientifique",
      duration: "2021",
    },
  ],
};

//Skills :
const skills = {
  title: 'Mes Skills', 
  description: "Tout au long de mon parcours jusqu'ici, j'ai eu à améliorer mes compétences sur tout un tas de langages de programmation, et de frameworks",
  skillListe:[
    {
      icon : <FaHtml5/>,
      name: 'HTML 5',
    },
    {
      icon : <FaCss3/>,
      name: 'Css 3',
    },
    {
      icon : <FaJs/>,
      name: 'JavaScript',
    },
    {
      icon : <SiTailwindcss/>,
      name: 'TailwindCss',
    },
    {
      icon : <FaBootstrap/>,
      name: 'Bootstrap',
    },
    {
      icon : <FaFigma/>,
      name: 'Figma UI',
    },
    {
      icon : <FaReact/>,
      name: 'React Js',
    },
    {
      icon : <FaNodeJs/>,
      name: 'Node Js',
    },
    {
      icon : <SiPowerfx/>,
      name: 'Power FX',
    },
    
  ]
}
const About = () => {
  return (
    <div className="container mx-auto text-white" id="about">
      <Title title="A propos" />
    </div>
  );
};

export default About;
