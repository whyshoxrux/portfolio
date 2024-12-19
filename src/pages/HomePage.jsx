import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Home from "../components/BodySections/Home";
import About from "../components/BodySections/About";
import Education from "../components/BodySections/Education";
import Skills from "../components/BodySections/Skills";
import Projects from "../components/BodySections/Projects";
import Contact from "../components/BodySections/Contact";
import ScrollToTopButton from "../components/ScrollUpButton";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
