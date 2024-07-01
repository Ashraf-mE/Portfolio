import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Ashraf</span><br />Data Scientist</span>
        <p className="introPara">I'm Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, enim.</p>
        <Link><button className="btn"><img src="assets/hireme.png" alt="hireme_Img" className="btnImg"/>Hire me</button></Link>
      </div>
        <img src="assets/img-2-removebg-preview-cool-copy.png" alt="Profile" srcSet="" className="bg"/>
    </section>
  );
};

export default intro;

