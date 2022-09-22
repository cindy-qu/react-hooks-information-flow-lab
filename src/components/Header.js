import React from "react";

function Header({onDarkModeClick, isDarkMode}) {
//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      
        </button>
        </header>
    )
  
}

export default Header;