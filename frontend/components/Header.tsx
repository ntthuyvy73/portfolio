"use client";
import images from "@/constants/images";
import Image from "next/image";
import React from "react";

const Skills = [images.javascript, images.sass, images.react];

const Header = () => {
    return (
        <div className="h-full flex py-24 px-8">
            {/*left info */}
            <div className="flex-[0.7] flex flex-col items-end gap-10 ">
                <div className="flex justify-end items-end bg-white-color rounded-lg py-4 px-8 shadow-xl ">
                    <span className="text-4xl">👋</span>
                    <div className="flex-1 text-xl" style={{ marginLeft: 20 }}>
                        <p className="text-sm leading-6 text-gray-color text-left">
                            Hello, I am
                        </p>
                        <h1 className="text-4xl font-extrabold text-center text-black-color capitalize">
                            Micael
                        </h1>
                    </div>
                </div>

                <div className="bg-white rounded-lg py-4 px-6 shadow-xl text-right text-lg leading-6 text-gray-color uppercase ">
                    <p>Web Developer</p>
                    <p className="mt-3">Freelancer</p>
                </div>
            </div>

            {/* img */}
            <div className="flex-1 flex justify-end w-full h-full">
                <Image
                    src={images.profile}
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* right info */}
            <div className="relative flex-[0.7] flex flex-col justify-evenly items-start gap-5 [&>*:nth-child(3)]:w-24 [&>*:nth-child(3)]:h-24 [&>*:nth-child(2)]:w-28 [&>*:nth-child(2)]:h-28 [&>*:nth-child(2)]:ml-16 ">
                {Skills.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex justify-center items-center w-20 h-20 bg-white-color rounded-full shadow-md "
                    >
                        <Image
                            src={item}
                            alt=""
                            style={{ width: "60%", height: "60%" }}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
