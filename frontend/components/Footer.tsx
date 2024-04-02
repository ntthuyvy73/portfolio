"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {};

    return (
        <div className="mt-20 bg-gray-color/50 w-full flex justify-center">
            <div className="p-10">
                <h2 className="header-text">Thúy Vy</h2>
                <p className="p-text mt-5">
                    I'm a .NET and Front-end developer
                </p>
                <div className="flex justify-start items-center">
                    <p className="w-5 h-5">
                        <CiPhone />
                    </p>
                    <Link href="tel:+356203225">035.6203.225</Link>
                </div>
                <div>
                    <p>
                        <MdOutlineEmail />
                    </p>
                    <Link href="mailto:ntthuyvy73@gmail.com">
                        ntthuyvy73@gmail.com
                    </Link>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="p-5 flex flex-col gap-5 m-3 bg-gray-color"
            >
                <input
                    type="text"
                    value={name}
                    onChange={handleChangeInput}
                    placeholder="Text your name"
                    className=""
                />

                <input
                    type="email"
                    value={email}
                    onChange={handleChangeInput}
                    placeholder="Text your email"
                    className=""
                />

                <textarea
                    value={message}
                    onChange={handleChangeInput}
                    placeholder="Text your message"
                    className=""
                />

                <button type="submit" className="p-text">
                    Send Message
                    {/* {!loading ? "Send Message" : "Sending..."} */}
                </button>
            </form>
        </div>
    );
};

export default Footer;
