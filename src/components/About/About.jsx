import React from "react";
import Skills from "../Skills/skills";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Fade, Zoom, Bounce, Slide } from "react-reveal";
import { Container } from "./style";
import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <Container id="about">
      <div className="container">
        <div className="content">
          <Slide right>
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
          </Slide>
          <Bounce left>
            <h1 className="heading2">Contact details</h1>
            <div className="contact-details">
              <p>KholiylUlloh Ahmadjanov</p>
              <p>Current Address: Andijan, Uzbekistan</p>
              <p>Origin: From Uzbekistan</p>
              <a href="tel:998902036474">Phone number: 998902036474</a>
            </div>
          </Bounce>
        </div>
        <Zoom top>
          <div className="resume">
            <a href={require("../../assets/resume/resume.pdf")} download>
              <BsDownload fill="white" size={50} />
              <h3>DOWNLOAD RESUME</h3>
            </a>
          </div>
        </Zoom>
        <Fade right>
          <div className="icons">
            <a href="mailto:ahmadjonovdev@gmail.com" target="blank">
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
