import React, { useState } from "react";
import { Link } from "react-scroll";
import { LinksApp } from "../../assets/assets";
import { FaArrowCircleRight } from "react-icons/fa";
import { assets } from "../../assets/assets";
import Button from "../Button";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="flex gap-8">
      {/* //on map sur les liens générés dans la variable LinksApp de assets */}
      <ul className="hidden lg:flex gap-8 text-lg xl:text-xl items-center">
        {LinksApp.map((link) => (
          <li key={link.id}>
            <Link
              to={link.link}
              className="font-medium text-lg lg:text-xl hover:text-[#0EB39E] cursor-pointer duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
        console.log(Link);
        
        <Button>Contactez-moi</Button>
      </ul>

      <div className="flex items-center">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          alt=""
          className="w-10 cursor-pointer lg:hidden"
        />
      </div>

      {/* sideBar pour les petits écrans */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden shadow-sm transition-all z-10 ${
          visible ? "w-[90%]" : "w-0"
        }`}
      >
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer "
            onClick={() => setVisible(false)}
          >
            <FaArrowCircleRight className="bg-[#111C1B] w-10 h-10 rounded-full" />
          </div>
          {/* //on map sur les liens générés dans la variable LinksApp de assets */}

          {LinksApp.map((link) => (
            <li key={link.id} className="list-none py-2 ml-4 text-xl">
              <Link
                to={link.link}
                className="font-medium text-lg lg:text-xl hover:text-[#0EB39E] cursor-pointer duration-200"
                onClick={() => setVisible(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button className="sm:order-1">Contactez-moi</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
