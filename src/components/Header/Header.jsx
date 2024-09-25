import React from "react";
import NavBar from "./NavBar";
import Button from "../Button";

const Header = () => {
  return (
    <header className="shadow-lg w-full top-0 left-0 py-8 lg:py-12 text-white">
      <div className="mx-auto container flex items-center justify-between">
        <h1 className="font-semibold text-3xl lg:text-4xl cursor-pointer">
          @LRnZ<span className="text-[#0EB39E]">'Dev.</span>
        </h1>

        {/* navbar desktop */}
        <div className="flex items-center justify-between gap-3 ">
    <NavBar className="sm:order-2" />
    <Button className="sm:order-1">Contactez-moi</Button>
</div>
      </div>
    </header>
  );
};

export default Header;
