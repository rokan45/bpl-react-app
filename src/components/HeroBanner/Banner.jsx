import React from 'react';
import BannerImg from '../../assets/banner-img.webp'
const Banner = () => {
    return (
        <div
            className="hero min-h-[90vh]"
            style={{
                backgroundImage: `url(${BannerImg})`
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content">
                <div className="text-balance">
                    <h1 className="mb-5 text-5xl font-bold">Assemble Your Dream Team</h1>
                    <p className="mb-5 text-balance">
                        A dream cricket team blends raw talent with fearless determination. Explosive openers set the stage, elegant middle-order batters build momentum, and cunning bowlers dismantle opposition. Sharp fielders turn matches in seconds. 
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;