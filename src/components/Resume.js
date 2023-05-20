import React from "react";

export default function Resume() {
  return (
    <div>
      <div className="row download" style={{ fontSize: 50 }}>
        <p>Download my resume</p>
        <div className="row">
          <div className="col-6" style={{ fontSize: 30 }}>
            <p>
              Front-end Proficiencies
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </p>
          </div>
          <div className="col-6" style={{ fontSize: 30 }}>
            <p>Back-end Proficiencies</p>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </div>
        </div>
      </div>
    </div>
  );
}
