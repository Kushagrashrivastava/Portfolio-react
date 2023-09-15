import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/project1.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeroImg = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>{t('Free')}</p>
        <h1>{t('Rdev')}</h1>
        <Link to="/project" className="btn">{t('Btn1')}</Link>
        <Link to="/contact" className="btn">{t('Btn2')}</Link>
      </div>
    </div>
  );
};

export default HeroImg;
