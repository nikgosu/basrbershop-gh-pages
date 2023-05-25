import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent, CardMedia, useMediaQuery} from "@mui/material";
import {SERVICES} from "../../consts/services";

const ServicesScreen = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Box
            id={'services'}
            sx={{
                width: {xs: '100dvw', sm: '100dvw', md: '85dvw', lg: '65dvw'},
                margin: '-8% auto 0',
                background: 'url(https://phonoteka.org/uploads/posts/2022-02/1645235673_9-phonoteka-org-p-abstraktnii-fon-cherno-belii-9.jpg) bottom/cover no-repeat',
                backgroundSize: '148dvh',
                backgroundPositionY: '83%'
            }}
        >
            <Container
                disableGutters={true}
                sx={{
                    width: {xs: '90%', sm: '90%', md: '641px', lg: '641px'}
                }}
            >
                <Typography
                    mb={2}
                    sx={{
                        fontSize: {xs: 30, sm: 46, md: 46, lg: 46},
                        fontWeight: 800
                    }}
                    className={'services'}
                >
                    Наші послуги
                </Typography>
                <Typography
                    mb={10}
                    sx={{
                        fontSize: {xs: 16, sm: 21, md: 21, lg: 21}
                    }}
                >
                    Те, що ми робимо найкраще
                </Typography>
                <Box>
                    {SERVICES.map(service => (
                        <Card
                            key={service.src}
                            sx={{
                                background: '#030303',
                                border: '2px solid white',
                                mb: 2
                            }}
                        >
                            <CardActionArea
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={service.src}
                                    alt="green iguana"
                                    sx={{
                                        width: '60px',
                                        height: '60px'
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        flexDirection: {xs: 'column', sm: 'row', ms: 'row', lg: 'row'}
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            width: {xs: '100%', sm: '100%', md: '70%', lg: '70%'},
                                            pr: 0,
                                            pt: {xs: 1, sm: 1, md: 2, lg: 2},
                                            pb:  {xs: 1, sm: 1, md: 2, lg: 2},
                                        }}
                                    >
                                        <Typography
                                            mb={{
                                                xs: 0, sm: 0, md: 1, lg: 1.5
                                            }}
                                            variant="h5"
                                            component="div"
                                            fontSize={22}
                                            color={'#be8b60'}
                                        >
                                            {service.title}
                                        </Typography>
                                        {matches &&
                                            <Typography
                                                variant="body2"
                                                fontSize={18}
                                            >
                                                {service.desrciption}
                                            </Typography>
                                        }
                                    </CardContent>
                                    <CardContent
                                        sx={{
                                            pr: {xs: 2, sm: 2, md: 2, lg: 2},
                                            pt: {xs: 0, sm: 1, dm: 2, lg: 2},
                                            whiteSpace: 'nowrap',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: {xs: '100%', sm: '30%', md: '30%', lg: '30%'},
                                            flexDirection: {xs: 'row', sm: 'column', ms: 'column', lg: 'column'}
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            fontSize={22}
                                            textAlign={'end'}
                                        >
                                            {service.price}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="#666666"
                                            fontSize={18}
                                            textAlign={'end'}
                                        >
                                            {service.duration}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesScreen;
