"use client";
import { client } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Exception } from "sass";
import AppWrap from "./wrapper/AppWrap";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };


    
    console.log(contact);
    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);

      //  console.log('success');
        

        alert("Thank you for sending message!");

      })
      .catch((err) => console.log("Loi "+err))
  };

  return (
    <div id="contact" className=" bg-gray-color/50 w-full flex justify-center items-center p-10 ">
      <div className="p-10">
        <h2 className="header-text">Thúy Vy</h2>
        <p className="p-text mt-5">I'm a .NET and Front-end developer</p>

        <div className="flex justify-start items-center mt-5 text-lg font-semibold text-black-color">
          <p className="w-5 h-5 flex justify-center items-center">
            <CiPhone />
          </p>
          <Link href="tel:+356203225">035.6203.225</Link>
        </div>
        <div className="flex justify-start items-center  text-lg font-semibold text-black-color">
          <p className="w-5 h-5 flex justify-center items-center">
            <MdOutlineEmail />
          </p>
          <Link href="mailto:ntthuyvy73@gmail.com">ntthuyvy73@gmail.com</Link>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          
          className="p-5 flex flex-col gap-5 m-3 bg-gray-color shadow-2xl"
          style={{ minWidth: "350px" }}
        >
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e)=>handleChangeInput(e)}
            placeholder="Text your name"
            className="outline-none border-none h-7 p-2"
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>handleChangeInput(e)}
            placeholder="Text your email"
            className="outline-none border-none h-7 p-2"
          />

          <textarea
            value={message}
            name="message"
            onChange={(e)=>handleChangeInput(e)}
            placeholder="Text your message"
            className="outline-none border-none h-7 p-2 min-h-48"
          />

          <button
            type="button"
             onClick={handleSubmit}
            className=" bg-white-color p-2 rounded-lg hover:bg-secondary-color hover:text-white-color"
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <h3 className="header-text"> Thank you for sending message!</h3>
      )}
    </div>
  );
};

export default Footer;
