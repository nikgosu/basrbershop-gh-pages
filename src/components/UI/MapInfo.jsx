import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainSocialIcons from "./MainSocialIcons";

const MapInfo = () => {
    return (
        <Box
            sx={{
                width: '30dvw',
                height: '300px',
                position: 'absolute',
                left: '52dvw',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#000',
                borderRadius: '10px',
                padding: 5,
                zIndex: 13
            }}
        >
            <Typography
                sx={{
                    color: '#be8b60',
                    fontSize: '34px',
                    fontWeight: 600,
                    mb: 2
                }}
            >
                Barbershop
            </Typography>
            <Typography
                sx={{
                    fontSize: '21px',
                    mb: 1
                }}
            >
                м. Одеса, вул. Нежинська 73
            </Typography>
            <Typography
                sx={{
                    fontSize: '21px',
                    mb: {md: 3, lg: 5}
                }}
            >
                <a
                    href="tel:+38 067 86 42 108"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                    +38 067 86 42 108
                </a>
            </Typography>
            <MainSocialIcons sx={{
                '.MuiSvgIcon-root': {
                    padding: 0,
                    margin: 0
                },
                '.MuiButtonBase-root': {
                    padding: 0
                }
            }}/>
        </Box>
    );
};

export default MapInfo;
