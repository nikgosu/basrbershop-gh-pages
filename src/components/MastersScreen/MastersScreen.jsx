import React from 'react';
import Box from "@mui/material/Box";
import MastersImageList from "./MastersImageList";
import Typography from "@mui/material/Typography";

const MastersScreen = () => {
    return (
        <Box
            id={'masters'}
            sx={{
                mb: 10
            }}
        >
            <Box
                sx={{
                    margin: '0 auto',
                    width: {xs: 'auto', sm: 'auto', md: 'max-content', lg: 'max-content'},
                    mb: 8,
                    mt: {xs: 12, sm: 12, md: 16, lg: 16},
                    padding: '0 13%'
                }}
            >
                <Typography
                    sx={{
                        fontSize: {xs: '50px', sm: '80px', md: '130px', lg: '130px'},
                        lineHeight: 1.1,
                        mb: {xs: 2, sm: 2, md: 0, lg: 0}
                    }}
                    className={'masters'}
                >
                    Наші майстри
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: '16px', sm: '21px', md: '21px', lg: '21px'},
                        ml: {xs: 0, sm: 0, md: 1, lg: 1}
                    }}
                >
                    Професіонали своєї справи. У нас 70% клієнтів-постійні!
                </Typography>
            </Box>
            <MastersImageList/>
        </Box>
    );
};

export default MastersScreen;
