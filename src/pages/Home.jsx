import React, {useEffect} from 'react';
import {NavBar} from "../components/NavBar";
import MainImageLayer from "../components/UI/MainImageLayer";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import AboutScreen from "../components/AboutScreen/AboutScreen";
import LookbookScreen from "../components/LookbookScreen/LookbookScreen";
import ServicesScreen from "../components/ServicesScreen/ServicesScreen";
import MastersScreen from "../components/MastersScreen/MastersScreen";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
import HorizontalNavBar from "../components/HorizontalNavBar";
import BookingButton from "../components/UI/BookingButton";

const Home = () => {

    return (
        <>
            <MainImageLayer
            >
                <NavBar/>
                <FirstScreen/>
            </MainImageLayer>
            <BookingButton/>
            <AboutScreen/>
            <LookbookScreen/>
            <ServicesScreen/>
            <MastersScreen/>
            <Map/>
            <Footer/>
        </>
    );
};

export default Home;
