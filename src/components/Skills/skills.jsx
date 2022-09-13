import React from "react";
import { Fade } from "react-reveal";
import { Container } from "./style";
import indicator1 from "../../assets/indicator.png";
import indicator2 from "../../assets/indicator2.png";

const Skills = () => {
  return (
    <Container>
      <Fade right></Fade>
      <div className="container-2">
        <Fade right>
          <h1 className="heading-2">My Abilities:</h1>
        </Fade>
        <Fade left>
          <div className="title">
            <h3>HTML5</h3>
          </div>
          <div className="indicator">
            <img src={indicator1} alt="html" width={"80%"} height={30} />
            <h3 className="level">Advanced</h3>
          </div>
        </Fade>
        <Fade right>
          <div className="title">
            <h3>CSS3</h3>
          </div>
          <div className="indicator">
            <h3 className="level">Advanced</h3>
            <img src={indicator1} alt="html" width={"80%"} height={30} />
          </div>
        </Fade>
        <Fade right>
          <div className="title">
            <h3>Tailwind Css</h3>
          </div>
          <div className="indicator">
            <img src={indicator2} alt="html" width={"80%"} height={30} />
            <h3 className="level">Regular</h3>
          </div>
        </Fade>
        <Fade left>
          <div className="title">
            <h3>JavaScript ES6+</h3>
          </div>
          <div className="indicator">
            <h3 className="level">Advanced</h3>
            <img src={indicator1} alt="html" width={"80%"} height={30} />
          </div>
        </Fade>
        <Fade right>
          <div className="title">
            <h3>React JS</h3>
          </div>
          <div className="indicator">
            <h3 className="level">Advanced</h3>
            <img src={indicator1} alt="html" width={"80%"} height={30} />
          </div>
        </Fade>
        <Fade right>
          <div className="title">
            <h3>Next JS</h3>
          </div>
          <div className="indicator">
            <img src={indicator2} alt="html" width={"80%"} height={30} />
            <h3 className="level">Regular</h3>
          </div>
        </Fade>
        <Fade left>
          <div className="title">
            <h3>Node/Express JS</h3>
          </div>
          <div className="indicator">
            <img src={indicator2} alt="html" width={"80%"} height={30} />
            <h3 className="level">Regular</h3>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default Skills;
