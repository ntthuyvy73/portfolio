"use client";
import images from "@/constants/images";
import { client, getUrl } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "about"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen my-10">
            <h2 className="header-text " style={{lineHeight:'3rem'}} >
                I Know That{" "}
                <span className="text-secondary-color">
                    Good Design <br />{" "}
                </span>{" "}
                Means
                <span className="text-secondary-color"> Good Business</span>
            </h2>

            <div className="flex justify-between items-center gap-10 mt-10">
                {abouts.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        key={`about-${index}`}
                        className=" w-48 flex flex-col justify-center items-center m-8  "
                    >
                        <div className="relative w-full h-48 shadow-lg ">
                            <Image
                                src={
                                    item.imgUrl
                                        ? getUrl(item.imgUrl)
                                        : images.noImage
                                }
                                alt=""
                                fill
                                className=" object-cover"
                            />
                        </div>
                        <h2 className="title-text mt-5">{item.title}</h2>
                        <p className="p-text mt-3">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap( About,""), "about","bg-white-color");
