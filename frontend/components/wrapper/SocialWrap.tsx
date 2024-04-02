import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";

const SocialWrap = () => {
    return (
        <div className="ml-5 flex flex-col justify-start items-start gap-5 text-[2rem] text-secondary-color ">
            <div className="socialItem">
                <BsTwitter />
            </div>

            <div className="socialItem">
                <BsFacebook />
            </div>

            <div className="socialItem">
                <CiPhone />
            </div>
        </div>
    );
};

export default SocialWrap;
