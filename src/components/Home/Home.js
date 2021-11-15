import React from 'react';
import Banner from '../Banner/Banner';
import Latestnews from '../LatestNews/Latestnews';
import Review from '../Review/Review';
import HomeService from '../Services/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Review></Review>
            <Latestnews></Latestnews>
        </div>
    );
};

export default Home;