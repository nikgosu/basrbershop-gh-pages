import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";

const AboutScreen = () => {
    return (
        <Paper
            sx={{
                padding: {xs: '2% 0 44%', sm: '2% 5% 44%', md: '6% 2% 27%', lg: '6% 18% 27%'}
            }}
        >
            <Box
                id={'about'}
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'},
                    padding: {xs: 4, sm: 4},
                    scrollBehavior: 'smooth'
                }}
            >
                <Container
                    sx={{
                        width: {xs: '100%', sm: '100%', md: '60%', lg: '55%'}
                    }}
                >
                    <Typography
                        mb={4}
                        sx={{
                            fontSize: {xs: 30, sm: 30, md: 50, lg: 50},
                            fontWeight: 800,
                            color: 'rgb(152, 107, 78)'
                        }}
                        className={'about'}
                    >
                        Чому саме ми
                    </Typography>
                    <Typography
                        mb={4}
                        sx={{
                            fontSize: {xs: 16, sm: 16, md: 20, lg: 20},
                            color: 'black'
                        }}
                    >
                        – Ми дотримуємось традиційних підходів у своїй роботі.
                    </Typography>
                    <Typography
                        mb={4}
                        sx={{
                            fontSize: {xs: 16, sm: 16, md: 20, lg: 20},
                            color: 'black'
                        }}
                    >
                        – Ми продумали все до деталей: запахи, світло, звуки, щоб створити відмінну атмосферу у наших залах.
                    </Typography>
                    <Typography
                        mb={2}
                        sx={{
                            fontSize: {xs: 16, sm: 16, md: 20, lg: 20},
                            color: 'black'
                        }}
                    >
                        – Ми об'єднуємо різних людей, створюємо нові проекти та віддаємо частину коштів на благодійність.
                    </Typography>
                </Container>
                <Container
                    sx={{
                        width: {xs: '100%', sm: '100%', md: '35%', lg: '35%'},
                        pt: {xs: 0, sm: 0, md: 3, lg: 3}
                    }}
                >
                    <Typography
                        mb={4}
                        sx={{
                            fontSize: {xs: 16, sm: 16, md: 18, lg: 18},
                            color: '#4d4d4d'
                        }}
                    >
                        Суть традиційних підходів – у практичності і вишуканості. Ми створюємо стрижки, які допомагають чоловікам почуватись легко/невимушено та впевнено кожного дня.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {xs: 16, sm: 16, md: 18, lg: 18},
                            color: '#4d4d4d'
                        }}
                    >
                        Кожна деталь інтер'єру в Kapper доповнює загальну атмосферу, яка сприяє народженню нових ідей та проектів. Усвідомлюємо відповідальність, тому частину коштів із кожної стрижки залишаємо на благодійність
                    </Typography>
                </Container>
            </Box>
        </Paper>
    );
};

export default AboutScreen;
