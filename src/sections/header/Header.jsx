import React from 'react';
import HeaderImage from "../../assets/header.jpg";
import data from './data';
import "./header.css";

const Header = () => {
  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__profile">
        <img src={HeaderImage} alt="Header Portrait" />
      </div>

      <h3>Aishat Moshood</h3>

      <p>
        You're a click away from building your dream website or web app. Send me details of your project for a mobile, responsive and highly performing application.
      </p>

      <div className="header__cta">
        <a href="#contact" className='btn primary'>Let's talk</a>
        <a href="#portfolio" className='btn light'>My work</a>
      </div>

      <div className="header__socials">
        {data.map(item => 
          <a href={item.link} key={item.id} target="_blank" rel='noopener noreferrer'>
            {item.icon}
          </a>
        )}
      </div>
    </div>
   </header>
  )
}

export default Header;