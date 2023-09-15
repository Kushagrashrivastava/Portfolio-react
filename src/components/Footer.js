import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <div>
                    <p>{t('Adr')}</p>
                </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
            7024009810,9755661494 </h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
            kushagra10june@gmail.com </h4>
            </div>            
        </div>

        <div className="right">
            <h4>{t('About')}</h4>
            <p>{t('AbtMe')}</p>
            <div className="social">
            <Link to="">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
            </Link>
            <Link to="https://twitter.com/?lang=en" target="_blank">
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
            </Link>
            <Link to="https://www.linkedin.com/in/kushagra-shrivastava-893149221/" target="_blank">            
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
            </Link>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;
