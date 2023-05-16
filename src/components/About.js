import React from 'react';
import profile from '../assets/images/profile.jpg';

export default function About() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
    <div className="profile">
    <img  src={profile} alt='profile'/>
    </div>
    <p className="content">
      I'm a full stack web developer with a background in medical coding, billing, management and alternative medicine. I have a passion for learning, problem solving and helping others. I'm a team player and I'm excited to bring my skills to a company that values collaboration and innovation.
    </p>
  </section>
  );
}
