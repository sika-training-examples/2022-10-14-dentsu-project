import React from "react";
import "normalize.css";

const style = {
  backgroundColor: "lightblue",
  height: "100vh",
  margin: 0,
  padding: 10,
};

const Index = () => {
  return (
    <div style={style}>
      <h1>Super Dentsu Project</h1>
      <p>
        This is a super cool project that Dentsu is working on. It's going to be
        legendary.
      </p>
      <p>&copy; 2022</p>
    </div>
  );
};

export default Index;
