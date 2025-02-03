import { Link } from "react-scroll";
import img from "../assets/IMG_9646.PNG?url";

export default function NavBar() {
  return (
    <nav>
      <img src={img} alt="logo" />
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={() => console.log("navigate")}
            duration={500}
            offset={-280}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-280}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            offset={-280}
          >
            Works
          </Link>
        </li>
      </ul>
      <Link to="contact" smooth={true} duration={500}>
        <button>Contact me!</button>
      </Link>
    </nav>
  );
}
