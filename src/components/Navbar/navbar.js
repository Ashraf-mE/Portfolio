import React, {useState, useRef, useEffect} from "react";
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = ({isLightMode, toggle}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <nav className={isLightMode ? 'navbar-lm' : 'navbar'}>
      <img src={`${process.env.PUBLIC_URL}/assets/A_logo.png`}  alt="logo" className="logo" onClick={toggle}/>

  {!showMenu && (
    <button className="dropdownBtn" onClick={toggleMenu}>
      <img src={`${process.env.PUBLIC_URL}/assets/menu.png`}  alt="" className="smallMenuImg"/>
    </button>)}

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
  {showMenu && (
    <div className="menuContainer" ref={menuRef} >
      <button className="dropdownBtn" onClick={toggleMenu}>
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
    )}
  {/* Till here */}

    </nav>
  );
};

export default Navbar;
