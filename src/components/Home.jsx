import img from "../assets/home.webp";

export default function Home() {
  return (
    <section className="home-container" id="home">
      <div>
        <p className="intro">
          <span style={{ fontSize: "2rem" }}>Hello,</span> <br /> I'm{" "}
          <span style={{ color: "#a33e3e" }}>Zuhair</span>.
          <br />
          Frontend Developer.
        </p>
        <p className="discription">
          I specialize in{" "}
          <span style={{ color: "#a33e3e" }}>web development</span>, focusing on
          frontend technologies like React.js, <br /> JavaScript and Node.js.
        </p>
      </div>
      <div>
        <img src={img} alt="Zuhair" className="homeImg" />
      </div>
    </section>
  );
}
