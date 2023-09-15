import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const WorkCard = (props) => {
  const { t } = useTranslation();
  return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{t('UpcommingPro')}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                <NavLink to={props.view} className="btn">{t('View')}</NavLink>
                <NavLink to="url.com" className="btn">{t('Source')}</NavLink>
            </div>
            </div>
        </div>
  );
};

export default WorkCard;
