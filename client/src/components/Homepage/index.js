import React, { useState, useEffect } from 'react';
import desktopImg from '../../assets/homeBG.png';
import mobileImg from '../../assets/homeMobileBG.png';


function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 750 ? desktopImg : mobileImg;

    useEffect (() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    }, []);

    return (
        <div className="text-center py-2 ">
            <div>
                <img className="homeImg" src={(`${imageUrl}`)} alt="Eric. Full-Stack Web Developer. Austin, TX" />
                
            </div>

        </div>
    )
}

export default Home;