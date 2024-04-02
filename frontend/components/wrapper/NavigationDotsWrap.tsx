"use client";
import { Menu } from "@/constants";
import { LinkContext } from "@/utils";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const NavigationDotsWrap = ({ idName }) => {
   
    const {curLink,setCurLink} =useContext(LinkContext);

    const handleClick =(item)=>{

             setCurLink(item);
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            {Menu.map((item, index) => {
                if(item.url !=='contact') {

                    return (
                        <div className="mr-10  p-2 flex justify-center items-center"
                        key={`dot-${index}`}
                        >
                            <Link
                                onClick={()=>handleClick(item.url)}
                                data-tooltip-id={`tooltip-${index}`}
                                data-tooltip-place="left"
                                href={`#${item.url}`}
                                
                                className={`w-3 h-3  rounded-full ${
                                    item.url === idName
                                        ? "bg-secondary-color"
                                        : "bg-gray-300"
                                }
                            hover:bg-secondary-color
                            `}
                            />
        
                            <Tooltip id={`tooltip-${index}`}>{item.title}</Tooltip>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default NavigationDotsWrap;
