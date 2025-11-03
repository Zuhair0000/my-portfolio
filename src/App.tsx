import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TextParallaxContent from "./components/TextParallaxContent";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TextParallaxContent
        image="/first.jpeg"
        heading="My Philosophy"
        subheading="Every line of code tells a story"
      />
      <About />
      <TextParallaxContent
        image="/s.jpeg"
        heading="The Process"
        subheading="From concept to launch"
      />
      <Projects />
      <TextParallaxContent
        image="/video/bg3.mp4"
        heading="Vision for the Future"
        subheading="The next big idea starts here"
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
