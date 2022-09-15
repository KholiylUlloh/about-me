import React from "react";
import About from "../About/About";

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
    </div>
  );
};

export default Container;
