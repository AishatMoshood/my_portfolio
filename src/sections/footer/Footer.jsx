import React from 'react';
import {links, socials} from './data';
import "./footer.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer id="footer">
       <div className="container footer__container">
          <ul className='nav__menu'>
              {
                links.map(link => <li key={link.id}>
                  <a href={link.link}>{link.title}</a>
                </li>)
              }
          </ul>

          <div className="footer__socials">
            {
              socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
            }
          </div>

          <div className="footer__copyright">
            <small>&copy; {year} All Rights Reserved</small>
          </div>
       </div>
    </footer>
  )
}

export default Footer;