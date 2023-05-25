import React from 'react';
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const FirstScreenLogo = () => {

    return (
        <Typography
            variant="h5"
            noWrap
            component="a"
            color={'text.primary'}
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                position: 'absolute',
                top: '2%',
                left: '50%',
                transform: 'translate(-50%, 31%)',
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: 'none',
            }}
        >
            BARBERSHOP
        </Typography>
    );
};

export default FirstScreenLogo;
