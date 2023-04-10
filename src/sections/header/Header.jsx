import { useEffect } from 'react';
import Aos from 'aos';
import HeaderImage from "../../assets/welcome-img.jpg";
import data from './data';
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__profile" data-aos="zoom-in">
        <img src={HeaderImage} alt="Header Portrait" />
      </div>

      <h3 data-aos="fade-up">Welcome</h3>

      <p data-aos="fade-up">
        You're a click away from building your dream website or web application. Send me details of your project for a responsive and highly performing application.
      </p>

      <div className="header__cta" data-aos="fade-up">
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