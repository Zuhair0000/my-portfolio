import React from "react";
import SectionWrap from "./SectionWrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.JPG?url";
import img3 from "../assets/img3.JPG?url";
const contents = [
  {
    img: img1,
    title: "GYM",
    description:
      "A responsive GYM app with React and Tailwind CSS that lets users select muscle groups and view exercises.",
    link: "",
  },
  { img: img2, title: "TO-DO", description: "desc", link: "" },
  { img: img3, title: "ANY", description: "desc", link: "" },
];

export default function Works() {
  return (
    <SectionWrap
      id="works"
      title={"My Works"}
      text={
        "Welcome to my project showcase! Here, you’ll find a collection of my work in web development, design, and software engineering."
      }
    >
      <div className="works">
        {contents.map((content, i) => (
          <Work key={i} content={content} />
        ))}
      </div>
      <button className="works-btn">See More!</button>
    </SectionWrap>
  );
}

function Work({ content }) {
  return (
    <div className="work">
      <img src={content.img} alt="" />
      <div className="layer">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <a href={content.link}>
          <button className="work-btn">See Details!</button>
        </a>
      </div>
    </div>
  );
}
