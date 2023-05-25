import React from 'react';
import MainScreenButtons from "../MainScreenButtons";
import FirstScreenBlock from "./FirstScreenBlock";
import ArrowIcon from "../UI/ArrowIcon";
import FirstScreenLogo from "../UI/FirstScreenLogo";

const FirstScreen = () => {
    return (
        <>
            <FirstScreenLogo/>
            <MainScreenButtons/>
            <FirstScreenBlock/>
            <ArrowIcon/>
        </>
    );
};

export default FirstScreen;
