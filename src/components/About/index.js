import React from 'react';
import portrait from '../../assets/portrait.jpg';

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={portrait} style={{width: "50%"}} alt="portrait" />
    </section>
  );
}

export default About;