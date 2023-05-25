import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const FirstScreenBlock = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: {xs: 4, sm: 4, md: 0, lg: 0},
                maxWidth: {xs: 800, sm: 800, md: 619, lg: 800},
            }}
        >
            <Typography
                mb={2}
                sx={{
                    fontSize: {xs: 30, sm: 46, md: 46, lg: 46},
                    fontWeight: 800
                }}
            >
                Довершеність у класиці
            </Typography>
            <Typography
                mb={2}
                sx={{
                    fontSize: {xs: 16, sm: 21, md: 21, lg: 21}
                }}
            >
                Barbershop - більше, ніж барбершоп.
                Приєднуйся та відчуй атмосферу спражнього чоловічого залу
            </Typography>
            <Container
                disableGutters={true}
            >
                <Button
                    variant={'contained'}
                    size={'large'}
                    sx={{
                        fontSize: '15px',
                        color: 'black',
                        fontWeight: 600,
                        ':hover': {
                            background: 'black',
                            color: 'white'
                        },
                        padding: {xs: '10px 58px', sm: '10px 58px', md: '17px 58px', lg: '17px 58px'},
                        mb: {xs: 1, sm: 0, md: 0, lg: 0},
                        borderRadius: '22px'
                    }}
                >
                    ЗАПИСАТИСЬ
                </Button>
                <Button
                    variant={'outlined'}
                    size={'large'}
                    sx={{
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: {xs: '10px 39px', sm: '10px 39px', md: '17px 35px', lg: '17px 35px'},
                        ml: {sm: 2, md: 3, lg: 3},
                        borderRadius: '22px'
                    }}
                >
                    Відгуки про нас
                </Button>
            </Container>
        </Box>
    );
};

export default FirstScreenBlock;
