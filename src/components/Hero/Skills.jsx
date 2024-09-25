import React from "react";
import { assets } from "../../assets/assets";

const Skills = () => {
  return (
    <div className="gap-5 sm:grid sm:grid-cols-2 md:flex md:justify-between items-center  text-white mt-20 lg:mt-0  container mx-auto text-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-0">
          <img
            src={assets.html_logo}
            width={50}
            className="cursor-pointer hover:scale-125 duration-300 bg-transparent"
          />
          <img
            src={assets.css_logo}
            width={50}
            className="cursor-pointer hover:scale-125 duration-300"
          />
        </div>
        <p>
          +50 repository <br />
          github
        </p>
        <progress value={90} max={100} className="md:w-full"></progress>
      </div>
      <div className="flex flex-col items-center gap-2 mt-10 md:mt-0">
        <div>
          <img
            src={assets.javascript_logo}
            width={50}
            className="cursor-pointer hover:scale-125 duration-300 bg-transparent"
          />
        </div>
        <p>+50 projets <br />
        complétés</p>
        <progress value={60} max={100} className="md:w-full"></progress>
      </div>
      <div className="flex flex-col items-center gap-2 mt-10 md:mt-0">
        <div className="flex gap-2">
          <img
            src={assets.tailwind_3d}
            width={50}
            className="cursor-pointer hover:scale-125 duration-300 bg-transparent"
          />
          <img
            src={assets.bootstrap_logo}
            width={50}
            className="cursor-pointer hover:scale-125 duration-300 bg-transparent"
          />
        </div>
        <p>
          Maîtrise des 2 <br /> frameworks CSS
        </p>
        <progress value={80} max={100} className="md:w-full"></progress>
      </div>
      <div className="flex flex-col items-center gap-2 mt-10 md:mt-0">
        <div>
          <img
            src={assets.react_3d}
            width={130}
            height={0}
            className="cursor-pointer hover:scale-125 duration-300"
          />
        </div>
        <p>React.Js <br />Technologie</p>
        <progress value={40} max={100} className="md:w-full"></progress>

      </div>
    </div>
  );
};

export default Skills;
