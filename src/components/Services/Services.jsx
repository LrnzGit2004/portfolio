import React from "react";
import Cart from "./Cart";
import Title from "../Title";

const Services = () => {
  return (
    <div className="container mx-auto mt-40 text-white">
      <Title
      title = "Services"
      >
        
      </Title>
      <div className="grid gap-5 md:grid-cols-2">
      <Cart
          title="Developpement web frontend"
          description="Besoins d'un site web, statique ou dynamique, d'un site vitrine ou d'un site informatif le tout avec les dernières technos du moment ? Contactez-moi pour un travail de qualité à prix compétitifs."
        />
        <Cart
          title="Intégration web"
          description="Sur des projets logiciels sérieux, il est important de définir les bases en s'inspirant d'une maquette professionnelle. Vous aurez ainsi des designs system interactifs adaptés à vos projets."
        />
        <Cart
          title="Power-apps Application"
          description="Par ailleurs, une autre de mes casquettes comprend le developpement d'applications Power-apps. Bien evidemment cela comprend aussi l'utilisation de tous les outils de la microsoft power plateforme."
        />
        <Cart
          title="Dessins et illustrations"
          description="Je réalise aussi des portraits au stylo, crayons, ainsi que des dessins classiques de manga, personnages...Pour vos flyers, bagdes, cartes de visites contactez-moi."
        />
      
      </div>
        
    </div>
  );
};

export default Services;
