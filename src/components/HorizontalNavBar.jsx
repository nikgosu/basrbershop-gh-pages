import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {useMediaQuery} from "@mui/material";
import {useEffect, useState} from "react";

function HorizontalNavBar({isMenuInViewPort}) {

    const [currentScreen, setCurrentScreen] = useState(null)
    const isInViewport = (element) => {
        if (!element) return
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    const scroll = (id) => {
        if (!id) {
            window.scrollTo({ top: 0, behavior: 'smooth'})
            return
        }
        const section = document.getElementById( `${id}`);
        let position = section.offsetTop
        if (id === 'lookbook') {
            position = position - (section.offsetHeight - 70) / 100 * 30
        }
        window.scrollTo({ top: position - 70, behavior: 'smooth'});
    };

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        setTimeout(() => {
            const about = document.querySelector('.about')
            const lookbook = document.querySelector('.lookbook')
            const services = document.querySelector('.services')
            const masters = document.querySelector('.masters')
            const contacts = document.querySelector('#contacts')
            switch (true) {
                case isInViewport(about):
                    setCurrentScreen('about')
                    return;
                case isInViewport(lookbook):
                    setCurrentScreen('lookbook')
                    return;
                case isInViewport(services):
                    setCurrentScreen('services')
                    return;
                case isInViewport(masters):
                    setCurrentScreen('masters')
                    return;
                case isInViewport(contacts):
                    setCurrentScreen('contacts')
                    return;
            }
        }, 400)
    }

    const isThousandWidth = useMediaQuery('(min-width:1000px)')

    window.addEventListener('scroll', handleScroll)

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
                default:
                    scroll()
            }
        }, 100)
    }

    return (
        <>
            {isThousandWidth &&
                <Box
                    sx={{
                        position: 'fixed',
                        transition: '0.3s',
                        height: isMenuInViewPort || !isThousandWidth ? 0 : 60,
                        width: '100dvw',
                        background: '#000',
                        zIndex: 1000,
                        top: isMenuInViewPort || !isThousandWidth ? '-60px' : 0,

                    }}
                >
                    {!isMenuInViewPort && isThousandWidth &&
                        <Box
                            sx={{
                                display: 'flex',
                                padding: '0 40px',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    onClick={() => handleNavClick('/about')}
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: currentScreen === 'about' ? '#be8b60' : 'white'
                                    }}
                                >
                                    Про нас
                                </Button>
                                <Button
                                    sx={{
                                        ml: 4,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: currentScreen === 'lookbook' ? '#be8b60' : 'white'
                                    }}
                                    onClick={() => handleNavClick('/lookbook')}
                                >
                                    Lookbook
                                </Button>
                                <Button
                                    onClick={() => handleNavClick('/services')}
                                    sx={{
                                        ml: 4,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: currentScreen === 'services' ? '#be8b60' : 'white'
                                    }}
                                >
                                    Послуги
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Button
                                    onClick={() => handleNavClick('/home')}
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    BARBERSHOP
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: currentScreen === 'masters' ? '#be8b60' : 'white'
                                    }}
                                    onClick={() => handleNavClick('/masters')}
                                >
                                    Майстри
                                </Button>
                                <Button
                                    sx={{
                                        ml: 4,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: currentScreen === 'contacts' ? '#be8b60' : 'white'
                                    }}
                                    onClick={() => handleNavClick('/contacts')}
                                >
                                    Контакты
                                </Button>
                            </Box>
                        </Box>
                    }
                </Box>
            }
        </>
    );
}
export default HorizontalNavBar;
