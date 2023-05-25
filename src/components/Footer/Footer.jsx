import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {TextField, useMediaQuery} from "@mui/material";

const Footer = () => {

    const isThousandWidth = useMediaQuery('(min-width:1000px)')

    const handleNavClick = (path) => {
        setTimeout(() => {
            switch (path) {
                case '/about':
                    scroll('about')
                    break
                case '/lookbook':
                    scroll('lookbook')
                    break
                case '/services':
                    scroll('services')
                    break
                case '/masters':
                    scroll('masters')
                    break
                case '/contacts':
                    scroll('contacts')
                    break
            }
        }, 100)
    }

    const scroll = (id) => {
        const section = document.getElementById( `${id}`);
        let position = section.offsetTop
        if (id === 'lookbook') {
            position = position - (isThousandWidth ? section.offsetHeight - 70 : section.offsetHeight) / 100 * 30
        }
        window.scrollTo({ top: (isThousandWidth ? position - 70 : position), behavior: 'smooth'});
    };

    return (
        <Box
            sx={{
                mt: 10,
                width: '100dvw',
                display: 'flex',
            }}
        >
            <Box
                sx={{
                    width: '58%',
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row', dm: 'row', lg: 'row'},
                    pl: {xs: 2, sm: 0, md: 0, lg: 0},
                    justifyContent: 'space-between',
                    margin: '0 auto',
                    minWidth: {xs: '300px', sm: '580px', md: '580px', lg: '580px'},
                    mb: {xs: 5, sm: 8, md: 10, lg: 10},
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mb: {xs: 2, sm: 0, md: 0, lg: 0}
                    }}
                >
                    <Button
                        sx={{
                            color: '#be8b60',
                            fontSize: '19px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start'
                        }}
                        onClick={() => handleNavClick('/about')}
                    >
                        РОЗДІЛИ
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                        onClick={() => handleNavClick('/about')}
                    >
                        Про нас
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                        onClick={() => handleNavClick('/services')}
                    >
                        Наші послуги
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                        onClick={() => handleNavClick('/lookbook')}
                    >
                        Lookbook
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mb: {xs: 2, sm: 0, md: 0, lg: 0}
                    }}
                >
                    <Button
                        sx={{
                            color: '#be8b60',
                            fontSize: '19px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                        }}
                        onClick={() => handleNavClick('/masters')}
                    >
                        КОМАНДА
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                        onClick={() => handleNavClick('/masters')}
                    >
                        Наші майстри
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mb: {xs: 2, sm: 0, md: 0, lg: 0}
                    }}
                >
                    <Button
                        sx={{
                            color: '#be8b60',
                            fontSize: '19px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start'
                        }}
                        onClick={() => handleNavClick('/contacts')}
                    >
                        КОНТАКТИ
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                    >
                        <a
                            href="tel:+38 067 86 42 108"
                            style={{textDecoration: 'none', color: 'inherit'}}
                        >
                            +38 (067) 86 42 108
                        </a>
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                    >
                        <a
                            href="mailto:barbershop@gmail.com"
                            style={{textDecoration: 'none', color: 'inherit'}}
                        >
                            barbershop@gmail.com
                        </a>
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                    >
                        Запис онлайн
                    </Button>
                    <Button
                        onClick={() => {
                            window.open('https://www.google.com/maps/place/Admiral+II+Nezhinska/@46.481156,30.7110222,15z/data=!4m10!1m2!2m1!1sgoogle+maps+admiral+barbershop+odessa!3m6!1s0x40c63170520543e1:0x5aee4c7eb997eecc!8m2!3d46.481156!4d30.7300766!15sCiVnb29nbGUgbWFwcyBhZG1pcmFsIGJhcmJlcnNob3Agb2Rlc3NhIgOIAQGSAQtiYXJiZXJfc2hvcOABAA!16s%2Fg%2F11pbv4wtmm')
                        }}
                        sx={{
                            fontSize: '18px',
                            mb: {xs: 0, sm: 1, md: 1, lg: 1},
                            justifyContent: 'start',
                            textTransform: 'initial'
                        }}
                    >
                        м. Одеса, вул. Нежинська 73
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
