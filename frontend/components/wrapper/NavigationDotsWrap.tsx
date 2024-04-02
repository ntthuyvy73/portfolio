"use client";
import { Menu } from "@/constants";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

const NavigationDotsWrap = ({ idName }) => {
    return (
        <div className="mr-10 flex flex-col gap-3">
            {Menu.map((item, index) => (
                <>
                    <Link
                        data-tooltip-id={`tooltip-${index}`}
                        data-tooltip-place="left"
                        href={item.url}
                        key={`dot-${index}`}
                        className={`w-3 h-3  rounded-full ${
                            item.url === idName
                                ? "bg-secondary-color"
                                : "bg-gray-300"
                        }
                    hover:bg-secondary-color
                    `}
                    />

                    <Tooltip id={`tooltip-${index}`}>{item.title}</Tooltip>
                </>
            ))}
        </div>
    );
};

export default NavigationDotsWrap;
