import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import { useTranslation } from 'react-i18next';
// import PricingCard from "../components/PricingCard";

const Project = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={t('Project')} text={t('ProjectDis')}/>
      <Work/>
       {/* <PricingCard/> */}
       {/* i will replace PricingCard with something good latter */}
      <Footer/>
    </div>
  );
};

export default Project;
