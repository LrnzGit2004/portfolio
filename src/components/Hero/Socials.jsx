import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="bg-transparent" />,
    path: "https://github.com/LrnzGit2004",
  },
  {
    icon: <FaLinkedinIn className="bg-transparent" />,
    path: "https://www.linkedin.com/in/eric-sobze",
  },
  {
    icon: <FaWhatsapp className="bg-transparent" />,
    path: "https://wa.me/237653832394",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.path} className={iconStyles} target="blank">
            <p className="bg-transparent">{item.icon}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
