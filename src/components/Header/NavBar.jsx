import React, { useState } from "react";
import { Link } from "react-scroll";
import { LinksApp } from "../../assets/assets";
import { FaArrowCircleRight } from "react-icons/fa";
import { assets } from "../../assets/assets";
import Button from "../Button";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="flex">
      {/* on map sur les liens générés dans la variable LinksApp de assets */}
      <ul className="hidden lg:flex gap-8 text-lg xl:text-xl items-center">
        {LinksApp.map((link) => (
          <li key={link.id}>
            <Link
              to={link.link}
              smooth={true}
              duration={500}
              className="font-medium text-lg hover:text-[#0EB39E] cursor-pointer duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <Button>
          {" "}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-transparent"
          >
            Contactez-moi
          </Link>
        </Button>
      </ul>

      <div className="flex items-center">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          alt=""
          className="w-10 cursor-pointer rotate-[180deg] lg:hidden "
        />
      </div>

      {/* sideBar pour les petits écrans */}
      <div
        className={`absolute top-5 right-0 h-screen overflow-hidden shadow-sm transition-all z-10 ${
          visible ? "w-[90%]" : "w-0"
        }`}
      >
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer "
            onClick={() => setVisible(false)}
          >
            <FaArrowCircleRight className="bg-[#111C1B] w-8 h-8 rounded-full" />
          </div>
          {/* //on map sur les liens générés dans la variable LinksApp de assets */}

          {LinksApp.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              smooth={true}
              duration={500}
              className="font-medium text-lg list-none p-2  w-full hover:bg-[#1C6961] cursor-pointer duration-200 bg-transparent border-b-2 ml-4 flex items-center gap-3"
              onClick={() => setVisible(false)}
            >
              {link.icon && <link.icon className="ml-2 bg-transparent" />}
              {link.name}
            </Link>
          ))}
          <Button className={`!w-[30%] mt-4 text-center`}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-transparent"
            >
              Contactez-moi
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
