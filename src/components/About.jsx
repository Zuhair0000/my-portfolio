import React, { useEffect } from "react";
import UXUI from "../assets/UX&UI.png";
import webdev from "../assets/web-development.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <SectionWrap
        id="about"
        title={"What I do"}
        text={
          " I create responsive and engaging websites while designing intuitive user interfaces that enhance user experiences. My work blends web development with UI/UX design, focusing on functionality, aesthetics, and delivering seamless digital solutions tailored to users’ needs."
        }
      >
        <div className="skillsBars">
          <div className="skillsBar">
            <img src={webdev} alt="webdev" className="skillImg" />
            <div className="skillText">
              <h2>Web Development</h2>
              <p>
                {" "}
                I build responsive and dynamic websites using modern tools like
                React.js and JavaScript to deliver seamless user experiences.
              </p>
            </div>
          </div>
          <div className="skillsBar">
            <img src={UXUI} alt="UX&UI" className="skillImg" />
            <div className="skillText">
              <h2>UX/UI Design</h2>
              <p>
                I design intuitive and visually appealing interfaces, focusing
                on user needs and enhancing usability.
              </p>
            </div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
}
