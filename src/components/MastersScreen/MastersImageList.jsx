import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import {MASTERS} from "../../consts/masters";
import Typography from "@mui/material/Typography";


const MastersImageList = () => {
    return (
        <ImageList
            sx={{
                width: '100dvw',
                height: 'max-content',
                gridTemplateColumns: {xs: 'repeat(1, 1fr)!important', sm: 'repeat(3, 1fr)!important', md: 'repeat(3,' +
                        ' 1fr)!important', lg: 'repeat(3, 1fr)!important'}
        }}
        >
            {MASTERS.map((master) => (
                <ImageListItem key={master.src} sx={{
                    height: {xs: '50dvh!important', sm: '65dvh!important', md: '65dvh!important', lg: '65dvh!important'},
                    position: 'relative',
                    'img': {
                        height: '100%!important'
                    }
                }}>
                    <Typography
                        key={master.src}
                        fontSize={'35px'}
                        sx={{
                        position: 'absolute',
                        top: '50%',
                        left: {xs: '4dvw', sm: '2dvw', md: '3dvw', lg: '3dvw'},
                        transform: 'translateY(-50%)',
                        fontWeight: '700',
                    }}>
                        {master.name}
                    </Typography>
                    <img
                        src={`${master.src}?w=248&fit=crop&auto=format`}
                        srcSet={`${master.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={master.name}
                        loading="eager"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default MastersImageList;
