import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {GOOGLE_MAPS_API_KEY} from "../../consts/googleApiKey";
import { Marker } from '@react-google-maps/api';
import {useMediaQuery} from "@mui/material";
import {useIsInViewport} from "../../hooks/useIsInViewport";
import MapInfo from "../UI/MapInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const containerStyle = {
    width: '100%',
    height: '60dvh',
    position: 'relative'
};

const center = {
    lat: 46.481143158204304,
    lng: 30.73004851718649
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const isMobileWidth = useMediaQuery('(max-width:600px)');
    const isThousandLessWidth = useMediaQuery('(min-width:1000px)');

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (
        <Box
            sx={{
                '.gm-style': {
                    zIndex: '10!important'
                }
            }}
        >
            <Typography
                id={'contacts'}
                sx={{
                    margin: '0 auto',
                    mb: 10,
                    fontSize: {xs: '30px', sm: '45px', md: '45px', lg: '45px'},
                    fontWeight: 600,
                    width: 'max-content'
                }}
            >
                Де ми знаходимось?
            </Typography>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={19}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{mapId: 'cc25687668959379'}}
            >
                <Marker position={center}/>
                {isThousandLessWidth && isLoaded &&
                    <MapInfo/>
                }
                <></>
            </GoogleMap>
        </Box>
    ) : <></>
};

export default Map;
