import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import { useTranslation } from 'react-i18next';
import React from 'react';


const Work = () => {
  const { t } = useTranslation();
  return (
    <div className="work-container">
      <h1 className="project-heading">{t('Project')}</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.value}
            />
          )
        })}
      </div>    
    </div>
  );
};

export default Work;