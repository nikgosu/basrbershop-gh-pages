import React from 'react';
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "@mui/material/Container";

const MainSocialIcons = ({sx}) => {
    return (
        <Container
            disableGutters={true}
            maxWidth={false}
            sx={sx}
        >
            <Button
                sx={{
                    padding: '7px 0!important'
                }}
            >
                <InstagramIcon fontSize={'large'} sx={{margin: '0 10px'}}/>
            </Button>
            <Button
                sx={{
                    padding: '7px 0!important'
                }}
            >
                <FacebookIcon fontSize={'large'} sx={{margin: '0 0 2px'}}/>
            </Button>
        </Container>
    );
};

export default MainSocialIcons;
