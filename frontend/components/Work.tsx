"use client";

import { useEffect, useState } from "react";
import AppWrap from "./wrapper/AppWrap";
import { client, getUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Work.scss";

const filters = ["Backbone", "Javascript", "Next Js", ".NET", "All"];

const Work = () => {
    const [works, setWorks] = useState([]); //all works
    const [filterWorks, setFilterWorks] = useState([]); //filter works

    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const query = "*[_type=='works']";
        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWorks(data);
        });
    }, []);

    const handleFilter = (filterItem) => {
        setActiveFilter(filterItem);

        //load data filter
        if (filterItem.toLowerCase() === "all") {
            setFilterWorks(works);
        } else {
            const data = works.filter(
                (item) =>
                    item.tags && item.tags.includes(filterItem.toLowerCase())
            );
            setFilterWorks(data);
        }
    };

    return (
        <div className="mt-16">
            <h2 className="header-text">My Creative Portfolio Section</h2>

            {/* filter */}
            <div className="flex justify-start items-center gap-5 my-10">
                {filters.map((item, index) => (
                    <div
                        key={`filter-${index}`}
                        onClick={() => handleFilter(item)}
                        className={` rounded-lg p-2 text-sm text-black-color font-semibold cursor-pointer
                        hover:bg-secondary-color hover:text-white-color 
                        transition-all duration-300 ease-in
                        ${
                            activeFilter.toLowerCase() === item.toLowerCase()
                                ? "bg-secondary-color text-white-color"
                                : "bg-white text-black-color"
                        }
                        `}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* list */}
            <div className="flex gap-10">
                {filterWorks.length == 0 && (
                    <div className="text-black-color text-2xl leading-6 font-bold">
                        Không có dữ liệu
                    </div>
                )}

                {filterWorks.map((work, index) => (
                    <div
                        key={`work-${index}`}
                        className="relative flex justify-center items-center bg-white-color p-3 rounded-xl w-[270px]
                         shadow-xl hover:shadow-black-color/20
                         cursor-pointer"
                    >
                        <div className="relative w-full h-[230px]  ">
                            <Image
                                src={getUrl(work.imgUrl)}
                                alt=""
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                staggerChildren: 0.5,
                            }}
                            className="absolute inset-3 flex justify-center items-center gap-5  bg-black-color/50 rounded-xl"
                        >
                            {work.projectLink && (
                                <motion.div
                                    className="workItem"
                                    whileHover={{ opacity: [0, 1] }}
                                >
                                    <Link
                                        href={work.projectLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            )}

                            {work.codeLink && (
                                <motion.div
                                    className="workItem"
                                    whileHover={{ opacity: [0, 1] }}
                                >
                                    <Link
                                        href={work.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppWrap(Work, "work");
