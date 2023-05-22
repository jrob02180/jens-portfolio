import React from "react";
import profile from "../assets/images/profile.jpg";

export default function About() {
  return (
    // <section id="aboutme">
      <div className="container">
        <div className="row" id="aboutme">
          <div className="col-6">
            <div className="" style={{fontSize: 50}}>About Me</div>
          <p className="" style={{fontSize: 30}}>
            I'm a full stack web developer with a background in medical coding,
            billing, management, and alternative medicine. I have
            a passion for learning, problem solving and helping others. I'm a
            team player and I'm excited to bring my skills to a company that
            values collaboration and innovation.
          </p>
          </div>
          <div className="col  d-flex justify-content-center" >
            <img src={profile} className="img-fluid" alt="profile" />
          </div>
        </div>
      </div>
    // </section>
  );
}
