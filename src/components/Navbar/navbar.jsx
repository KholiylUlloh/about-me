import React from "react";
import { Fade } from "react-reveal";
import { Link as Scroll } from "react-scroll";
import { Body } from "./style";
const Navbar = () => {
  return (
    <Body>
      <Fade top>
        <nav className="navigation">
          <ul className="ul">
            <li>
              <Scroll
                to="header"
                smooth={true}
                duration={1000}
                className="link"
              >
                Home
              </Scroll>
            </li>
            <li>
              <Scroll
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                About
              </Scroll>
            </li>
            <li>
              <Scroll
                to="resume"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                Projects
              </Scroll>
            </li>
            <li>
              <Scroll
                to="testimonial"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                More
              </Scroll>
            </li>
          </ul>
        </nav>
      </Fade>
    </Body>
  );
};

export default Navbar;
