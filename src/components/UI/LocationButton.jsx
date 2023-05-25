import React from 'react';
import Button from "@mui/material/Button";

const LocationButton = () => {
    return (
        <Button
            onClick={() => {
                window.open('https://www.google.com/maps/place/Admiral+II+Nezhinska/@46.481156,30.7110222,15z/data=!4m10!1m2!2m1!1sgoogle+maps+admiral+barbershop+odessa!3m6!1s0x40c63170520543e1:0x5aee4c7eb997eecc!8m2!3d46.481156!4d30.7300766!15sCiVnb29nbGUgbWFwcyBhZG1pcmFsIGJhcmJlcnNob3Agb2Rlc3NhIgOIAQGSAQtiYXJiZXJfc2hvcOABAA!16s%2Fg%2F11pbv4wtmm')
            }}
            sx={{
                my: 2, color: 'white',
                display: {xs: 'none', md: 'block', lg: 'block'},
                position: 'absolute',
                top: {md: '92%', lg: '87%'},
                right: '3%',
            }}
        >
            Де нас знайти?
        </Button>
    );
};

export default LocationButton;
