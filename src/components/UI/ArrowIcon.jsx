import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ArrowIcon = () => {
    const handleArrowClick = () => {
        const section = document.getElementById( `about`);
        let position = section.offsetTop
        window.scrollTo({ top: position, behavior: 'smooth'});
    }
    return (
        <ArrowForwardIosIcon
            fontSize={'large'}
            sx={{
                position: 'absolute',
                bottom: {xs: '0', sm: '0', md: '4%', lg: '4%'},
                left: '50%',
                width: '1.5em',
                height: '1.5em',
                transform: 'translateX(-50%) rotate(90deg)',
                animation: 'arrow-jumping 2s infinite',
                cursor: 'pointer'
            }}
            onClick={handleArrowClick}
        />
    );
};

export default ArrowIcon;
