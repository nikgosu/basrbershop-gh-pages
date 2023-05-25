import React, {useEffect} from 'react'
import Carousel from "react-material-ui-carousel"
import Box from "@mui/material/Box"

const MyCarousel = ({currentPhotoIndex, children, setCurrentPhotoIndex, arr}) => {

	const handleNext = () => {
		currentPhotoIndex !== undefined && arr.length - 1 === currentPhotoIndex ? setCurrentPhotoIndex(0) : setCurrentPhotoIndex(currentPhotoIndex + 1)
	}

	const handlePrev = () => {
		currentPhotoIndex !== undefined && currentPhotoIndex === 0 ? setCurrentPhotoIndex(arr.length - 1) : setCurrentPhotoIndex(currentPhotoIndex - 1)
	}

	const handleKeyPress = (event) => {
		if (event.key === 'ArrowRight') handleNext()
		if (event.key === 'ArrowLeft') handlePrev()
	}

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);

		return function cleanup() {
			document.removeEventListener("keydown", handleKeyPress);
		};
	});

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				backgroundColor: 'rgba(2,9,9,0.79)'
			}}
			onFocus={handleKeyPress}
		>
			<Carousel
				autoPlay={false}
				index={currentPhotoIndex}
				sx={{
					width: {xs: '100%', md: '60%'},
					height: {xs: '70%', md: '90%'},
					position: 'fixed'
				}}
				navButtonsAlwaysVisible={true}
				navButtonsProps={{
					style: {
						backgroundColor: 'rgb(3,17,16)',
					}
				}}
				next={handleNext}
				prev={handlePrev}
				cycleNavigation={true}
			>
				{children}
			</Carousel>
		</Box>
	)
}

export default MyCarousel