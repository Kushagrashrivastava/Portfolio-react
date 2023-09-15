import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <NavLink to="/">
        <h1>{t('UserName')}</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <NavLink to="/">{t('Home')}</NavLink>
        </li>
        <li>
            <NavLink to="/project">{t('Project')}</NavLink>
        </li>
        <li>
            <NavLink to="/about">{t('About')}</NavLink>
        </li>
        <li>
            <NavLink to="/contact">{t('Contact')}</NavLink>
        </li>
        <Select placeholder="Language">
      <Option value="English" onClick={() => changeLanguage('en')}>English</Option>
      <Option value="Hindi" onClick={() => changeLanguage('hi')} >हिंदी</Option>
      <Option value="French" onClick={() => changeLanguage('fr')} >French</Option>
    </Select>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{color: "#fff"}} 
        />
        ) : (
        <FaBars size={20} style={{color: "#fff"}} 
        />
        )}
      </div> 
    </div>
  )
}

export default Navbar;
