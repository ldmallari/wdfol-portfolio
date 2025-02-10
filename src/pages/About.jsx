import React from "react";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Nav from "./Nav";
import '../assets/styles/about.css'

const About = () => {

  return (
    <>
    <Nav/>
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <Skills/>
      <Certificates/>
    </section>
    </>
  );
};

export default About;