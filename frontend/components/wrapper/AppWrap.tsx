import React from "react";
import SocialWrap from "./SocialWrap";
import NavigationDotsWrap from "./NavigationDotsWrap";

import "./AppWrap.scss";

const AppWrap = (Component, idName, classes = "") =>
    function HOC() {
        return (
            <div id={idName} className={`min-h-screen w-full flex ${classes}`}>
                {/* social icons */}
                <SocialWrap />

                <div className="flex-1">
                    <Component />
                </div>

                {/* navigation */}
                <NavigationDotsWrap idName={idName} />
            </div>
        );
    };

export default AppWrap;
