import React from 'react';
import Box from "@mui/material/Box";

const MainImageLayer = ({children}) => {
    return (
        <Box
            className={'main-image'}
            sx={{
                position: {xs: 'relative', sm: 'relative', md: 'relative'},
                display: 'flex',
                justifyContent: {xs: 'center', sm: 'center', md: 'end', lg: 'center'},
                alignItems: 'center',
                zIndex: 999
            }}
        >
            {children}
        </Box>
    );
};

export default MainImageLayer;
