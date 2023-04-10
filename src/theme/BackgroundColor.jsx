import React from 'react'
import { useThemeContext } from '../context/theme-context';

const BackgroundColor = ({className}) => {
  const {themehandler} = useThemeContext();

  return (
    <button className={className} onClick={() => themehandler(className)}></button>
  )
}

export default BackgroundColor;