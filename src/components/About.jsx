import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="descr-me">
        <h1>About Me</h1>
        <p>Talk is cheap, see my code...</p>
        <p>
          I am self-taught React JS web developer with a good experience on
          modern web development tools
        </p>
      </div>
      <div className="employment-wrap">
        <h1 className="employment">Employment History</h1>
        <h2>Digital One</h2>
        <p>
          Finished 2 month internship (2022.05.01 ~ 2022.07.01) and managed
          front-end development of the company`s leading project. Have been
          working with the back-end and front-end engineering team and
          developing complex systems using variety of modern software
        </p>
      </div>
      <div className="contact-container">
        <h1>Contact Details</h1>
        <p>KholiylUlloh Ahmadjanov</p>
        <p>From Uzbekistan, living in South Korea</p>
        <p>Contact Number: 01057109669</p>
      </div>
    </div>
  );
};

export default About;
