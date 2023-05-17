import React from 'react';
import eatSpeakLove from '../assets/images/eat-speak-love-screenshot.png';
import birders from '../assets/images/birders-screenshot.png';
import notes from '../assets/images/note-screenshot.png';
import scheduler from '../assets/images/workday-scheduler-screenshot.png';
import weather from '../assets/images/weather-dashboard-screenshot.png';
import password from '../assets/images/password.png';


export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projectCard">
        <div className="card">
          <a href='https://github.com/nlewis742/eat-speak-love'>
          <img src={eatSpeakLove}  />
          </a>
         </div> 
         <label className="card-title">Eat Speak Love</label>
         </div>
        <div className="projectCard">
        <div className="card">
          <a href='https://github.com/nlewis742/birders-anonymous'>
          <img src={birders}  />
          </a>
         </div> 
         <label>Birders Anonymous</label>
         </div>
         <div className="projectCard">
        <div className="card">
          <a href='https://github.com/jrob02180/my-notes-app'>
          <img src={notes}  />
          </a>
         </div> 
         <label>My Notes App</label>
         </div>
         <div className="projectCard">
        <div className="card">
          <a href='https://github.com/jrob02180/daily-planner'>
          <img src={scheduler}  />
          </a>
         </div> 
         <label>Daily Planner</label>
         </div>
         <div className="projectCard">
        <div className="card">
          <a href='https://github.com/jrob02180/weather-search'>
          <img src={weather}  />
          </a>
         </div> 
         <label>Weather Search</label>
         </div>
         <div className="projectCard">
        <div className="card">
          <a href='https://github.com/jrob02180/jens-pw-gen'>
          <img src={password}  />
          </a>
         </div> 
         <label>Jen's Password Generator</label>
         </div>

    </div>
  );
}
