import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/kapil.png";
import React2 from "../assets/react2.webp";
import { useTranslation } from 'react-i18next';
import React from 'react';

const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="left">
        <h1>{t('User')}</h1>
        <p>{t('AboutMe')}</p>
        <Link to="/contact">
        <button className="btn">{t('Btn3')}</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
              Kushagra shrivastava working in cms 
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
};

export default AboutContent;
