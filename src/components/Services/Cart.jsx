import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Cart.css";

const Cart = ({ title, description }) => {
  return (
    <div className="cart-container border-2 border-[#1C6961] h-[100%] lg:p-[30px] p-4 my-5 rounded-lg">
      <h1 className="lg:text-4xl text-2xl bg-transparent">{title}</h1>
      <p className="py-5 bg-transparent">
        {description}
        <span className="text-[#0EB39E] bg-transparent">Lire plus...</span>
      </p>
      <Button>
        <Link to="contact" smooth={true} duration={500} className="bg-transparent flex items-center gap-1">
          Louer ce service <FaArrowRight className="bg-transparent" />
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
