import React, { useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "../Navbar/navbar";
import { Container } from "./style";
import { useState } from "react";
import Tada from "react-reveal/Tada";

const Header = () => {
  const [day, setDay] = useState("");
  // const [hour, setHour] = useState("");

  const getDay = () => {
    let date = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let today = weekdays[date.getDay()];
    setDay(today);
  };

  // const getHours = () => {
  //   var time = new Date();
  //   var todisplay = 0;

  //   if (time.getHours() < 10) todisplay += time.getHours();
  //   else todisplay += time.getHours();

  //   if (time.getMinutes() < 10) todisplay += `:${0}` + time.getMinutes();
  //   else todisplay += ":" + time.getMinutes();

  //   if (+todisplay < 12) {
  //     setHour("Morning");
  //   }
  // };

  useEffect(() => {
    getDay();
    // getHours();
  }, []);

  return (
    <Container id="header">
      <Navbar />
      <div className="container">
        <div className="text">
          <Tada bottom>
            <h1 className="mainText">
              Happy {day}
              <br />
              I'm Adam a Frontend developer
            </h1>
          </Tada>

          <Fade bottom>
            <div className="icons">
              <a href="https://github.com/KholiylUlloh" target="blank">
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                    opacity: "0.5",
                  }}
                />
              </a>
              <a href="mailto:codevme@gmail.com" target="blank">
                <EmailIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                    opacity: "0.5",
                  }}
                />
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <div className="icon2">
          <Scroll to="about" smooth={true} duration={1000} spy={true}>
            <ArrowDropDownCircleIcon
              style={{ fontSize: "50px", opacity: "0.4" }}
            />
          </Scroll>
        </div>
      </Fade>
    </Container>
  );
};

export default Header;
