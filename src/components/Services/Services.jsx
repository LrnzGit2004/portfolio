import React, { useState } from "react";
import Cart from "./Cart";
import Title from "../Title";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Developpement web frontend",
      description:
        "Besoins d'un site web, statique ou dynamique, d'un site vitrine ou d'un site informatif le tout avec les dernières technos' du moment ? Contactez-moi pour un travail de qualité à prix compétitifs.",
    },
    {
      title: "Intégration web",
      description:
        "Sur des projets logiciels sérieux, il est important de définir les bases en s'inspirant d'une maquette professionnelle. Vous aurez ainsi des designs system interactifs adaptés à vos projets.",
    },
    {
      title: "Design UI/UX",
      description:
        "Je conçois des interfaces utilisateur intuitives et esthétiques, en mettant l'accent sur l'expérience utilisateur pour garantir une interaction fluide et agréable avec vos applications.",
    },
    {
      title: "Developpement mobile (React Native)",
      description:
        "Vous avez besoin d'une application mobile pour votre entreprise ou pour un projet personnel ? Je suis là pour vous aider à réaliser votre projet en React Native.",
    },
    {
      title: "Power-apps Application",
      description:
        "Par ailleurs, une autre de mes casquettes comprend le developpement d'applications Power-apps. Bien evidemment cela inclut aussi l'utilisation de tous les outils de la microsoft power plateforme.",
    },
    {
      title: "Dessins et illustrations",
      description:
        "Je réalise aussi des portraits au stylo, crayons, ainsi que des dessins classiques de manga, personnages...Pour vos flyers, bagdes, cartes de visites contactez-moi.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <div className="mt-40" id="service">
      <Title title="Services" />
      <div className="grid gap-5 md:grid-cols-2">
        {visibleServices.map((service, index) => (
          <Cart
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(true)}
          className="bg-[#084843] text-white py-2 px-2 lg:px-6 rounded-lg hover:bg-[#1C6961] duration-200 gap-2 items-center w-auto"
        >
          Voir plus de services
        </button>
      </div>
      )}
    </div>
  );
};

export default Services;
