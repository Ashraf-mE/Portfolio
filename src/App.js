import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works"; 
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer"; 

function App() {
  const [isLightMode, setLightMode] = useState(false);

  const toggle = () => {
    setLightMode(!isLightMode);
  }

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('lm');
    } else {
      document.body.classList.remove('lm');
    }
  }, [isLightMode]);

  return (
    <div className="App">
      <Navbar isLightMode={isLightMode} toggle={toggle} />
      <Intro />
      <Skills isLightMode={isLightMode}/>
      <Works />
      <Contact isLightMode={isLightMode}/>
      <Footer isLightMode={isLightMode}/>
    </div>
  );
}

export default App;
