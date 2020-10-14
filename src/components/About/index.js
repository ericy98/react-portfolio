import React from 'react';
import portrait2 from '../../assets/portrait2.jpeg';
import portrait from '../../assets/portrait.jpg';


const About = () => {
  return (
    <div className="container-fluid m-5">
      <div className="row align-items-center py-5">
        <div className="col-lg-5 d-flex justify-content-center" >
          <img src={portrait2} alt="Eric Yarbrough smiling" className="portrait"></img>
        </div>
        <div className="col-lg-7 d-flex justify-content-center text-center">
          <div className="who">
            <h2 className="m-3">
              Who I Am.
          </h2>
            <p className="text-break m-3">
              I went to the University of Texas at Austin and graduated in May of 2020 with a B.A. in Anthropology. I know I know, a liberal arts major, but I’ve seen the light, and now I’m addicted to coding. Covid-19 has kept my face glued to the computer. I'm always working or keeping busy and definitely laughing. When I'm not working I enjoy playing competitive F.P.S. games on my PC. Right now, I'm addicted to Valorant and main Cypher and Sova. Also, I love reading fantasy or horror books. I'm trying to tackle George R.R. Martin's series "A Song of Ice and Fire". As for the horror side of things, I'm obsessed with Stephen King's "It". Similarly, I'm a huge movie buff and adore cinematography and analyzing films.
          </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-lg-7 d-flex justify-content-center text-center">
          <div className="what">
            <h2 className="m-3">
              What I Do.
          </h2>
            <p className="text-break m-3">
              I lean towards the back-end of code and find comfort in manipulating data. I can work with both SQL and NoSQL databases and follow the M.V.C. paradigm to give my code structure.  However, I do love a good color palette and find myself mentally redesigning websites. My style is minimal with a touch of playfulness.
          </p>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center ">
          <img src={portrait} alt="Eric Yarbrough leaning against a wall with an abstact painting" className="portrait" />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default About;