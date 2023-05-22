import React from "react";

export default function Resume() {
  return (
    <div>
      <div className="row resume text-center">
        <p style={{ fontSize: 50 }}>Download my resume</p>
        <div
          className="col-6 d-flex justify-content-center skillset"
          style={{ fontSize: 40, fontStyle: "italic" }}
        >
          Front-end Proficiencies
        </div>
        <div
          className="col-6 d-flex justify-content-center skillset"
          style={{ fontSize: 40, fontStyle: "italic" }}
        >
          Back-end Proficiencies
        </div>
          <div className="col-6 skillList"   style={{ fontSize: 30 }}>
            <ul>HTML</ul>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>responsive design</ul>
            <ul>React</ul>
            <ul>Bootstrap</ul>
          </div>
          <div
            className="col-6 skillList"
            style={{ fontSize: 30 }}
          >
            <ul>APIs</ul>
            <ul>Node</ul>
            <ul>Express</ul>
            <ul>MySQL, Sequeulze</ul>
            <ul>MongoDB, Mongoose</ul>
            <ul>REST</ul>
            <ul>GraphQL</ul>
          </div>
        </div>
      </div>
  );
}
