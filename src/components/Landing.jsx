import React from 'react';
import { Link } from 'react-router-dom';
import CarouselCities from './CarouselCities'

const Landing = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>MYtinerary</h1>
                    <img src="/MytineraryLogo.png" height="50" />
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                </div>
                <div>
                    <Link to="/cities">
                        <img src="/circled-right-2.png" width="50" />
                    </Link>
                </div>
                <div>
                    <CarouselCities />
                </div>
            </div>
        </div>
    );
}

export default Landing;
