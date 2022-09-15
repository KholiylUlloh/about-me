import React from "react";
import Wobble from "react-reveal/Wobble";
// import { Link as Scroll } from "react-scroll";
import { Body } from "./style";
const Navbar = () => {
  return (
    <Body>
      <Wobble bottom>
        <div className="main">
          <h2 style={{ color: "white" }}>
            My Website will be optimized soon...
          </h2>
        </div>
        {/* <nav className="navigation">
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
        </nav> */}
      </Wobble>
    </Body>
  );
};

export default Navbar;
