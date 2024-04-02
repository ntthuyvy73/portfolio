"use client";
import { Menu } from "@/constants";
import images from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full fixed flex justify-between items-center py-4 px-8 bg-white-color/25 backdrop-blur-sm  border border-solid border-white-color/20 z-10 ">
            {/* logo */}
            <div className="relative w-40 h-10">
                {/* <Image
                    src={images.logo}
                    alt="logo"
                    className="object-contain"
                /> */}
            </div>

            {/* links */}
            <ul className="max-md:hidden flex-1 flex justify-center items-center ">
                {Menu.map((item, index) => (
                    <li
                        key={`menu-${index}`}
                        className="group flex flex-col items-center mx-4 "
                    >
                        <div className="w-1 h-1 bg-transparent rounded-full group-hover:bg-secondary-color " />
                        <Link
                            href={item.url}
                            className="uppercase text-gray-color font-semibold group-hover:text-secondary-color transition-all duration-300 ease-in-out "
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* toggle */}
            <HiMenuAlt4
                className="hidden max-md:flex text-2xl"
                onClick={() => setToggle(true)}
            />

            {toggle && (
                <div className="absolute top-0 right-0 bottom-0 w-[85%] h-screen flex flex-col justify-center items-end bg-white-color px-16 py-4">
                    <HiX
                        className="text-2xl"
                        onClick={() => setToggle(false)}
                    />
                    <motion.div className="flex flex-col gap-5 w-full h-full ">
                        {Menu.map((item, index) => (
                            <motion.div
                                key={`link-${index}`}
                                className=" uppercase text-gray-color font-semibold hover:text-secondary-color transition-all duration-300 ease-in-out "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}
                            >
                                <Link href={item.url}> {item.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
