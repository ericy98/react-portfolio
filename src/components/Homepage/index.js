import React from 'react';
import portrait from '../../assets/portrait.jpg';

function Home() {
    return (
        <div className="flex-row">
            <h2>Hey Y'all! I'm Eric Yarbrough and I'm a Full-Stack Web Developer from Austin, Texas. </h2>
            <img src={portrait} style={{width: "50%"}} alt="portrait" />
        </div>
    )
}

export default Home;