import React from "react";
import eatSpeakLove from "../assets/images/eat-speak-love-screenshot.png";
import birders from "../assets/images/birders-screenshot.png";
import notes from "../assets/images/note-screenshot.png";
import scheduler from "../assets/images/workday-scheduler-screenshot.png";
import weather from "../assets/images/weather-dashboard-screenshot.png";
import password from "../assets/images/password.png";

export default function Project() {
  return (
    <div>
      <div className="text-center" style={{fontSize: 50}}>Projects</div>
      <div className="container">
      <div className="row" >
        <div className="col-6" >
        <div className="image-container">
          <a href="https://github.com/nlewis742/eat-speak-love">
            <img src={eatSpeakLove} alt="Eat Speak Love" className="img-fluid" />
          </a>
          </div>
            <label className="card-title">Eat Speak Love</label>
        </div>
        <div className="col-6" >
        <div className="image-container">
          <a href="https://github.com/nlewis742/birders-anonymous">
            <img src={birders} alt="Birders" className="img-fluid"/>
          </a>
          </div>
            <label>Birders Anonymous</label>
        </div>
        <div className="col-6">
        <div className="image-container">
          <a href="https://github.com/jrob02180/my-notes-app">
            <img src={notes} alt="My Notes App" className="img-fluid" />
          </a>
          </div>
            <label>My Notes App</label>
        </div>
        <div className="col-6">
        <div className="image-container">
          <a href="https://github.com/jrob02180/daily-planner">
            <img src={scheduler} alt="Daily Planner" className="img-fluid" />
          </a>
          </div>
            <label>Daily Planner</label>
        </div>
        <div className="col-6">
        <div className="image-container">
          <a href="https://github.com/jrob02180/weather-search">
            <img src={weather} alt="Weather Search" className="img-fluid"/>
          </a>
          </div>
            <label>Weather Search</label>
        </div>
        <div className="col-6">
        <div className="image-container">
          <a href="https://github.com/jrob02180/jens-pw-gen">
            <img src={password} alt="Password Generator"  className="img-fluid"/>
          </a>
          </div>
            <label>Jen's Password Generator</label>
        </div>
      </div>
    </div>
    </div>
  );
}
