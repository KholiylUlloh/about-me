import React, { useState, useEffect } from "react";
import BackgroundAnimation from "./components/Background/backgroundAnimation";
import Container from "./components/Generic/generic";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return !loading ? (
    <div>
      <BackgroundAnimation />
      <Container />
    </div>
  ) : (
    <Loader />
  );
}

export default App;
