import React, { useState } from "react";
import Title from "../Title";
import { FaEnvelope, FaPhone, FaMapPin, FaLocationArrow } from "react-icons/fa";
import Button from "../Button";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cf00e74-1f31-4268-a190-10c80ab2b8f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success sending");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-32" id="contact">
      <Title title="Contacts" />

      <div className="space-y-20 lg:space-x-10 lg:flex max-w-[98%]">
        <div className="pt-5 basis-[48%]">
          <h2 className="text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#0BD8B6] to-[#01392f] mb-5">
            Lançons nous !
          </h2>
          <p className="mb-2">
            Besoins de louer mes services, n'attendez plus je suis joignable aux
            numéros et adresses suivants :
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>lorenzoeric2004@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <p>+237 653 83 23 94 / +237 620 08 24 99</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMapPin />
              <p>Ngaoundéré, Cmr</p>
            </div>
          </div>
        </div>
        <div className=" basis-[48%]">
          <form onSubmit={onSubmit}>
            <label>Votre nom*</label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              required
              className="block w-full bg-green-200/20 p-4 boder boder-0 outline-0 mb-4 mt-1 rounded-lg text-xl"
            />
            <label>Votre numéro de téléphone*</label>
            <input
              type="number"
              name="phone"
              placeholder="Entrez votre numéro de téléphone"
              required
              className="block w-full bg-green-200/20 p-4 boder boder-0 outline-0 mb-4 mt-1 rounded-lg text-xl"
            />
            <label>Votre adresse mail*</label>
            <input
              type="mail"
              name="mail"
              placeholder="Entrez votre adresse mail"
              required
              className="block w-full bg-green-200/20 p-4 boder boder-0 outline-0 mb-4 mt-1 rounded-lg text-xl"
            />
            <label>Votre message ici*</label>
            <textarea
              type="text"
              name="message"
              rows="4"
              placeholder="Ecrivez votre message ici"
              required
              className="block w-full bg-green-200/20 p-4 boder boder-0 outline-0 mb-4 mt-1 rounded-lg text-xl resize-none"
            ></textarea>
            <Button className="flex">
              Envoyer
              <FaLocationArrow className="bg-transparent" />
            </Button>
          </form>
          <span className="block my-5 mx-0">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
