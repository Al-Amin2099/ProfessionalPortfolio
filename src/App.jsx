import React from "react";
import BgVideo from "./assets/3D_printer_asset.mp4";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume";
import ContactFooter from "./components/ContactCard/Contact.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <NavigationBar />
        <Hero />
      </div>
      <Skills/>
      <Projects/>
      <Resume/>
      <ContactFooter/>
    </div>
  );
};

export default App;