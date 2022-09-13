import React from "react";
import Skills from "../Skills/skills";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Fade } from "react-reveal";
import { Container } from "./style";

const About = () => {
  return (
    <Container id="about">
      <div className="container">
        <div className="content">
          <Fade right>
            <h1 className="heading1">About me</h1>
            <p>
              • Self-taught programmer with hands-on experience in web
              development. • Extroverted, flexible and passionate to learning
              new skills and adapting to new environments. • Committed to
              utilizing his skills to create value for a company.
            </p>

            <h1>Employment History</h1>
            <h2>Webbrain IT Academy</h2>
            <p>
              Finished 2 month internship (2022.05.01 ~ 2022.07.01) and managed
              front-end development of the company`s leading projects. Have been
              working with both back-end and front-end engineering team and
              developing complex systems using variety of modern software
            </p>
          </Fade>
          <Fade left>
            <h1 className="heading2">Contact details</h1>
            <div className="contact-details">
              <p>KholiylUlloh Ahmadjanov</p>
              <p>Current Address: South Korea</p>
              <p>Origin: From Uzbekistan</p>
              <a href="tel:01057109669">Phone number: 010 5710 9669</a>
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="icons">
            <a href="mailto:codevme@gmail.com" target="blank">
              <EmailIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
            <a href="https://github.com/KholiylUlloh" target="blank">
              <GitHubIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
          </div>
        </Fade>
      </div>
      <Skills />
    </Container>
  );
};

export default About;
