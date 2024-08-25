import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What do I</span>
        <span className="skillDesc">I'm a skilled and Passionate bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus delectus inventore minus sunt, dignissimos obcaecati, optio libero, fugit odit ea ipsam accusantium? Nobis eveniet veritatis fugit odio porro labore!</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={`${process.env.PUBLIC_URL}/assets/ui-design.png`} alt="img" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Analysis</h2>
                    <p>Sample text.....</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={`${process.env.PUBLIC_URL}/assets/website-design.png`} alt="img" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Machine Learning</h2>
                    <p>Sample text.....</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={`${process.env.PUBLIC_URL}/assets/app-design.png`} alt="img" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Databases</h2>
                    <p>Sample text.....</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills
