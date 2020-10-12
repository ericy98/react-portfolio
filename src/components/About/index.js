import React from 'react';


const About = () => {
  return (
    <section>
      <div className="who">
        <h2 className="m-5">
          Who I Am.
        </h2>
        <p className="text-break m-5">
          I went to the University of Texas at Austin and graduated in May of 2020 with a B.A. in Anthropology. I know I know, a liberal arts major, but I’ve seen the light, and now I’m addicted to coding. Covid-19 has kept my face glued to the computer. I'm always working or keeping busy and definitely laughing.
        </p>
        <p className="text-break m-5">
          When I'm not working I enjoy playing competitive F.P.S. games on my PC. Right now, I'm addicted to Valorant and main Cypher and Sova. Also, I love reading fantasy or horror books. I'm trying to tackle George R.R. Martin's series "A Song of Ice and Fire". As for the horror side of things, I'm obsessed with Stephen King's "It". Similarly, I'm a huge movie buff and adore cinematography and analyzing films.
        </p>
      </div>
      <div className="what">
        <h2 className="m-5">
          What I Do.
        </h2>
        <p className="text-break m-5">
          I lean towards the back-end of code and find comfort in manipulating data. I can work with both SQL and NoSQL databases and follow the M.V.C. paradigm to give my code structure.  However, I do love a good color palette and find myself mentally redesigning websites. My style is minimal with a touch of playfulness.
        </p>
        {/* <p className="text-break m-5">
         
        </p> */}
      </div>
    </section>
  );
}

export default About;