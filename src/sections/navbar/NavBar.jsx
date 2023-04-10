import React from 'react';
import { IoIosColorPalette } from "react-icons/io";
import Logo from "../../assets/logo.jpg";
import data from './data';
import { useModalContext } from '../../context/modal-context';
import "./navbar.css";

const NavBar = () => {
  const {showModalHandler} = useModalContext();

  return (
    <nav>
        <div className='container nav__container'>
          <a href='index.html' className='nav__logo'>  {/* The index.html here will refresh the page, whenever this image is clicked on */}
            <img src={Logo} alt="Logo"></img>
          </a>

          <ul className='nav__menu'>
            {data.map(item => 
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            )}
          </ul>
          
          <button id='theme__icon' onClick={showModalHandler}> 
            <IoIosColorPalette /> 
          </button>
        </div>
    </nav>
  )
}

export default NavBar;