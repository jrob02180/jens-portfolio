import React from 'react';
import github from '../assets/images/github-mark-white.png';
import linkedin from '../assets/images/linked-in.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
              <a href='https://github.com/jrob02180'>
                <img src={github} alt='github' />
              </a>
            </div>
            <div className="container">
              <a href='https://www.linkedin.com/in/jen-roberson-060417276/'>
                <img src={linkedin} alt='linkedin' />
              </a>
            </div>
        </footer>
    );
}

export default Footer;
