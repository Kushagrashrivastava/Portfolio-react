import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/kapil.png";
import React2 from "../assets/react2.webp";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello! I am Kushagra Shrivastava </h1>
        <p>Computer science engineer at IPS Academy, Indore(M.P.) (2021 - 2025). An ambitious and flexible candidate,
Open to work in both backend and frontend development, wants to excel my area of interest with an
opportunity for growth and career
advancement and interest to work in different streams of technology.If you want to contact me plz fill the contact form.</p>
        <Link to="/contact">
        <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
};

export default AboutContent;
