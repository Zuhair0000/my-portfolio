import React from "react";
import "aos/dist/aos.css";

export default function SectionWrap({ children, id, title, text }) {
  return (
    <section id={id} data-aos="fade-up" className="section-container">
      <h1 className="head-title">{title}</h1>
      <p className="head-text">{text}</p>
      {children}
    </section>
  );
}
