import profil from "./profil.jpg";
import javascript_logo from "./javascript-logo.png";
import menu from "./menu.png";
import html_logo from "./logo-html.png";
import css_logo from "./logo-css.png";
import tailwind_3d from "./tailwind-3d.png";
import react_3d from "./react-3d.png";
import bootstrap_logo from "./bootstrap-logo.png";
import asset_management_app from "./asset-management-app.png";
import brise_services from "./brise-services.png";
import react_school from "./react-school.png";
import profil_portfolio from "./profil_portfolio.jpg";
import profil_true from "./profil-true.jpg";
import { FaHouseUser, FaInfoCircle } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { SiPolymerproject } from "react-icons/si";

export const assets = {
  profil,
  javascript_logo,
  menu,
  html_logo,
  css_logo,
  tailwind_3d,
  react_3d,
  bootstrap_logo,
  asset_management_app,
  brise_services,
  react_school,
  profil_portfolio,
  profil_true,
};

export const LinksApp = [
  { id: 1, name: "Acceuil", link: "hero", icon: FaHouseUser },
  { id: 2, name: "Services", link: "service", icon: FaArrowRightArrowLeft },
  { id: 3, name: "Projets", link: "project", icon: SiPolymerproject },
  { id: 4, name: "A propos", link: "about", icon: FaInfoCircle },
];

export const education = [
  {
    institut: "Online Course GreatStack",
    diplome: "Frontend skills",
    duration: "juin 2024 - octobre 2024",
    type: "Certification",
  },
  {
    institut: "WenSchool",
    diplome: "Developpeur Frontend & Point focal",
    duration: "juillet 2024 - now",
    type: "Exp. professionnelle",
  },
  {
    institut: "IUT Ngaoundéré",
    diplome: "Génie logiciel",
    duration: "2022 - now",
    type: "Diplome",
  },
  {
    institut: "KPDC",
    diplome: "Stagiaire Génie logiciel",
    duration: "mars 2024 - juin 2024",
    type: "Attestation",
  },
  {
    institut: "Online Sololearn",
    diplome: "HTML, CSS, Js",
    duration: "2022",
    type: "Certification",
  },
  {
    institut: "Lycée Bilingue de Dombè",
    diplome: "Baccalauréat Scientifique",
    duration: "2021",
    type: "Diplome",
  },
];

export const projets = [
  {
    num: "01",
    categorie: "Projet frontend",
    titre: "WenSchool landing-page",
    desc: "Landing-apge de la startup Wenschool SARL basée à Kribi au Cameroun qui propose des solutions digitales aux problèmes des établissements scolaire au Cameroun et en Afrique centrale.",
    stack: "ReactJs, Tailwind CSS",
    image: assets.profil_true,
    source: "https://lrnzgit2004.github.io/wenschool-landing-page/",
  },
  {
    num: "02",
    categorie: "Application web",
    titre: "Logo Crea",
    desc: "Application de création de logo en ligne. Elle permet à l'utilisateur de créer et de personnaliser des logos rapidement et de les télécharger en format PNG ou SVG.",
    stack: "NextJs, Tailwind CSS, DaysiUI, Lucide React",
    image: assets.profil_portfolio,
    source: "https://logo-crea.vercel.app/",
  },
  {
    num: "03",
    categorie: "Application",
    titre: "Game-checkers",
    desc: "Jeux de dame contre un bot.",
    stack: "javascript, POO",
    image: assets.profil_portfolio,
    source: "https://game-checkers-opal.vercel.app/",
  },
  {
    num:"04",
    categorie: "Power Apps",
    titre:"Assets Management App",
    desc:"Application no-code low-code de gestion des stocks du département informatique de la centrale à gaz de kribi",
    stack: "Power apps, Power automate, Power FX",
    image: assets.asset_management_app,
    source: "#"
  },
  {
    num:"05",
    categorie: "Application mobile",
    titre:"Task-Flow",
    desc:"Application de mobile de plannification de tâches",
    stack: "React Native",
    image: assets.asset_management_app,
    source: "#"
  },

];
