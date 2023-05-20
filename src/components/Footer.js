import React from "react";
import github from "../assets/images/github-mark.png";
import linkedin from "../assets/images/linked-in.png";
import insta from "../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-center align-items-center">
        <a href="https://github.com/jrob02180">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/jen-roberson-060417276/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={insta} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
