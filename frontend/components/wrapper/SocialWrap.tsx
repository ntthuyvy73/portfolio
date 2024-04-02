import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const SocialWrap = () => {
    return (
        <div className="ml-5 mb-5 flex flex-col justify-end items-center gap-5 text-[2rem] text-secondary-color ">
            <Link className="socialItem" href='mailto:ntthuyvy73@gmail.com'>
                <MdOutlineEmail />
            </Link>

            {/* <div className="socialItem">
                <BsFacebook />
            </div> */}


            <Link href="tel:+356203225" className="socialItem">
                <CiPhone />
            </Link>
        </div>
    );
};

export default SocialWrap;
