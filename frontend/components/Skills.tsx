"use client";
import { client } from "@/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppWrap from "./wrapper/AppWrap";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const expQuery = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });

        client.fetch(expQuery).then((data) => {
            data.reverse(function (a, b) {
                return a.year - b.year;
            });

            setExperiences(data);
        });
    }, []);

    return (
        <div className="mt-20">
            <h2 className="header-text">Skills & Experiences</h2>

            <div className=" flex flex-col justify-center items-center gap-10 mt-10">
                {experiences.map((expItem, index) => (
                    <motion.div
                        whileHover={{ opacity: [0.5, 1] }}
                        transition={{
                            duration: 0.3,
                            staggerChildren: 0.5,
                            ease: "easeInOut",
                        }}
                        key={`exp-${index}`}
                        className="flex-1 flex justify-center items-center gap-10 hover:bg-gray-color/10 hover:shadow-xl p-5 rounded-xl cursor-pointer "
                    >
                        <div
                            className="flex flex-col justify-center items-center text-center p-3 bg-white-color text-secondary-color text-xl font-extrabold
                            rounded-full w-24 h-24 hover:bg-secondary-color hover:text-white-color cursor-pointer transition-all duration-300 ease-in"
                        >
                            {expItem.year}
                            <span className="text-sm">|</span> {currentYear}
                        </div>
                        <div className=" flex-1 flex flex-col justify-center items-start">
                            {expItem.workPlaces?.map((item, index) => (
                                <div
                                    key={`workplace-${index}`}
                                    className="font-extrabold text-black-color text-2xl"
                                >
                                    {item.company}
                                </div>
                            ))}

                            <div className="w-[500px] grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-3 ">
                                {expItem.skills?.map((item, index) => (
                                    <motion.div
                                        whileInView={{ opacity: 1 }}
                                        whileHover={{
                                            opacity: [0.5, 1],
                                            scale: [1.1, 1],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        key={`skill-${item.name}-${index}`}
                                        className="flex justify-center items-center bg-white-color p-2 rounded-xl text-black-color shadow-xl break-words
                                        cursor-pointer"
                                    >
                                        {item.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AppWrap(Skills, "skills");
