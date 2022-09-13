import React, { useState, useEffect } from "react";
import Container from "./components/Generic/generic";
import Header from "./components/Header/Header";
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
      <Header />
      {/* <BgAnimation /> */}
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
