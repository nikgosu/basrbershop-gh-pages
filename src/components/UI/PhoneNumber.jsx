import React from 'react';
import Typography from "@mui/material/Typography";

const PhoneNumber = () => {
    return (
        <Typography
            sx={{
                position: 'absolute',
                display: {xs: 'none', md: 'block', lg: 'block'},
                top: '2%',
                right: '3%',
                color: 'rgba(234,234,234,0.9)',
                fontSize: 20,
            }}
        >
            <a
            href="tel:+38 067 86 42 108"
            style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}
            >
                +38 067 86 42 108
            </a>
        </Typography>
    );
};

export default PhoneNumber;
