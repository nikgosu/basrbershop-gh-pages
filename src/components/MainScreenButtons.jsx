import React from 'react';
import PhoneNumber from "./UI/PhoneNumber";
import LocationButton from "./UI/LocationButton";
import BookingButton from "./UI/BookingButton";
import MainSocialIcons from "./UI/MainSocialIcons";
import FirstScreenBlock from "./FirstScreen/FirstScreenBlock";

const MainScreenButtons = () => {
    const socialIconsSx = {
        textAlign: 'center',
        position: 'absolute',
        bottom: {md: '2%', lg: '7%'},
        left: {md: '17%', lg: '4.5%'},
        width: 'auto',
        padding: 0,
        display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}
    }

    return (
        <>
            <PhoneNumber/>
            <LocationButton/>
            <MainSocialIcons sx={socialIconsSx}/>
        </>
    );
};

export default MainScreenButtons;
