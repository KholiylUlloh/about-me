import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import profile from "../assets/profile.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="profileImg">
        <img src={profile} alt="my" />
      </div>
      <div className="descr">
        <h1>
          Hi I am Adam,<br></br>Web Developer
        </h1>
        <div className="items">
          <VscGithubInverted size={30} fill={"white"} />
          <BsLinkedin size={30} fill={"white"} />
          <GrMail size={30} fill={"white"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
