import React from 'react';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {keyframes} from "@emotion/react";
import {Zoom} from "@mui/material";

const BookingButton = () => {

    return (
        <Box

            sx={{
                position: 'fixed',
                zIndex: 999,
                bottom: {xs: '5%', sm: '5%', md: '11%', lg: '11%'},
                right: '3%',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Button
                variant={'contained'}
                sx={{
                    backgroundColor: 'rgba(35,35,35,0.73)',
                    textTransform: 'initial',
                    '&:hover': {
                        backgroundColor: 'rgba(91,91,91,0.73)',
                    },
                }}
            >
                Онлайн-запис
            </Button>
            <Box
                sx={{
                    marginLeft: {xs: 1, sm: 1, lg: 2},
                    padding: '8px 8px 0 8px',
                    borderRadius: '50%',
                    background: 'rgb(152, 107, 78)',
                    animation: 'pulse-orange 2s infinite',
                    boxShadow: '0 0 0 0 rgba(255, 121, 63, 1)',
                    transform: 'scale(1)'
                }}
            >
                <EventAvailableOutlinedIcon fontSize={'large'} sx={{
                    width: '2em',
                    height: '2em',
                    color: 'black',
                    fontSize: {xs: '1.675rem', sm: '1.675rem', md: '2.1875rem', lg: '2.1875rem'}
                }}/>
            </Box>
        </Box>
    );
};

export default BookingButton;
