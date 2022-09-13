import React from "react";
import About from "../About/About";
// import Resume from "./Resume";
// import Certificates from "./Certificates";

const Container = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <About />
      {/* <Resume /> */}
      {/* <Certificates /> */}
    </div>
  );
};

export default Container;
