import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {LOOKBOOK_IMAGES} from "../../consts/lookbook-images";

const MasonryImageList = ({imgArray, onPhotoClick}) => {

    return (
        <Box sx={{ width: {xs: '100dvw', sm: '100dvw', md: '90dvw', lg: '75dvw'}, overflowY: 'none' }}>
            <ImageList
                variant="masonry"
                cols={3}
                gap={2}
                sx={{
                    columnCount: {xs: '2!important', sm: '2!important', md: '3!important', lg: '3!important'}
                }}
            >
                {imgArray.map((src) => (
                    <ImageListItem key={src}>
                        <img
                            src={`${src}?w=248&fit=crop&auto=format`}
                            srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={src}
                            loading="eager"
                            onClick={() => onPhotoClick(src)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};
export default MasonryImageList;
