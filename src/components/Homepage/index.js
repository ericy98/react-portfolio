import React from 'react';
import portrait from '../../assets/portrait.jpg';

function Home() {
    return (
        <div className="container-fluid m-5">
            <div className="row align-items-center">
                {/* <div className="col-lg-6 d-flex justify-content-center ">
                    <img src={portrait} alt="Eric Yarbrough leaning against a wall with an abstact painting" className="portrait" />
                </div> */}
                <div className="col-lg d-flex justify-content-center">
                    <h2 className="homeh2">Hey Y'all! I'm Eric Yarbrough and I'm a Full-Stack Web Developer from Austin, Texas. </h2>
                </div>
            </div>
        </div>
    )
}

export default Home;