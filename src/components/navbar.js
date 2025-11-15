import React,{useState} from "react";
import "../style/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="arreLogo"><img src="data:image/png;base64,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" alt="Arré-logo" /></div>
    <div className="headerDivider"><img src="https://media.arre.co.in/v3/icons/headerDivder.svg" alt="header-divider"/></div>
    <div className="navbarOptions">
      <div className="articlesOption">
        <span>Articles</span><img src="https://media.arre.co.in/v3/icons/headerDownArrow.svg" alt="downArrow"/>
      </div>
      <div className="studioOption"><a href="./" target="_blank"><p>Studio</p></a></div>
      <div className="voiceOption"><a href="./" target="_blank"><p>Voice</p></a></div>
      <div className="moreOption">
        <span>More</span><img src="https://media.arre.co.in/v3/icons/headerDownArrow.svg" alt="downArrow"/>
      </div>
      </div>
      <div className="headerDivider">
        <img src="https://media.arre.co.in/v3/icons/headerDivder.svg" alt="header-divider"/>
        </div>
      <div className="searchSection">
        <img src="https://media.arre.co.in/v3/icons/headerSearchIconWhite.svg" alt="search icon"/>
        </div>
     <div className="hamburgerMenu" onClick={() => setMenuOpen(!menuOpen)}>
          <img 
            src="https://www.svgrepo.com/show/506800/burger-menu.svg" 
            alt="menu"
          />
        </div>
    </nav>
  );
}

export default Navbar;
