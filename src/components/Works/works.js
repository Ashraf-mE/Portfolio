import React from "react";
import './works.css'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ratione
        quia et omnis excepturi accusantium ducimus aut? Molestias, est nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto beatae dolore voluptates deleniti, vitae dolores nulla vel aliquam perspiciatis quam quas praesentium exercitationem. Sit minima totam id ipsa repudiandae laboriosam.
      </span>
      <div className="worksImgs">
        <img src={`${process.env.PUBLIC_URL}/assets/portfolio-1.png`} alt="P1" className="worksImg" />
        <img src="/assets/portfolio-2.png" alt="P2" className="worksImg" />
      </div>

        <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
