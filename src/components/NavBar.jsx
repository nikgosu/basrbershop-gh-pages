import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {useNavigate} from "react-router-dom"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import CloseIcon from '@mui/icons-material/Close';
import {Slide, useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {useIsInViewport} from "../hooks/useIsInViewport";
import HorizontalNavBar from "./HorizontalNavBar";

const pages = [
    {name: 'Про нас', path: '/about'},
    {name: 'Lookbook', path: '/lookbook'},
    {name: 'Майстри', path: '/masters'},
    {name: 'Послуги', path: '/services'},
    {name: 'Контакти', path: '/contacts'},
];

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [touchStartPosition, setTouchStartPosition] = useState(0)
    const [prevTranslatePosition, setPrevTranslatePosition] = useState(0)
    const [swipeDirection, setSwipeDirection] = useState(0)

    const menuRef = useRef(null)
    const isMenuInViewPort = useIsInViewport(menuRef)
    const isThousandWidth = useMediaQuery('(min-width:1000px)')

    const menuPaperElement = document.querySelector('.MuiMenu-paper')

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    let prevNavSwipePositionX = 0
    let prevNavSwipePositionY = 0

    const handleOpenNavMenu = (event) => {
        const touch = event.touches && event.touches[0]
        if (prevNavSwipePositionX && event && touch.clientX < prevNavSwipePositionX - 15) {
            setAnchorElNav(event.currentTarget);
            setIsMenuOpen(true)
        }
        if (!isMenuOpen && event.type !== 'touchmove') {
            setAnchorElNav(event.currentTarget);
            setIsMenuOpen(true)
        }
        prevNavSwipePositionY = touch && touch.clientY
        prevNavSwipePositionX = touch && touch.clientX
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setIsMenuOpen(false)
    };

    const scroll = (id) => {
        const section = document.getElementById( `${id}`);
        let position = section.offsetTop
        if (id === 'lookbook') {
            position = position - (isThousandWidth ? section.offsetHeight - 70 : section.offsetHeight) / 100 * 30
        }
        window.scrollTo({ top: isThousandWidth ? position - 70 : position, behavior: 'smooth'});
    };

    const handleNavClick = (path) => {
        handleCloseNavMenu()
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

    const handleTouchStart = (event) => {
        if (isMenuOpen) {
            setTouchStartPosition(event.touches[0].clientX)
        }
    }
    const handleTouchMove = (event) => {
        const translatePosition = touchStartPosition - event.touches[0].clientX
        if (prevTranslatePosition > translatePosition) {
            setSwipeDirection(-1)
        } else if (prevTranslatePosition < translatePosition) {
            setSwipeDirection(1)
        }
        const computedTransform = touchStartPosition > translatePosition ? -translatePosition : +translatePosition
        if (touchStartPosition <= event.touches[0].clientX) {
            menuPaperElement.style.transform = `translateX(${computedTransform}px)`
        }
        setPrevTranslatePosition(translatePosition)
    }

    const handleTouchEnd = () => {
        if (swipeDirection >= 0) {
            menuPaperElement.style.transform = `translateX(0)`
        } else {
            handleCloseNavMenu()
        }
    }

    return (
        <>
            <HorizontalNavBar isMenuInViewPort={isMenuInViewPort}/>
            <Box
                onTouchMove={handleOpenNavMenu}
                sx={{
                    position: {xs: 'fixed', sm: 'fixed', md: 'absolute'},
                    top: 0,
                    right: 0,
                    width: '15%',
                    height: '100%',
                    display: {sm: 'block', md: 'none', lg: 'none'}
                }}
            >
            </Box>
            <AppBar
                color={'transparent'}
                sx={{
                    mt: 2,
                    boxShadow: 'none',
                    width: {xl: '25dvw', lg: '30dvw'},
                    left: 0,
                    position: {xs: 'fixed', sm: 'fixed', md: 'absolute'}
                }}
            >
                <Container maxWidth={false}>
                    <Toolbar
                        disableGutters
                        sx={{
                            '.MuiIconButton-sizeLarge': {
                                background: '#000'
                            }
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="a"
                            mr={2}
                            mb={20}
                            fontSize={"xxx-large"}
                            fontWeight={700}
                            color={'text.primary'}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                textAlign: 'center'
                            }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                        >
                            BARBERSHOP
                        </Typography>
                        <Box
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <IconButton
                                size="large"
                                onClick={handleOpenNavMenu}
                                color={"primary"}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                TransitionComponent={Slide}
                                TransitionProps={{ direction: 'left' }}
                                marginThreshold={0}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none'},
                                    right: 0,
                                    left: 'initial!important',
                                }}
                                PaperProps={{
                                    style: {
                                        width: '70%',
                                        maxWidth: "100%",
                                        backgroundColor: 'rgb(23,22,22)',
                                        right: 0,
                                        left: 'unset!important',
                                        height: '100dvh',
                                        maxHeight: '100dvh'
                                    }
                                }}
                            >
                                <Box
                                    onTouchStart={(event) => handleTouchStart(event)}
                                    onTouchMove={(event) => handleTouchMove(event)}
                                    onTouchEnd={handleTouchEnd}
                                    sx={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                    <Container
                                        disableGutters={true}
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'end'
                                        }}
                                    >
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                padding: '7px 7px 0 0',
                                                minWidth: '33px'
                                            }}
                                        >
                                            <CloseIcon fontSize={'large'}/>
                                        </Button>
                                    </Container>
                                    <MenuItem
                                        onClick={() => handleNavClick('/')}

                                    >
                                        <Typography
                                            fontSize={"x-large"}
                                            fontWeight={600}
                                            pt={0}
                                            mb={2}
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                                        >
                                            BARBERSHOP
                                        </Typography>
                                    </MenuItem>
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page.name}
                                            onClick={() => handleNavClick(page.path)}

                                        >
                                            <Typography
                                                fontSize={"x-large"}
                                                fontWeight={600}
                                            >
                                                {page.name}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                    <Container
                                        maxWidth={false}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start',
                                            textAlign: 'center',
                                            position: 'absolute',
                                            bottom: '10%',
                                            left: 0
                                        }}
                                    >
                                        <Typography
                                            fontSize={'small'}
                                            sx={{
                                                padding: '0 16px',
                                                textAlign: 'start',
                                                mb: 1
                                            }}
                                        >
                                            Запис онлайн
                                        </Typography>
                                        <Typography
                                            fontSize={'small'}
                                            sx={{
                                                padding: '0 16px',
                                                textAlign: 'start',
                                                mb: 2
                                            }}
                                        >
                                            <a
                                                href="tel:+38 067 86 42 108"
                                                style={{textDecoration: 'none', color: 'inherit'}}
                                            >
                                                +38 067 86 42 108
                                            </a>
                                        </Typography>
                                        <Typography
                                            fontSize={'small'}
                                            sx={{
                                                padding: '0 16px',
                                                textAlign: 'start'
                                            }}
                                        >
                                            вул. Нежинська 1Б
                                        </Typography>
                                    </Container>
                                    <Container
                                        maxWidth={false}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            textAlign: 'center',
                                            position: 'absolute',
                                            bottom: '1%',
                                            left: 0
                                        }}
                                    >
                                        <Button
                                            sx={{minWidth: 'initial'}}
                                        >
                                            <InstagramIcon fontSize={'medium'} sx={{margin: '0 10px', padding: 0}}/>
                                        </Button>
                                        <Button
                                            sx={{minWidth: 'initial'}}
                                        >
                                            <FacebookIcon fontSize={'medium'} sx={{margin: '0 0 2px', padding: 0}}/>
                                        </Button>
                                    </Container>
                                </Box>
                            </Menu>
                        </Box>
                        <Box
                            sx={{display: { xs: 'none', md: 'flex', marginLeft: '17%', marginTop: '15vh' }}}
                            ref={menuRef}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => handleNavClick(page.path)}
                                    sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight: 700, textAlign: 'left', textTransform: 'initial' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
