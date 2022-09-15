import React, { useState, useEffect } from "react";
import BackgroundAnimation from "./components/Background/backgroundAnimation";
import Container from "./components/Generic/generic";
// import Container from "./components/Container";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return !loading ? (
    <div>
      <BackgroundAnimation />
      <Container />
    </div>
  ) : (
    <p
      style={{
        textAlign: "center",
        verticalAlign: "center",
        lineHeight: "750px",
        fontFamily: "Optima",
        fontSize: "30px",
      }}
    >
      Loading...
    </p>
  );
}

export default App;
