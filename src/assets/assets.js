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
  react_school
};

export const LinksApp = [
  { id:1, name: "Acceuil", link: "/" },
  { id:2, name: "Services", link: "/" },
  { id:3, name: "Projets", link: "/" },
  { id:4, name: "A propos", link: "/" },
];

/* Projets */
export const Projets = [
  {
    num: "01",
    category: "projet frontend",
    title: "React-School",
    description: "Ce projet tiré d'une formation certifiante sur GreatStack.com m'a permis de faire mes débuts avec reactJs. C'est avec nostalgie qu'il fait partie des projets proposés sur mon portfolio.",
    stack: [{name:"ReactJs"}, {name: "CSS 3"}],
    image: react_school,
    source: 'https://lrnzgit2004.github.io/brise-services/'
  },
  {
    num: "02",
    category: "Portfolio",
    title: "Brise-Services",
    description: "Le client 'Brise-Service' était tout content de recevoir un email contenant l'adresse de son porfolio professionnel en ligne. Cette application lui permettra maintenant d'être plus visible sur internet. Elle est à l'image de son directeur car, c'est lui même qui a fourni la maquette.",
    stack: [{name:"ReactJs"}, {name: "Tailwind CSS"}],
    image: react_school,
    source: 'https://github.com/LrnzGit2004/react-school-version-true'
  },
  {
    num: "03",
    category: "Application Power-Apps",
    title: "Assets Management App",
    description: "La centrale à gaz de Kribi jouit aujourd'hui d'une application faite maison qui leur permet de gérer efficacement les stocks du département IT. AMA est une solution full cloud que nous leur avons proposé en combinant les différents outils de la Microsoft Poxer Plateforme et le langage Power FX",
    stack: [{name:"Power apps"}, {name: "Power automate"}, {name: "Power FX"}],
    image: asset_management_app,
    source: ''
  },
]