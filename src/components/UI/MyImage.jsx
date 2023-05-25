import React from 'react'
import {CardMedia} from "@mui/material"

const MyImage = ({img, objectFit = 'cover'}) => {
	return (
		<CardMedia
			component={'img'}
			image={img}
			sx={{
				objectFit: objectFit,
				height: '100%',
				width: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				borderRadius: '16px'
			}}
		/>
	)
}

export default MyImage
