import React, {useState} from "react";
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = ({isLightMode, toggle}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})
  };

  return (
    <nav className={isLightMode ? 'navbar-lm' : 'navbar'}>
      <img src={`${process.env.PUBLIC_URL}/assets/A_logo.png`}  alt="logo" className="logo" onClick={toggle}/>

  {!showMenu?(
    <button className="dropdownBtn" onClick={() => setShowMenu(!showMenu)}>
      <img src={`${process.env.PUBLIC_URL}/assets/menu.png`}  alt="" className="smallMenuImg"/>
    </button>):(<></>)}

  {/* For Big */}
    <div className="desktopMenu">
      <Link className="desktopMenuListItem" activeClass="activeLink" to="intro" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
      <Link className="desktopMenuListItem" activeClass="activeLink" to="skills" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
      <Link className="desktopMenuListItem" activeClass="activeLink" to="works" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link>
      {/* <Link className="desktopMenuListItem">Clients</Link> */}
    </div>
    <button className="desktopMenuBtn" onClick={handleClick}>
      <img src={`${process.env.PUBLIC_URL}/assets/contact.png`}  alt="" className="desktopMenuImg" />
      Contact Me
    </button>
  {/* Till here */}

  {/* For Small */}
  {showMenu?(
    <div className="menuContainer">
      <button className="dropdownBtn" onClick={() => setShowMenu(!showMenu)}>
      <img src={`${process.env.PUBLIC_URL}/assets/menu.png`} alt="" className="smallMenuImg"/>
    </button>
      <div className="desktopMenu_s">
        <Link className="desktopMenuListItem_s" activeClass="activeLink" to="intro" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        <Link className="desktopMenuListItem_s" activeClass="activeLink" to="skills" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className="desktopMenuListItem_s" activeClass="activeLink" to="works" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link>
        {/* <Link className="desktopMenuListItem">Clients</Link> */}
      <button className="desktopMenuBtn_s" activeClass="activeLink" onClick={handleClick}>
        Contact Me
      </button>
      </div>
    </div>
    ):(<></>)}
  {/* Till here */}

    </nav>
  );
};

export default Navbar;
