import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MasonryImageList from "./MasonryImageList";
import {LOOKBOOK_IMAGES} from "../../consts/lookbook-images";
import MyModal from "../UI/MyModal";
import MyCarousel from "../UI/MyCarousel";
import MyImage from "../UI/MyImage";

const LookbookScreen = () => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    const handlePhotoClick = async (image) => {
        await setCurrentPhotoIndex(LOOKBOOK_IMAGES.findIndex(el => el === image))
        await handleOpen()
    }

    return (
        <Box
            id={'lookbook'}
            sx={{
                transform: {xs: 'translateY(-18%)', sm: 'translateY(-22%)', md: 'translateY(-28%)', lg: 'translateY(-28%)'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                scrollBehavior: 'smooth'
            }}
        >
            <Box
                sx={{
                    maxWidth: 580,
                    mb: 3,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    sx={{
                        fontSize: {xs: 30, sm: 30, md: 130, lg: 130},
                        fontWeight: 400,
                        color: 'rgb(0,0,0)',
                        fontStyle: 'italic',
                        lineHeight: 1,
                        mb: {xs: 2},
                        alignSelf: 'center'
                    }}
                    className={'lookbook'}
                >
                    Lookbook
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: 16, sm: 16, md: 20, lg: 20},
                        color: 'black',
                        fontStyle: 'italic'
                    }}
                >
                    Ми не просто стрижемо і голимо.
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: 16, sm: 16, md: 20, lg: 20},
                        color: 'black',
                        fontStyle: 'italic'
                    }}
                >
                    Ми робимо вас кращою версією себе
                </Typography>
            </Box>
            <MasonryImageList imgArray={LOOKBOOK_IMAGES} onPhotoClick={handlePhotoClick}/>
            <MyModal
                isOpen={isOpen}
                onClose={handleClose}
            >
                <MyCarousel
                    setCurrentPhotoIndex={setCurrentPhotoIndex}
                    currentPhotoIndex={currentPhotoIndex}
                    arr={LOOKBOOK_IMAGES}
                >
                    {LOOKBOOK_IMAGES.map((image, i) =>
                        <Box
                            key={image}
                            hidden={i !== currentPhotoIndex}
                        >
                            <MyImage
                                key={image}
                                img={image}
                                objectFit={'contain'}
                            />
                        </Box>
                    )}
                </MyCarousel>
            </MyModal>
        </Box>
    );
};

export default LookbookScreen;
