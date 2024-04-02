import React from "react";
import SocialWrap from "./SocialWrap";
import NavigationDotsWrap from "./NavigationDotsWrap";

import "./AppWrap.scss";

const AppWrap = (Component, idName, classes = "") =>
    function HOC() {
        return (
            <div id={idName} className="flex justify-between items-center">
                {/* social icons */}
                <SocialWrap />

                <Component />

                {/* navigation */}
                <NavigationDotsWrap idName={idName} />
            </div>
        );
    };

export default AppWrap;
