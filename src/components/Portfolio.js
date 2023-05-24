import React from "react";
import eatSpeakLove from "../assets/images/eat-speak-love-screenshot.png";
import birders from "../assets/images/birders-screenshot.png";
import notes from "../assets/images/note-screenshot.png";
import scheduler from "../assets/images/workday-scheduler-screenshot.png";
import weather from "../assets/images/weather-dashboard-screenshot.png";
import password from "../assets/images/password.png";
import github from "../assets/images/github-mark.png";

export default function Project() {
  return (
    <div>
      <div className="text-center" style={{ fontSize: 50 }}>
        Projects
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center project">
            <div className="image">
              <img
                src={eatSpeakLove}
                alt="Eat Speak Love"
                className="img-fluid"
              />
              <span className="text-overlay">
                <a href="http://immense-everglades-77302.herokuapp.com/">
                  Eat Speak Love
                </a>
                <a href="https://github.com/nlewis742/eat-speak-love">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="image">
              <img src={birders} alt="Birders" className="img-fluid" />
              <div className="text-overlay">
                <a href="https://birders-anonymous.herokuapp.com/">
                  Birders Anonymous
                </a>
                <a href="https://github.com/nlewis742/birders-anonymous">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="image">
              <img src={notes} alt="My Notes App" className="img-fluid" />
              <div className="text-overlay">
                <a href="https://hidden-harbor-14796.herokuapp.com/">
                  My Notes App
                </a>
                <a href="https://github.com/jrob02180/my-notes-app">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="image">
              <img src={scheduler} alt="Daily Planner" className="img-fluid" />
              <div className="text-overlay">
                <a href="https://jrob02180.github.io/daily-planner/">
                  Daily Planner
                </a>
                <a href="https://github.com/jrob02180/daily-planner">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="image">
              <img src={weather} alt="Weather Search" className="img-fluid" />
              <div className="text-overlay">
                <a href="https://jrob02180.github.io/weather-search/">
                  Weather Search
                </a>
                <a href="https://github.com/jrob02180/weather-search">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="image">
              <img
                src={password}
                alt="Password Generator"
                className="img-fluid"
              />
              <div className="text-overlay">
                <a href="https://jrob02180.github.io/jens-pw-gen/">
                  Jen's Password Generator
                </a>
                <a href="https://github.com/jrob02180/jens-pw-gen">
                  <img src={github} alt="github" className="tinyLogo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
